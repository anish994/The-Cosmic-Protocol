/**
 * 🔥 FUSION ALGORITHM CORE V1.0
 * Main fusion engine for 1,037 skills
 * Handles skill combination, synergy detection, and power calculation
 */

const fs = require('fs');

class FusionCore {
    constructor() {
        this.skills = [];
        this.fusedSkills = [];
        this.synergyMatrix = {};
        this.enginePairs = [];
    }

    /**
     * Load complete skill database
     */
    loadSkills() {
        console.log('🔧 Loading Complete Skill Database...\n');
        
        const dbPath = '../03-data/COMPLETE_SKILL_DATABASE.json';
        const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        
        this.skills = db.skills;
        console.log(`✅ Loaded ${this.skills.length} skills\n`);
        
        this.buildSynergyMatrix();
    }

    /**
     * Build synergy matrix for all engine pairs
     */
    buildSynergyMatrix() {
        console.log('🔍 Building Engine Synergy Matrix...\n');
        
        const engines = [...new Set(this.skills.map(s => s.engine))];
        
        // Create all unique engine pairs
        for (let i = 0; i < engines.length; i++) {
            for (let j = i; j < engines.length; j++) {
                const pair = `${engines[i]}×${engines[j]}`;
                this.enginePairs.push(pair);
                
                // Calculate base synergy (can be customized)
                if (i === j) {
                    // Same engine synergy (moderate)
                    this.synergyMatrix[pair] = 50;
                } else {
                    // Cross-engine synergy (varies by combination)
                    this.synergyMatrix[pair] = this.calculateCrossEngineSynergy(engines[i], engines[j]);
                }
            }
        }
        
        console.log(`✅ Created ${this.enginePairs.length} engine pair combinations\n`);
    }

    /**
     * Calculate cross-engine synergy base score
     */
    calculateCrossEngineSynergy(engine1, engine2) {
        // Define natural synergies between engines
        const synergyMap = {
            'Foundational×Consciousness': 85,  // Infrastructure + Efficiency
            'Foundational×Therapeutic': 75,
            'Tantra×Singularity': 90,          // Aggro + Reality-breaking
            'Tantra×Divination': 80,           // Aggro + Fate control
            'Therapeutic×Consciousness': 85,   // Healing + Scaling
            'Divination×Singularity': 88,      // Fate + Reality manipulation
            'Character Analysis×Divination': 82,
            'Invocation×Tantra': 85,           // Divine power + Aggro
            'Invocation×Consciousness': 80,
            'Invocation×Singularity': 95,      // Divine + Reality = Godmode
            'Foundational×Invocation': 75,
            'Therapeutic×Invocation': 88,      // Healing + Divine blessing
        };
        
        const key1 = `${engine1}×${engine2}`;
        const key2 = `${engine2}×${engine1}`;
        
        return synergyMap[key1] || synergyMap[key2] || 60; // Default moderate synergy
    }

    /**
     * Fuse two skills together
     */
    fuseSkills(skill1Id, skill2Id) {
        const skill1 = this.skills.find(s => s.id === skill1Id);
        const skill2 = this.skills.find(s => s.id === skill2Id);
        
        if (!skill1 || !skill2) {
            console.error('❌ One or both skills not found');
            return null;
        }
        
        console.log(`\n🔥 Fusing: ${skill1.name} + ${skill2.name}`);
        
        // Calculate synergy
        const synergy = this.calculateSynergy(skill1, skill2);
        
        // Create fused skill
        const fusedSkill = {
            id: `FUSED_${skill1.id}_${skill2.id}`,
            name: this.generateFusedName(skill1, skill2, synergy),
            ingredients: [skill1.id, skill2.id],
            engines: [skill1.engine, skill2.engine],
            tier: this.calculateFusedTier(skill1, skill2, synergy),
            tierValue: 0, // Will be set from tier
            cost: this.calculateFusedCost(skill1, skill2),
            cooldown: this.calculateFusedCooldown(skill1, skill2),
            effect: this.generateFusedEffect(skill1, skill2, synergy),
            keywords: this.mergeKeywords(skill1, skill2),
            themes: this.mergeThemes(skill1, skill2),
            powerScore: this.calculateFusedPower(skill1, skill2, synergy),
            synergyScore: synergy.total,
            synergyBreakdown: synergy,
            isFused: true,
            fusionDepth: Math.max(skill1.fusionDepth || 0, skill2.fusionDepth || 0) + 1,
            fusionIngredients: [
                ...(skill1.fusionIngredients || []),
                ...(skill2.fusionIngredients || []),
                skill1.id,
                skill2.id
            ],
            source: 'Fusion Algorithm v1.0'
        };
        
        fusedSkill.tierValue = fusedSkill.tier;
        
        this.fusedSkills.push(fusedSkill);
        
        console.log(`✅ Created: ${fusedSkill.name}`);
        console.log(`   Power: ${fusedSkill.powerScore} | Synergy: ${fusedSkill.synergyScore}%`);
        console.log(`   Tier: ${fusedSkill.tier} | Depth: ${fusedSkill.fusionDepth}`);
        
        return fusedSkill;
    }

