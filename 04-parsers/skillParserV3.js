/**
 * SKILL PARSER V3.1
 * Parses skills from v3.1 complete skill lists
 * These files have 779+ complete skills
 */

const fs = require('fs');
const path = require('path');

class SkillParserV3 {
    constructor() {
        this.engineFiles = [
            'foundational-skills.txt',
            'character-analysis-skills.txt',
            'consciousness-skills.txt',
            'divination-skills.txt',
            'singularity-skills.txt',
            'tantra-skills.txt',
            'therapeutic-skills.txt'
        ];
        
        this.basePath = '../02-engines/engine-skills/';
        this.skills = [];
    }

    /**
     * Main parsing function
     */
    parseAllEngines() {
        console.log('🔧 Starting Skill Parser V3.1 (Complete Lists)...\n');
        
        for (const file of this.engineFiles) {
            const engineName = this.extractEngineName(file);
            console.log(`📖 Parsing ${engineName}...`);
            
            try {
                const content = fs.readFileSync(path.join(this.basePath, file), 'utf8');
                const engineSkills = this.parseEngine(content, engineName);
                this.skills.push(...engineSkills);
                console.log(`   ✅ Extracted ${engineSkills.length} skills\n`);
            } catch (error) {
                console.log(`   ❌ Error: ${error.message}\n`);
            }
        }
        
        return this.skills;
    }

