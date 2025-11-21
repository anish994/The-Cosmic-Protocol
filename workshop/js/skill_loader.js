/**
 * Skill Loader for Workshop
 * Aggregates all skill databases and exposes a unified SkillSystem API
 * for mini-test.html and other workshop tools.
 */

(function() {
    console.log('🔄 Initializing Workshop Skill Loader...');

    // Define the list of expected skill databases
    const DB_SOURCES = [
        'SKILL_DB_FOUNDATIONAL',
        'SKILL_DB_INVOCATION',
        'SKILL_DB_CHARACTER_ANALYSIS',
        'SKILL_DB_CONSCIOUSNESS',
        'SKILL_DB_DIVINATION',
        'SKILL_DB_SINGULARITY',
        'SKILL_DB_TANTRA',
        'SKILL_DB_THERAPEUTIC'
    ];

    class WorkshopSkillSystem {
        constructor() {
            this.skills = [];
            this.initialized = false;
        }

        init() {
            if (this.initialized) return;
            
            let totalLoaded = 0;
            this.skills = [];

            DB_SOURCES.forEach(sourceName => {
                const db = window[sourceName];
                if (Array.isArray(db)) {
                    // Add engine property if missing (derived from source name)
                    const engineName = sourceName.replace('SKILL_DB_', '').toLowerCase();
                    
                    const processedSkills = db.map(skill => {
                        // Ensure compatibility with mini-test.html format
                        return {
                            ...skill,
                            engine: skill.engine || engineName,
                            // Map 'stats' to root properties if needed
                            kp: skill.stats?.cost || skill.kp || 0,
                            cooldown: skill.stats?.cooldown || skill.cooldown || 0,
                            power: skill.stats?.damage || skill.stats?.power || skill.powerScore || 0,
                            // Ensure keywords/tags are consistent
                            keywords: skill.tags || skill.keywords || [],
                            unlocked: true // Default to unlocked for workshop testing
                        };
                    });

                    this.skills = this.skills.concat(processedSkills);
                    totalLoaded += processedSkills.length;
                    console.log(`   - Loaded ${processedSkills.length} skills from ${sourceName}`);
                } else {
                    console.warn(`   ⚠️ ${sourceName} not found or invalid`);
                }
            });

            console.log(`✅ Skill System Ready: ${totalLoaded} total skills loaded.`);
            this.initialized = true;
        }

        getAllSkills() {
            if (!this.initialized) this.init();
            return this.skills;
        }

        getSkillById(id) {
            if (!this.initialized) this.init();
            return this.skills.find(s => s.id === id);
        }
        
        // Helper to get skills by engine
        getSkillsByEngine(engine) {
            if (!this.initialized) this.init();
            return this.skills.filter(s => s.engine === engine);
        }
    }

    // Expose globally
    window.SkillSystem = new WorkshopSkillSystem();

    // Initialize immediately since data scripts are loaded synchronously before this
    window.SkillSystem.init();

    // Safety net: Re-init on DOMContentLoaded in case some scripts were deferred
    window.addEventListener('DOMContentLoaded', () => window.SkillSystem.init());

})();