    /**
     * Calculate synergy between two skills
     */
    calculateSynergy(skill1, skill2) {
        const synergy = {
            engine: 0,
            keywords: 0,
            themes: 0,
            tier: 0,
            total: 0
        };
        
        // Engine synergy (base)
        const enginePair = `${skill1.engine}×${skill2.engine}`;
        const enginePairReverse = `${skill2.engine}×${skill1.engine}`;
        synergy.engine = this.synergyMatrix[enginePair] || this.synergyMatrix[enginePairReverse] || 60;
        
        // Keyword synergy (matching keywords boost power)
        const commonKeywords = skill1.keywords.filter(k => skill2.keywords.includes(k));
        synergy.keywords = commonKeywords.length * 10; // +10% per shared keyword
        
        // Theme synergy (compatible themes)
        const commonThemes = skill1.themes.filter(t => skill2.themes.includes(t));
        synergy.themes = commonThemes.length * 15; // +15% per shared theme
        
        // Tier synergy (similar tiers work better together)
        const tierDiff = Math.abs(skill1.tierValue - skill2.tierValue);
        synergy.tier = Math.max(0, 20 - (tierDiff * 5)); // Penalty for tier mismatch
        
        // Total synergy (capped at 100)
        synergy.total = Math.min(100, 
            synergy.engine * 0.4 +  // 40% weight
            synergy.keywords * 0.25 + // 25% weight
            synergy.themes * 0.25 +   // 25% weight
            synergy.tier * 0.1        // 10% weight
        );
        
        return synergy;
    }

    /**
     * Generate fused skill name
     */
    generateFusedName(skill1, skill2, synergy) {
        // High synergy = unique names
        if (synergy.total >= 80) {
            const prefixes = ['Divine', 'Cosmic', 'Eternal', 'Supreme', 'Transcendent', 'Ultimate'];
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            return `${prefix} ${skill1.name.split(' ')[0]}-${skill2.name.split(' ')[0]} Fusion`;
        } else if (synergy.total >= 60) {
            return `${skill1.name} + ${skill2.name}`;
        } else {
            return `Hybrid ${skill1.name.split(' ')[0]}/${skill2.name.split(' ')[0]}`;
        }
    }

    /**
     * Calculate fused skill tier
     */
    calculateFusedTier(skill1, skill2, synergy) {
        // Average tier + synergy bonus
        const avgTier = (skill1.tierValue + skill2.tierValue) / 2;
        const synergyBonus = synergy.total >= 80 ? 1 : (synergy.total >= 60 ? 0.5 : 0);
        
        return Math.min(4, Math.ceil(avgTier + synergyBonus));
    }

    /**
     * Calculate fused cost
     */
    calculateFusedCost(skill1, skill2) {
        const cost = {};
        
        // Merge costs from both skills
        const allKeys = new Set([
            ...Object.keys(skill1.cost || {}),
            ...Object.keys(skill2.cost || {})
        ]);
        
        for (const key of allKeys) {
            const val1 = skill1.cost[key] || 0;
            const val2 = skill2.cost[key] || 0;
            // Fused cost is 150% of combined (fusion is powerful but expensive)
            cost[key] = Math.ceil((val1 + val2) * 1.5);
        }
        
        return cost;
    }

    /**
     * Calculate fused cooldown
     */
    calculateFusedCooldown(skill1, skill2) {
        // Take highest cooldown + 20%
        return Math.ceil(Math.max(skill1.cooldown, skill2.cooldown) * 1.2);
    }

    /**
     * Generate fused effect description
     */
    generateFusedEffect(skill1, skill2, synergy) {
        const effect1 = skill1.effect.substring(0, 100);
        const effect2 = skill2.effect.substring(0, 100);
        
        if (synergy.total >= 80) {
            return `[ULTIMATE FUSION] Combines the power of both skills: ${effect1}... AND ${effect2}... Synergy creates additional effects!`;
        } else if (synergy.total >= 60) {
            return `[STRONG FUSION] ${effect1}... Enhanced by: ${effect2}...`;
        } else {
            return `[HYBRID] Blends effects: ${effect1}... + ${effect2}...`;
        }
    }

