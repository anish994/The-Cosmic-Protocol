/**
 * SKILL PARSER V4.0
 * Parses skills from v4.0 COMPLETE engine blueprints
 * Extracts all metadata for fusion system
 */

const fs = require('fs');
const path = require('path');

class SkillParserV4 {
    constructor() {
        this.engineFiles = [
            'Foundational Engine v4.0 COMPLETE.txt',
            'Character Analysis Engine v4.0 COMPLETE.txt',
            'Consciousness Engine v4.0 COMPLETE.txt',
            'Divination Engine v4.0 COMPLETE.txt',
            'Singularity Engine v4.0 COMPLETE.txt',
            'Tantra Engine v4.0 COMPLETE.txt',
            'Therapeutic Engine v4.0 COMPLETE.txt',
            'Invocation Engine v4.0 COMPLETE.txt'
        ];
        
        this.basePath = '../02-engines/updated engines blueprints/';
        this.skills = [];
    }

    /**
     * Main parsing function
     */
    parseAllEngines() {
        console.log('🔧 Starting Skill Parser V4.0...\n');
        
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
            .replace(' Engine v4.0 COMPLETE.txt', '')
            .trim();
    }

    /**
     * Parse individual engine file
     */
    parseEngine(content, engineName) {
        const skills = [];
        
        // Split by skill markers (**SKILL N:)
        // Match both **SKILL N: format and potential variations
        const skillMatches = content.matchAll(/\*\*SKILL (\d+): ([^*\n]+)\*\*[\s\S]*?```([\s\S]*?)```/g);
        
        for (const match of skillMatches) {
            const skillNumber = parseInt(match[1]);
            const skillName = match[2].trim();
            const codeBlock = match[3];
            
            const skill = this.parseSkillData(skillNumber, skillName, codeBlock, engineName);
            if (skill) {
                skills.push(skill);
            }
        }
        
        return skills;
    }

    /**
     * Parse skill data from extracted components
     */
    parseSkillData(skillNumber, skillName, codeBlock, engineName) {
        try {
            // Parse structured data from code block
            const skill = {
                id: `SKILL_${engineName.toUpperCase().replace(/\s/g, '_')}_${String(skillNumber).padStart(3, '0')}`,
                number: skillNumber,
                name: skillName,
                engine: engineName,
                tier: this.extractField(codeBlock, 'Tier'),
                cost: this.extractCost(codeBlock),
                cooldown: this.extractField(codeBlock, 'Cooldown'),
                effect: this.extractEffect(codeBlock),
                keywords: this.extractKeywords(codeBlock),
                jyotishHooks: this.extractJyotishHooks(codeBlock),
                evolutions: this.extractEvolutions(codeBlock),
                powerLevel: this.extractField(codeBlock, 'Power Level'),
                aiPriority: this.extractField(codeBlock, 'AI Priority'),
                synergies: this.extractSynergies(codeBlock),
                
                // Metadata for fusion
                isFused: false,
                fusionDepth: 0,
                fusionIngredients: []
            };
            
            return skill;
        } catch (error) {
            console.error(`Error parsing skill #${skillNumber} (${skillName}): ${error.message}`);
            return null;
        }
    }

    /**
     * Extract simple field value
     */
    extractField(text, fieldName) {
        const regex = new RegExp(`${fieldName}:\\s*(.+?)(?:\n|$)`, 'i');
        const match = text.match(regex);
        return match ? match[1].trim() : null;
    }

    /**
     * Extract cost (KP + resource)
     */
    extractCost(text) {
        const costMatch = text.match(/Cost:\s*(.+)/);
        if (!costMatch) return null;
        
        const costStr = costMatch[1].trim();
        const cost = {};
        
        // Parse KP
        const kpMatch = costStr.match(/(\d+)\s*KP/);
        if (kpMatch) {
            cost.kp = parseInt(kpMatch[1]);
        }
        
        // Parse other resources (Bandwidth, Threshold, Prana, etc.)
        const resourceMatch = costStr.match(/(\d+)\s*(\w+)/g);
        if (resourceMatch) {
            for (const match of resourceMatch) {
                const parts = match.trim().split(/\s+/);
                const amount = parseInt(parts[0]);
                const resource = parts[1].toLowerCase();
                
                if (resource !== 'kp') {
                    cost[resource] = amount;
                }
            }
        }
        
        return cost;
    }

    /**
     * Extract effect description
     */
    extractEffect(text) {
        const effectMatch = text.match(/Effect:\s*(.+?)(?=\n\w+:|$)/s);
        return effectMatch ? effectMatch[1].trim() : null;
    }

