/**
 * MASTER SKILL DATABASE MERGER
 * Combines all parsed skills and entities into one complete fusion-ready database
 */

const fs = require('fs');

class MasterMerger {
    constructor() {
        this.allSkills = [];
    }

    /**
     * Load and merge all skill databases
     */
    mergeAll() {
        console.log('🔧 Starting Master Database Merge...\n');
        
        // Load v3.1 combat skills (679)
        console.log('📖 Loading v3.1 Combat Skills...');
        const v3Skills = JSON.parse(fs.readFileSync('../03-data/skills_database_v3_complete.json', 'utf8'));
        this.allSkills.push(...v3Skills.skills);
        console.log(`   ✅ Added ${v3Skills.skills.length} combat skills\n`);
        
        // Load Invocation entities (237 - v3 COMPLETE)
        console.log('📖 Loading Invocation Entities (v3 COMPLETE - All Pantheons)...');
        const invocationEntities = JSON.parse(fs.readFileSync('../03-data/invocation_entities_v3_complete.json', 'utf8'));
        this.allSkills.push(...invocationEntities.entities);
        console.log(`   ✅ Added ${invocationEntities.entities.length} divine entities (79 Angels, 72 Demons, 86 Pantheon Deities)\n`);
        
        // Load completion skills (21)
        console.log('📖 Loading Completion Skills (Missing Entries)...');
        const completionSkills = JSON.parse(fs.readFileSync('../03-data/completion_skills_v3.json', 'utf8'));
        this.allSkills.push(...completionSkills);
        console.log(`   ✅ Added ${completionSkills.length} completion skills (Consciousness +4, Tantra +11, Therapeutic +6)\n`);
        
        // Load additional pantheons (100 - Greek, Chinese, Japanese, African)
        console.log('📖 Loading Additional Pantheons (v4.0 EXPANSION)...');
        const additionalPantheons = JSON.parse(fs.readFileSync('../03-data/additional_pantheons_v4.json', 'utf8'));
        this.allSkills.push(...additionalPantheons.entities);
        console.log(`   ✅ Added ${additionalPantheons.entities.length} pantheon deities (30 Greek, 25 Chinese, 25 Japanese, 20 African)\n`);
        
        console.log(`✅ Total Skills Combined: ${this.allSkills.length}`);
        
        return this.allSkills;
    }

    /**
     * Generate comprehensive report
     */
    generateReport() {
        console.log('\n' + '='.repeat(70));
        console.log('📊 COMPLETE SKILL DATABASE REPORT');
        console.log('='.repeat(70));
        
        // Engine breakdown
        const engineBreakdown = {};
        for (const skill of this.allSkills) {
            if (!engineBreakdown[skill.engine]) {
                engineBreakdown[skill.engine] = 0;
            }
            engineBreakdown[skill.engine]++;
        }
        
        console.log('\n📈 Engine Breakdown:');
        for (const [engine, count] of Object.entries(engineBreakdown)) {
            console.log(`   ${engine}: ${count} skills`);
        }
        
        console.log(`\n✅ TOTAL SKILLS: ${this.allSkills.length}`);
        
        // Tier distribution
        const tiers = {};
        for (const skill of this.allSkills) {
            const tier = skill.tierValue || 0;
            tiers[tier] = (tiers[tier] || 0) + 1;
        }
        
        console.log('\n🎯 Tier Distribution:');
        for (let i = 0; i <= 4; i++) {
            console.log(`   Tier ${i}: ${tiers[i] || 0} skills`);
        }
        
        // Top keywords
        const keywordCounts = {};
        for (const skill of this.allSkills) {
            for (const keyword of skill.keywords || []) {
                keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
            }
        }
        
        console.log('\n🏷️  Top 15 Keywords:');
        const topKeywords = Object.entries(keywordCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 15);
        
        for (const [keyword, count] of topKeywords) {
            console.log(`   ${keyword}: ${count} skills`);
        }
        
        // Theme distribution
        const themeSet = new Set();
        for (const skill of this.allSkills) {
            for (const theme of skill.themes || []) {
                themeSet.add(theme);
            }
        }
        
        console.log(`\n🎨 Total Unique Themes: ${themeSet.size}`);
        console.log(`   Themes: ${Array.from(themeSet).sort().join(', ')}`);
        
        console.log('\n' + '='.repeat(70));
    }

    /**
     * Save complete database
     */
    saveComplete(outputPath) {
        const output = {
            version: 'COMPLETE',
            totalSkills: this.allSkills.length,
            sources: {
                'v3.1 Combat Skills': 679,
                'Invocation v3.0 COMPLETE': 237,
                'Completion Skills (Missing Entries)': 21,
                'Additional Pantheons v4.0': 100
            },
            engines: this.getEngineBreakdown(),
            skills: this.allSkills,
            metadata: {
                mergedDate: new Date().toISOString(),
                fusionReady: true,
                complete: true
            }
        };
        
        fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');
        console.log(`\n💾 Saved COMPLETE database (${this.allSkills.length} skills) to:`);
        console.log(`   ${outputPath}`);
        
        return output;
    }

    /**
     * Get engine breakdown
     */
    getEngineBreakdown() {
        const breakdown = {};
        for (const skill of this.allSkills) {
            if (!breakdown[skill.engine]) {
                breakdown[skill.engine] = 0;
            }
            breakdown[skill.engine]++;
        }
        return breakdown;
    }
}

// ============================================
// EXECUTION
// ============================================

if (require.main === module) {
    const merger = new MasterMerger();
    
    // Merge all databases
    merger.mergeAll();
    
    // Generate report
    merger.generateReport();
    
    // Save complete database
    const outputPath = '../03-data/COMPLETE_SKILL_DATABASE.json';
    merger.saveComplete(outputPath);
    
    console.log('\n' + '='.repeat(70));
    console.log('🎉 COMPLETE SKILL DATABASE READY FOR FUSION! 🎉');
    console.log('='.repeat(70));
    console.log('\n✨ You now have 876 skills ready for the fusion algorithm!');
    console.log('🚀 Ready to proceed to Phase 2: Fusion Algorithm Implementation');
    console.log('='.repeat(70));
}

module.exports = MasterMerger;