    /**
     * Merge keywords (unique only + highlight synergies)
     */
    mergeKeywords(skill1, skill2) {
        const allKeywords = [...skill1.keywords, ...skill2.keywords];
        const uniqueKeywords = [...new Set(allKeywords)];
        
        // Add synergy keyword if skills share keywords
        const commonKeywords = skill1.keywords.filter(k => skill2.keywords.includes(k));
        if (commonKeywords.length > 0) {
            uniqueKeywords.push('Synergized');
        }
        
        return uniqueKeywords;
    }

    /**
     * Merge themes
     */
    mergeThemes(skill1, skill2) {
        const allThemes = [...skill1.themes, ...skill2.themes];
        return [...new Set(allThemes)];
    }

    /**
     * Calculate fused power score
     */
    calculateFusedPower(skill1, skill2, synergy) {
        // Base power: average of both skills
        const basePower = (skill1.powerScore + skill2.powerScore) / 2;
        
        // Synergy multiplier (1.0 to 2.0)
        const synergyMultiplier = 1.0 + (synergy.total / 100);
        
        // Fusion bonus (fused skills are inherently more powerful)
        const fusionBonus = 20;
        
        return Math.ceil(basePower * synergyMultiplier + fusionBonus);
    }

    /**
     * Find best fusion candidates for a skill
     */
    findBestFusions(skillId, topN = 10) {
        const skill = this.skills.find(s => s.id === skillId);
        if (!skill) {
            console.error('❌ Skill not found');
            return [];
        }
        
        console.log(`\n🔍 Finding best fusions for: ${skill.name}\n`);
        
        const candidates = [];
        
        for (const otherSkill of this.skills) {
            if (otherSkill.id === skillId) continue;
            
            const synergy = this.calculateSynergy(skill, otherSkill);
            candidates.push({
                skill: otherSkill,
                synergy: synergy.total,
                synergyBreakdown: synergy
            });
        }
        
        // Sort by synergy descending
        candidates.sort((a, b) => b.synergy - a.synergy);
        
        // Return top N
        const topCandidates = candidates.slice(0, topN);
        
        console.log(`✅ Top ${topN} Fusion Candidates:\n`);
        topCandidates.forEach((c, i) => {
            console.log(`${i + 1}. ${c.skill.name} (${c.skill.engine})`);
            console.log(`   Synergy: ${c.synergy.toFixed(1)}%`);
            console.log(`   Breakdown: Engine ${c.synergyBreakdown.engine}% | Keywords ${c.synergyBreakdown.keywords}% | Themes ${c.synergyBreakdown.themes}%\n`);
        });
        
        return topCandidates;
    }

    /**
     * Save fused skills database
     */
    saveFusedSkills() {
        const output = {
            version: '1.0',
            totalFusions: this.fusedSkills.length,
            baseSkills: this.skills.length,
            fusions: this.fusedSkills,
            metadata: {
                generated: new Date().toISOString(),
                algorithm: 'Fusion Core v1.0'
            }
        };
        
        const outputPath = '../03-data/FUSED_SKILLS_DATABASE.json';
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
        
        console.log(`\n💾 Saved ${this.fusedSkills.length} fused skills to:`);
        console.log(`   ${outputPath}\n`);
    }
}

// ============================================
// EXECUTION
// ============================================

if (require.main === module) {
    const fusion = new FusionCore();
    
    // Load skills
    fusion.loadSkills();
    
    console.log('='.repeat(70));
    console.log('🔥 FUSION ALGORITHM CORE V1.0');
    console.log('='.repeat(70));
    console.log(`\n📊 Total Skills Available: ${fusion.skills.length}`);
    console.log(`📊 Engine Pairs: ${fusion.enginePairs.length}`);
    console.log(`📊 Potential Fusions: ${(fusion.skills.length * (fusion.skills.length - 1)) / 2}\n`);
    
    // Example: Find best fusions for first Tantra skill
    const tantraSkill = fusion.skills.find(s => s.engine === 'Tantra');
    if (tantraSkill) {
        const bestFusions = fusion.findBestFusions(tantraSkill.id, 5);
        
        // Create a sample fusion with top candidate
        if (bestFusions.length > 0) {
            console.log('\n' + '='.repeat(70));
            console.log('🧪 CREATING SAMPLE FUSION');
            console.log('='.repeat(70));
            
            const fusedSkill = fusion.fuseSkills(tantraSkill.id, bestFusions[0].skill.id);
            
            console.log('\n📝 Fused Skill Details:');
            console.log(JSON.stringify(fusedSkill, null, 2));
        }
    }
    
    // Save any fused skills
    if (fusion.fusedSkills.length > 0) {
        fusion.saveFusedSkills();
    }
    
    console.log('\n' + '='.repeat(70));
    console.log('✅ FUSION CORE READY!');
    console.log('='.repeat(70));
    console.log('\n🚀 Ready to fuse 1,037 skills into infinite combinations!\n');
}

module.exports = FusionCore;