    /**
     * Extract engine name from filename
     */
    extractEngineName(filename) {
        return filename
            .replace('-skills.txt', '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * Parse individual engine file (v3.1 format)
     */
    parseEngine(content, engineName) {
        const skills = [];
        
        // v3.1 format: "1. **Glyph: Skill Name** (Category, Gnosis X)"
        const skillMatches = content.matchAll(/(\d+)\.\s+\*\*Glyph:\s+([^*]+)\*\*\s+\(([^,]+),\s*Gnosis\s+(\d+)\)([\s\S]*?)(?=\n\d+\.\s+\*\*Glyph:|$)/g);
        
        for (const match of skillMatches) {
            const skill = this.parseSkillBlock(match, engineName);
            if (skill) {
                skills.push(skill);
            }
        }
        
        return skills;
    }

    /**
     * Parse individual skill from regex match
     */
    parseSkillBlock(match, engineName) {
        try {
            const [fullMatch, number, name, category, gnosis, body] = match;
            
            const skillNumber = parseInt(number);
            const skillName = name.trim();
            
            // Extract sections from body
            const coreFunction = this.extractSection(body, 'Core Function');
            const evoA = this.extractSection(body, 'Evo A');
            const evoB = this.extractSection(body, 'Evo B');
            const note = this.extractSection(body, 'Note');
            
            // Detect keywords from core function
            const keywords = this.extractKeywords(coreFunction);
            
            // Calculate tier from gnosis cost (rough approximation)
            const tier = this.gnosisTier(parseInt(gnosis));
            
            const skill = {
                id: `SKILL_${engineName.toUpperCase().replace(/\s/g, '_')}_${String(skillNumber).padStart(3, '0')}`,
                number: skillNumber,
                name: skillName,
                engine: engineName,
                category: category.trim(),
                tier: tier,
                tierValue: tier,
                cost: {
                    gnosis: parseInt(gnosis),
                    kp: Math.ceil(parseInt(gnosis) / 20) // Estimate KP from Gnosis
                },
                cooldown: this.estimateCooldown(parseInt(gnosis)),
                effect: coreFunction,
                keywords: keywords,
                evolutions: {
                    A: evoA,
                    B: evoB
                },
                note: note,
                themes: this.detectThemes({ keywords, effect: coreFunction }),
                powerScore: this.calculatePowerScore({
                    gnosis: parseInt(gnosis),
                    tier: tier,
                    keywords: keywords
                }),
                
                // Metadata for fusion
                isFused: false,
                fusionDepth: 0,
                fusionIngredients: [],
                
                // Source
                source: 'v3.1',
                jyotishHooks: [], // Not present in v3.1
                synergies: [] // Not present in v3.1
            };
            
            return skill;
        } catch (error) {
            console.error(`Error parsing skill: ${error.message}`);
            return null;
        }
    }

    /**
     * Extract section from skill body
     */
    extractSection(body, sectionName) {
        const regex = new RegExp(`\\*\\*${sectionName}[:\\s]*(.+?)(?=\\n\\s*\\*\\*|$)`, 's');
        const match = body.match(regex);
        return match ? match[1].trim() : null;
    }

    /**
     * Extract keywords from effect text
     */
    extractKeywords(text) {
        if (!text) return [];
        
        const keywords = [];
        const keywordMatches = text.match(/\[([^\]]+)\]/g);
        
        if (keywordMatches) {
            keywords.push(...keywordMatches.map(m => m.replace(/[\[\]]/g, '')));
        }
        
        return keywords;
    }

    /**
     * Estimate tier from Gnosis cost
     */
    gnosisTier(gnosis) {
        if (gnosis <= 15) return 0;
        if (gnosis <= 30) return 1;
        if (gnosis <= 50) return 2;
        if (gnosis <= 70) return 3;
        return 4;
    }

    /**
     * Estimate cooldown from gnosis
     */
    estimateCooldown(gnosis) {
        return Math.floor(gnosis / 15);
    }

    /**
     * Detect thematic tags from skill
     */
    detectThemes(skill) {
        const themes = new Set();
        
        // From keywords
        for (const keyword of skill.keywords || []) {
            const lower = keyword.toLowerCase();
            if (lower.includes('structure')) themes.add('infrastructure');
            if (lower.includes('support')) themes.add('support');
            if (lower.includes('heal')) themes.add('healing');
            if (lower.includes('damage') || lower.includes('strike')) themes.add('offense');
            if (lower.includes('shield') || lower.includes('protect')) themes.add('defense');
            if (lower.includes('burn') || lower.includes('decay')) themes.add('dot');
            if (lower.includes('threshold') || lower.includes('charge')) themes.add('ramp');
            if (lower.includes('refresh') || lower.includes('cooldown')) themes.add('tempo');
        }
        
        // From effect description
        const effect = (skill.effect || '').toLowerCase();
        if (effect.includes('ally') || effect.includes('allies')) themes.add('support');
        if (effect.includes('enemy') || effect.includes('enemies') || effect.includes('damage')) themes.add('offense');
        if (effect.includes('heal')) themes.add('healing');
        if (effect.includes('structure')) themes.add('infrastructure');
        
        return Array.from(themes);
    }

    /**
     * Calculate relative power score
     */
    calculatePowerScore(skill) {
        let score = 0;
        
        // Tier contribution
        score += (skill.tier || 0) * 20;
        
        // Gnosis contribution
        score += (skill.gnosis || 0) / 5;
        
        // Keyword contribution
        score += (skill.keywords?.length || 0) * 2;
        
        return Math.round(score);
    }

    /**
     * Get breakdown by engine
     */
    getEngineBreakdown(skills) {
        const breakdown = {};
        
        for (const skill of skills) {
            if (!breakdown[skill.engine]) {
                breakdown[skill.engine] = 0;
            }
            breakdown[skill.engine]++;
        }
        
        return breakdown;
    }

    /**
     * Generate statistics report
     */
    generateReport() {
        console.log('\n' + '='.repeat(60));
        console.log('📊 SKILL PARSING REPORT (V3.1 Complete Lists)');
        console.log('='.repeat(60));
        
        const breakdown = this.getEngineBreakdown(this.skills);
        
        console.log('\n📈 Engine Breakdown:');
        for (const [engine, count] of Object.entries(breakdown)) {
            console.log(`   ${engine}: ${count} skills`);
        }
        
        console.log(`\n✅ Total Skills Parsed: ${this.skills.length}`);
        
        // Tier distribution
        const tiers = {};
        for (const skill of this.skills) {
            const tier = skill.tierValue || 0;
            tiers[tier] = (tiers[tier] || 0) + 1;
        }
        
        console.log('\n🎯 Tier Distribution:');
        for (let i = 0; i <= 4; i++) {
            console.log(`   Tier ${i}: ${tiers[i] || 0} skills`);
        }
        
        // Keyword frequency
        const keywordCounts = {};
        for (const skill of this.skills) {
            for (const keyword of skill.keywords || []) {
                keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
            }
        }
        
        console.log('\n🏷️  Top 10 Keywords:');
        const topKeywords = Object.entries(keywordCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);
        
        for (const [keyword, count] of topKeywords) {
            console.log(`   ${keyword}: ${count} skills`);
        }
        
        console.log('\n' + '='.repeat(60));
    }

    /**
     * Save parsed skills to JSON
     */
    saveToJSON(outputPath) {
        const output = {
            version: '3.1',
            totalSkills: this.skills.length,
            engines: this.getEngineBreakdown(this.skills),
            skills: this.skills,
            metadata: {
                parsedDate: new Date().toISOString(),
                sourceFormat: 'v3.1 Complete Skill Lists',
                fusionReady: true
            }
        };
        
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');
        console.log(`\n💾 Saved ${this.skills.length} skills to ${outputPath}`);
        
        return output;
    }
}

// ============================================
// EXECUTION
// ============================================

if (require.main === module) {
    const parser = new SkillParserV3();
    
    // Parse all engines
    parser.parseAllEngines();
    
    // Generate report
    parser.generateReport();
    
    // Save to JSON
    const outputPath = '../03-data/skills_database_v3_complete.json';
    parser.saveToJSON(outputPath);
    
    console.log('\n✅ Parsing Complete!');
    console.log('🔮 779+ skills ready for fusion system');
}

module.exports = SkillParserV3;
