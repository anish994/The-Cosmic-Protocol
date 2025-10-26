/**
 * CARD CALCULATOR v1.0
 * Rules Engine Implementation
 * 
 * Implements formulas from RULES_ENGINE_LAYER1_FOUNDATION_COMBAT.json
 * - HP calculation based on glyph composition
 * - Attack/Defense/Speed stat calculations
 * - KP budget validation
 * - Synergy detection and bonuses
 * - Jyotish modifiers integration
 */

const CardCalculator = {
    
    /**
     * Calculate card's starting HP based on glyph composition
     * Rule R-1.2.2: base_HP + (defensive * 10) + (utility * 5) - (offensive * 10)
     */
    calculateHP(glyphs, jyotishModifiers = {}) {
        const BASE_HP = 100;
        const MIN_HP = 50;
        const MAX_HP = 250;
        
        // Categorize glyphs
        const categories = this.categorizeGlyphs(glyphs);
        
        // Base calculation
        let hp = BASE_HP;
        hp += categories.defensive * 10;
        hp += categories.utility * 5;
        hp -= categories.offensive * 10;
        
        // Apply Jyotish modifiers (Rule R-1.2.2.1)
        if (jyotishModifiers.house_1) {
            hp *= 1.10; // 1st House: +10% max HP
        }
        if (jyotishModifiers.house_6) {
            hp *= 1.05; // 6th House: +5% max HP
        }
        if (jyotishModifiers.saturn_tier >= 3) {
            hp += 20; // Saturn Tier 3+: +20 HP flat
        }
        if (jyotishModifiers.mars_tier >= 3) {
            hp -= 10; // Mars Tier 3+: -10 HP (aggressive builds)
        }
        
        // Enforce constraints
        hp = Math.max(MIN_HP, Math.min(MAX_HP, Math.round(hp)));
        
        return {
            finalHP: hp,
            baseHP: BASE_HP,
            offensiveGlyphs: categories.offensive,
            defensiveGlyphs: categories.defensive,
            utilityGlyphs: categories.utility,
            jyotishBonus: hp - (BASE_HP + categories.defensive * 10 + categories.utility * 5 - categories.offensive * 10)
        };
    },
    
    /**
     * Categorize glyphs by type (offensive/defensive/utility)
     * Based on Rule R-1.2.2 keyword classifications
     */
    categorizeGlyphs(glyphs) {
        let offensive = 0;
        let defensive = 0;
        let utility = 0;
        
        const offensiveKeywords = ['[Strike]', '[Burn]', '[Detonate]', '[Damage]', '[Burst]'];
        const defensiveKeywords = ['[Shield]', '[Heal]', '[Sanctify]', '[Structure]', '[Protection]', '[Regen]'];
        const utilityKeywords = ['[Reveal]', '[Forecast]', '[Convert]', '[Bless]', '[State]', '[Prediction]', '[Pattern]'];
        
        glyphs.forEach(glyphId => {
            // Get glyph from database (assuming SkillDatabase is loaded)
            const glyph = window.SkillDatabase ? window.SkillDatabase.getSkill(glyphId) : null;
            if (!glyph) return;
            
            // Check keywords
            const isOffensive = glyph.keywords.some(kw => offensiveKeywords.includes(kw));
            const isDefensive = glyph.keywords.some(kw => defensiveKeywords.includes(kw));
            const isUtility = glyph.keywords.some(kw => utilityKeywords.includes(kw));
            
            if (isOffensive) offensive++;
            else if (isDefensive) defensive++;
            else if (isUtility) utility++;
        });
        
        return { offensive, defensive, utility };
    },
    
    /**
     * Calculate Attack/Defense/Speed stats
     * Rule R-1.2.3: Stat formulas based on glyph composition and tiers
     */
    calculateStats(glyphs, jyotishModifiers = {}) {
        const categories = this.categorizeGlyphs(glyphs);
        const tiers = this.countGlyphTiers(glyphs);
        
        // Attack Power calculation (Rule R-1.2.3)
        const BASE_ATTACK = 10;
        let attack = BASE_ATTACK;
        attack += categories.offensive * 5;
        attack += tiers.tier2Offensive * 3;
        attack += tiers.tier3Offensive * 5;
        attack = Math.min(100, Math.max(10, attack)); // Range: 10-100
        
        // Defense calculation
        const BASE_DEFENSE = 10;
        let defense = BASE_DEFENSE;
        defense += categories.defensive * 5;
        defense += tiers.shieldGlyphs * 8;
        defense = Math.min(80, Math.max(10, defense)); // Range: 10-80
        
        // Speed calculation
        const BASE_SPEED = 50;
        let speed = BASE_SPEED;
        speed += (jyotishModifiers.mercury_influence || 0) * 10;
        speed -= tiers.heavyGlyphs * 5;
        speed = Math.min(100, Math.max(20, speed)); // Range: 20-100
        
        return {
            attack: Math.round(attack),
            defense: Math.round(defense),
            speed: Math.round(speed),
            breakdown: {
                offensiveGlyphs: categories.offensive,
                defensiveGlyphs: categories.defensive,
                tier2Offensive: tiers.tier2Offensive,
                tier3Offensive: tiers.tier3Offensive,
                shieldGlyphs: tiers.shieldGlyphs,
                heavyGlyphs: tiers.heavyGlyphs
            }
        };
    },
    
    /**
     * Count glyph tiers and special types for stat calculations
     */
    countGlyphTiers(glyphs) {
        let tier2Offensive = 0;
        let tier3Offensive = 0;
        let shieldGlyphs = 0;
        let heavyGlyphs = 0;
        
        glyphs.forEach(glyphId => {
            const glyph = window.SkillDatabase ? window.SkillDatabase.getSkill(glyphId) : null;
            if (!glyph) return;
            
            // Count tier 2/3 offensive
            const isOffensive = glyph.keywords.some(kw => ['[Strike]', '[Burn]', '[Detonate]', '[Damage]'].includes(kw));
            if (isOffensive && glyph.tier === 2) tier2Offensive++;
            if (isOffensive && glyph.tier === 3) tier3Offensive++;
            
            // Count shield glyphs
            if (glyph.keywords.includes('[Shield]')) shieldGlyphs++;
            
            // Count heavy glyphs (high KP cost or specific keywords)
            if (glyph.kpCost >= 3 || glyph.keywords.includes('[Ultimate]')) heavyGlyphs++;
        });
        
        return { tier2Offensive, tier3Offensive, shieldGlyphs, heavyGlyphs };
    },
    
    /**
     * Calculate total KP budget and validate against limits
     * KP budget = sum of all glyph KP costs
     * Must be within reasonable range for balance
     */
    calculateKPBudget(glyphs) {
        const MIN_BUDGET = 12; // 12 glyphs * 1 KP minimum
        const RECOMMENDED_MAX = 30; // Balanced builds
        const ABSOLUTE_MAX = 48; // 12 glyphs * 4 KP maximum
        
        let totalKP = 0;
        let breakdown = [];
        
        glyphs.forEach(glyphId => {
            const glyph = window.SkillDatabase ? window.SkillDatabase.getSkill(glyphId) : null;
            if (!glyph) return;
            
            totalKP += glyph.kpCost;
            breakdown.push({
                id: glyphId,
                name: glyph.name,
                cost: glyph.kpCost,
                tier: glyph.tier
            });
        });
        
        const status = totalKP > ABSOLUTE_MAX ? 'invalid' : 
                       totalKP > RECOMMENDED_MAX ? 'high' : 
                       totalKP < MIN_BUDGET ? 'invalid' : 'optimal';
        
        return {
            totalKP,
            minBudget: MIN_BUDGET,
            recommendedMax: RECOMMENDED_MAX,
            absoluteMax: ABSOLUTE_MAX,
            status,
            breakdown,
            isValid: totalKP >= MIN_BUDGET && totalKP <= ABSOLUTE_MAX,
            warning: status === 'high' ? 'High KP budget may limit in-battle flexibility' : null
        };
    },
    
    /**
     * Detect synergies between glyphs
     * Synergies provide bonuses when specific glyph combinations are present
     */
    detectSynergies(glyphs) {
        const synergies = [];
        const glyphData = glyphs.map(id => 
            window.SkillDatabase ? window.SkillDatabase.getSkill(id) : null
        ).filter(g => g !== null);
        
        // Synergy 1: Burn + Detonate combo
        const hasBurn = glyphData.some(g => g.keywords.includes('[Burn]'));
        const hasDetonate = glyphData.some(g => g.keywords.includes('[Detonate]'));
        if (hasBurn && hasDetonate) {
            synergies.push({
                name: 'Burn & Detonate Combo',
                bonus: '+20% [Detonate] damage',
                glyphs: 'Tantra synergy',
                description: '[Burn] stacks amplify [Detonate] explosions'
            });
        }
        
        // Synergy 2: Heal + Bless combo
        const hasHeal = glyphData.some(g => g.keywords.includes('[Heal]'));
        const hasBless = glyphData.some(g => g.keywords.includes('[Bless]'));
        if (hasHeal && hasBless) {
            synergies.push({
                name: 'Divine Healing',
                bonus: '+30% healing effectiveness',
                glyphs: 'Therapeutic + Invocation',
                description: '[Bless] enhances all healing received'
            });
        }
        
        // Synergy 3: Shield + Anchor combo
        const hasShield = glyphData.some(g => g.keywords.includes('[Shield]'));
        const hasAnchor = glyphData.some(g => g.keywords.includes('[Anchor]'));
        if (hasShield && hasAnchor) {
            synergies.push({
                name: 'Unbreakable Defense',
                bonus: 'Shields cannot be dispelled',
                glyphs: 'Foundational mastery',
                description: '[Anchor] protects [Shield] from removal'
            });
        }
        
        // Synergy 4: Reveal + Forecast combo
        const hasReveal = glyphData.some(g => g.keywords.includes('[Reveal]'));
        const hasForecast = glyphData.some(g => g.keywords.includes('[Forecast]'));
        if (hasReveal && hasForecast) {
            synergies.push({
                name: 'Perfect Information',
                bonus: 'All predictions gain +1 turn duration',
                glyphs: 'Character Analysis focus',
                description: 'Combined intelligence mastery'
            });
        }
        
        // Synergy 5: Neural State chaining
        const neuralStates = glyphData.filter(g => g.keywords.includes('[Neural_State]'));
        if (neuralStates.length >= 3) {
            synergies.push({
                name: 'Consciousness Mastery',
                bonus: 'State transitions cost -5 Bandwidth',
                glyphs: 'Consciousness engine focus',
                description: 'Multiple Neural States enable fluid transitions'
            });
        }
        
        // Synergy 6: Pattern + Amplify combo
        const hasPattern = glyphData.some(g => g.keywords.includes('[Pattern]'));
        const hasAmplify = glyphData.some(g => g.keywords.includes('[Amplify]'));
        if (hasPattern && hasAmplify) {
            synergies.push({
                name: 'Singularity Convergence',
                bonus: 'Pattern detection grants +2 [Amplify] stacks',
                glyphs: 'Singularity + Consciousness',
                description: 'Patterns fuel amplification effects'
            });
        }
        
        // Synergy 7: Multi-engine diversity bonus
        const engineCounts = {};
        glyphData.forEach(g => {
            const engine = g.id.split('_')[1]; // Extract engine from SKILL_ENGINE_001
            engineCounts[engine] = (engineCounts[engine] || 0) + 1;
        });
        const uniqueEngines = Object.keys(engineCounts).length;
        if (uniqueEngines >= 4) {
            synergies.push({
                name: 'Omniscient Build',
                bonus: '+5% to all stats',
                glyphs: '4+ engine diversity',
                description: 'Balanced multi-engine mastery provides versatility'
            });
        }
        
        // Synergy 8: Mono-engine focus bonus
        if (uniqueEngines === 1) {
            const focusEngine = Object.keys(engineCounts)[0];
            synergies.push({
                name: `${focusEngine} Specialization`,
                bonus: '+15% effectiveness for all glyphs',
                glyphs: `Mono-${focusEngine} build`,
                description: 'Pure focus on single engine grants mastery bonuses'
            });
        }
        
        return synergies;
    },
    
    /**
     * Detect yogas (beneficial) and doshas (negative) based on glyph composition
     * These are strategic warnings/bonuses similar to Jyotish chart interpretations
     */
    detectYogasAndDoshas(glyphs) {
        const yogas = [];
        const doshas = [];
        const glyphData = glyphs.map(id => 
            window.SkillDatabase ? window.SkillDatabase.getSkill(id) : null
        ).filter(g => g !== null);
        
        const categories = this.categorizeGlyphs(glyphs);
        const budget = this.calculateKPBudget(glyphs);
        
        // YOGAS (beneficial combinations)
        
        // Balanced Yoga: Equal distribution
        if (Math.abs(categories.offensive - categories.defensive) <= 2) {
            yogas.push({
                name: 'Balanced Yoga',
                effect: 'Stable gameplay with options for all situations',
                type: 'strategic'
            });
        }
        
        // Aggressive Yoga: Heavy offense
        if (categories.offensive >= 7) {
            yogas.push({
                name: 'Aggressive Yoga',
                effect: 'High damage output, fast rounds',
                type: 'offensive'
            });
        }
        
        // Fortress Yoga: Heavy defense
        if (categories.defensive >= 7) {
            yogas.push({
                name: 'Fortress Yoga',
                effect: 'High survivability, attrition strategy',
                type: 'defensive'
            });
        }
        
        // Efficiency Yoga: Low KP budget
        if (budget.totalKP <= 20) {
            yogas.push({
                name: 'Efficiency Yoga',
                effect: 'Can activate glyphs more frequently in battle',
                type: 'resource'
            });
        }
        
        // DOSHAS (negative patterns)
        
        // Glass Cannon Dosha: High offense, low defense
        if (categories.offensive >= 8 && categories.defensive <= 2) {
            doshas.push({
                name: 'Glass Cannon Dosha',
                effect: 'Vulnerable to counterattacks and burst damage',
                severity: 'moderate'
            });
        }
        
        // Stalemate Dosha: Low offense
        if (categories.offensive <= 2) {
            doshas.push({
                name: 'Stalemate Dosha',
                effect: 'Rounds may time out, low damage output',
                severity: 'high'
            });
        }
        
        // Budget Strain Dosha: Very high KP costs
        if (budget.status === 'high') {
            doshas.push({
                name: 'Budget Strain Dosha',
                effect: 'Limited glyph activation frequency in battle',
                severity: 'moderate'
            });
        }
        
        // Lack of Synergy Dosha: No synergies detected
        const synergies = this.detectSynergies(glyphs);
        if (synergies.length === 0) {
            doshas.push({
                name: 'Disjointed Strategy Dosha',
                effect: 'Glyphs lack complementary effects',
                severity: 'low'
            });
        }
        
        return { yogas, doshas };
    },
    
    /**
     * Complete card analysis - calls all calculation functions
     * Returns comprehensive card data for Workshop preview
     */
    analyzeCard(glyphs, jyotishModifiers = {}) {
        const hp = this.calculateHP(glyphs, jyotishModifiers);
        const stats = this.calculateStats(glyphs, jyotishModifiers);
        const budget = this.calculateKPBudget(glyphs);
        const synergies = this.detectSynergies(glyphs);
        const { yogas, doshas } = this.detectYogasAndDoshas(glyphs);
        
        return {
            hp,
            stats,
            budget,
            synergies,
            yogas,
            doshas,
            isValid: budget.isValid && glyphs.length === 12,
            warnings: [
                budget.warning,
                doshas.length > 0 ? `${doshas.length} dosha(s) detected` : null
            ].filter(w => w !== null),
            strengths: [
                synergies.length > 0 ? `${synergies.length} synergies active` : null,
                yogas.length > 0 ? `${yogas.length} yoga(s) active` : null
            ].filter(s => s !== null)
        };
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CardCalculator;
}