    /**
     * Extract keywords (tags in [brackets])
     */
    extractKeywords(text) {
        const keywordMatches = text.match(/\[(\w+(?:\s+\w+)*)\]/g);
        if (!keywordMatches) return [];
        
        return keywordMatches.map(match => 
            match.replace(/[\[\]]/g, '').trim()
        );
    }

    /**
     * Extract Jyotish planetary hooks
     */
    extractJyotishHooks(text) {
        const hooks = [];
        const jyotishSection = text.match(/Jyotish Hooks:([\s\S]*?)(?=\n\w+:|Evolution|$)/);
        
        if (jyotishSection) {
            const lines = jyotishSection[1].split('\n');
            for (const line of lines) {
                const hookMatch = line.match(/\s*-\s*(.+?):\s*(.+)/);
                if (hookMatch) {
                    hooks.push({
                        condition: hookMatch[1].trim(),
                        effect: hookMatch[2].trim()
                    });
                }
            }
        }
        
        return hooks;
    }

    /**
     * Extract evolution paths
     */
    extractEvolutions(text) {
        const evolutions = {};
        
        const evoAMatch = text.match(/Evolution A:\s*(.+)/);
        if (evoAMatch) {
            evolutions.A = evoAMatch[1].trim();
        }
        
        const evoBMatch = text.match(/Evolution B:\s*(.+)/);
        if (evoBMatch) {
            evolutions.B = evoBMatch[1].trim();
        }
        
        return evolutions;
    }

    /**
     * Extract cross-engine synergies
     */
    extractSynergies(text) {
        const synergies = [];
        const synergySection = text.match(/Synergy Seeds:([\s\S]*?)(?=\n\w+:|```|$)/);
        
        if (synergySection) {
            const lines = synergySection[1].split('\n');
            for (const line of lines) {
                const synergyMatch = line.match(/\s*-\s*(ACX-[\w-]+):\s*(.+)/);
                if (synergyMatch) {
                    synergies.push({
                        code: synergyMatch[1].trim(),
                        description: synergyMatch[2].trim()
                    });
                }
            }
        }
        
        return synergies;
    }

    /**
     * Generate fusion-ready properties
     */
    generateFusionProperties(skill) {
        // Add tier numerical value
        skill.tierValue = this.parseTier(skill.tier);
        
        // Detect themes from keywords and effects
        skill.themes = this.detectThemes(skill);
        
        // Calculate power score
        skill.powerScore = this.calculatePowerScore(skill);
        
        return skill;
    }

    /**
     * Parse tier string to number
     */
    parseTier(tierStr) {
        if (!tierStr) return 0;
        const match = tierStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : 0;
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
        score += (skill.tierValue || 0) * 20;
        
        // Cost contribution (higher cost = more power usually)
        if (skill.cost) {
            score += (skill.cost.kp || 0) * 5;
            score += Object.values(skill.cost).reduce((sum, val) => 
                typeof val === 'number' ? sum + val : sum, 0) / 10;
        }
        
        // Cooldown contribution (higher cooldown = more power)
        const cooldown = parseInt(skill.cooldown) || 0;
        score += cooldown * 3;
        
        // Keyword contribution
        score += (skill.keywords?.length || 0) * 2;
        
        return Math.round(score);
    }

    /**
     * Save parsed skills to JSON
     */
    saveToJSON(outputPath) {
        // Add fusion properties to all skills
        const processedSkills = this.skills.map(skill => 
            this.generateFusionProperties(skill)
        );
        
        const output = {
            version: '4.0',
            totalSkills: processedSkills.length,
            engines: this.getEngineBreakdown(processedSkills),
            skills: processedSkills,
            metadata: {
                parsedDate: new Date().toISOString(),
                sourceFormat: 'v4.0 COMPLETE blueprints',
                fusionReady: true
            }
        };
        
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');
        console.log(`\n💾 Saved ${processedSkills.length} skills to ${outputPath}`);
        
        return output;
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
        console.log('📊 SKILL PARSING REPORT');
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
}

// ============================================
// EXECUTION
// ============================================

if (require.main === module) {
    const parser = new SkillParserV4();
    
    // Parse all engines
    parser.parseAllEngines();
    
    // Generate report
    parser.generateReport();
    
    // Save to JSON
    const outputPath = '../03-data/skills_database_v4.json';
    parser.saveToJSON(outputPath);
    
    console.log('\n✅ Parsing Complete!');
    console.log('🔮 Ready for fusion system integration');
}

module.exports = SkillParserV4;
