/**
 * SKILL DATABASE v4.0 - MODULAR DATA-DRIVEN ARCHITECTURE
 * 
 * This is the API layer that loads engine data from JSON files.
 * Edit skills by modifying JSON files in /data/engines/, not this code.
 * 
 * ARCHITECTURE:
 * - Engines: Isolated in /data/engines/*.json (100 skills each)
 * - Metadata: /data/engine-metadata.json (resources, colors, themes)
 * - Keywords: /data/keywords.json (canonical definitions)
 * - Jyotish: /data/jyotish-modifiers.json (planetary effects)
 * - Synergies: /data/synergies.json (ACX cross-engine combos)
 * 
 * BENEFITS:
 * ✅ Easy editing - modify JSON files, not code
 * ✅ Isolated engines - each engine independent
 * ✅ Unified system - shared metadata
 * ✅ Version control friendly - small diffs
 * ✅ Scalable - add engines without code changes
 */

class SkillDatabase {
    constructor() {
        this.engines = {};
        this.metadata = null;
        this.keywords = null;
        this.jyotishModifiers = null;
        this.synergies = null;
        this.loaded = false;
        this.loadPromise = null;
    }
    
    /**
     * Load all data from JSON files
     * Call this once at startup
     */
    async load() {
        if (this.loaded) return;
        if (this.loadPromise) return this.loadPromise;
        
        this.loadPromise = (async () => {
            try {
                // Load metadata first (needed for engine list)
                this.metadata = await this.fetchJSON('/data/engine-metadata.json');
                this.keywords = await this.fetchJSON('/data/keywords.json');
                
                // Load each engine's skill data
                const engineNames = Object.keys(this.metadata.engines);
                const enginePromises = engineNames.map(async (engineName) => {
                    try {
                        const data = await this.fetchJSON(`/data/engines/${engineName}.json`);
                        this.engines[engineName] = data;
                    } catch (err) {
                        console.warn(`Engine ${engineName} not found, using empty skill list`);
                        this.engines[engineName] = { skills: [] };
                    }
                });
                
                await Promise.all(enginePromises);
                
                // Load optional data (may not exist yet)
                try {
                    this.jyotishModifiers = await this.fetchJSON('/data/jyotish-modifiers.json');
                } catch (err) {
                    console.warn('Jyotish modifiers not loaded (optional)');
                    this.jyotishModifiers = { planets: {}, houses: {}, nakshatras: {} };
                }
                
                try {
                    this.synergies = await this.fetchJSON('/data/synergies.json');
                } catch (err) {
                    console.warn('Synergies not loaded (optional)');
                    this.synergies = { acx_seeds: [] };
                }
                
                this.loaded = true;
                console.log('✅ SkillDatabase v4.0 loaded successfully');
                console.log(`📊 Loaded ${engineNames.length} engines with skills`);
            } catch (error) {
                console.error('❌ Failed to load SkillDatabase:', error);
                throw error;
            }
        })();
        
        return this.loadPromise;
    }
    
    /**
     * Fetch JSON file with error handling
     */
    async fetchJSON(path) {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${path}`);
        }
        return await response.json();
    }
    
    /**
     * Get skill by ID (searches all engines)
     */
    getSkill(skillId) {
        if (!this.loaded) {
            console.warn('SkillDatabase not loaded yet');
            return null;
        }
        
        for (const engineName in this.engines) {
            const engine = this.engines[engineName];
            if (!engine.skills) continue;
            
            const skill = engine.skills.find(s => s.id === skillId);
            if (skill) {
                // Enhance skill with engine metadata
                return {
                    ...skill,
                    engine: engineName,
                    engineMeta: this.metadata.engines[engineName]
                };
            }
        }
        
        return null;
    }
    
    /**
     * Get all skills from a specific engine
     */
    getEngineSkills(engineName) {
        if (!this.loaded || !this.engines[engineName]) {
            return [];
        }
        
        return this.engines[engineName].skills || [];
    }
    
    /**
     * Get engine metadata
     */
    getEngineMetadata(engineName) {
        if (!this.loaded || !this.metadata) return null;
        return this.metadata.engines[engineName] || null;
    }
    
    /**
     * Get all engine names
     */
    getEngineNames() {
        if (!this.loaded || !this.metadata) return [];
        return Object.keys(this.metadata.engines);
    }
    
    /**
     * Filter skills by criteria across all engines
     */
    filterSkills(criteria = {}) {
        if (!this.loaded) return [];
        
        let results = [];
        
        for (const engineName in this.engines) {
            let engineSkills = this.engines[engineName].skills || [];
            
            // Filter by tier
            if (criteria.tier !== undefined) {
                engineSkills = engineSkills.filter(s => s.tier === criteria.tier);
            }
            
            // Filter by max KP cost
            if (criteria.maxKPCost !== undefined) {
                engineSkills = engineSkills.filter(s => s.cost.kp <= criteria.maxKPCost);
            }
            
            // Filter by keyword
            if (criteria.keyword) {
                engineSkills = engineSkills.filter(s => 
                    s.keywords && s.keywords.includes(criteria.keyword)
                );
            }
            
            // Filter by engine
            if (criteria.engine) {
                if (engineName !== criteria.engine) continue;
            }
            
            // Text search (name or description)
            if (criteria.search) {
                const search = criteria.search.toLowerCase();
                engineSkills = engineSkills.filter(s => 
                    s.name.toLowerCase().includes(search) || 
                    s.description.toLowerCase().includes(search)
                );
            }
            
            // Filter by AI priority
            if (criteria.minPriority !== undefined) {
                engineSkills = engineSkills.filter(s => 
                    s.ai_priority >= criteria.minPriority
                );
            }
            
            // Enhance with engine metadata
            engineSkills = engineSkills.map(skill => ({
                ...skill,
                engine: engineName,
                engineMeta: this.metadata.engines[engineName]
            }));
            
            results = results.concat(engineSkills);
        }
        
        return results;
    }
    
    /**
     * Get keyword definition
     */
    getKeywordDefinition(keyword) {
        if (!this.loaded || !this.keywords) return null;
        
        // Check status effects
        if (this.keywords.status_effects && this.keywords.status_effects[keyword]) {
            return this.keywords.status_effects[keyword];
        }
        
        // Check action keywords
        if (this.keywords.action_keywords && this.keywords.action_keywords[keyword]) {
            return this.keywords.action_keywords[keyword];
        }
        
        return null;
    }
    
    /**
     * Get all keywords
     */
    getAllKeywords() {
        if (!this.loaded || !this.keywords) return [];
        
        const statusKeywords = Object.keys(this.keywords.status_effects || {});
        const actionKeywords = Object.keys(this.keywords.action_keywords || {});
        
        return [...statusKeywords, ...actionKeywords];
    }
    
    /**
     * Get Jyotish modifier for planet/house/nakshatra
     */
    getJyotishModifier(type, name) {
        if (!this.loaded || !this.jyotishModifiers) return null;
        
        if (type === 'planet' && this.jyotishModifiers.planets) {
            return this.jyotishModifiers.planets[name];
        }
        
        if (type === 'house' && this.jyotishModifiers.houses) {
            return this.jyotishModifiers.houses[name];
        }
        
        if (type === 'nakshatra' && this.jyotishModifiers.nakshatras) {
            return this.jyotishModifiers.nakshatras[name];
        }
        
        return null;
    }
    
    /**
     * Get synergies involving specific engines
     */
    getSynergies(engineA, engineB = null) {
        if (!this.loaded || !this.synergies || !this.synergies.acx_seeds) {
            return [];
        }
        
        return this.synergies.acx_seeds.filter(synergy => {
            if (engineB) {
                return (synergy.engines.includes(engineA) && synergy.engines.includes(engineB));
            } else {
                return synergy.engines.includes(engineA);
            }
        });
    }
    
    /**
     * Get skills by tier distribution (for balance validation)
     */
    getSkillsByTier(engineName = null) {
        const distribution = { 0: [], 1: [], 2: [], 3: [], 4: [] };
        
        const engines = engineName ? [engineName] : Object.keys(this.engines);
        
        engines.forEach(engine => {
            const skills = this.getEngineSkills(engine);
            skills.forEach(skill => {
                if (distribution[skill.tier]) {
                    distribution[skill.tier].push(skill);
                }
            });
        });
        
        return distribution;
    }
    
    /**
     * Validate skill database integrity
     */
    validate() {
        if (!this.loaded) return { valid: false, errors: ['Database not loaded'] };
        
        const errors = [];
        const warnings = [];
        
        // Check each engine
        for (const engineName in this.engines) {
            const engine = this.engines[engineName];
            const skills = engine.skills || [];
            
            // Check tier distribution (should follow pyramid: 10% T0, 55-60% T1, etc)
            const tierCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };
            skills.forEach(skill => {
                tierCounts[skill.tier] = (tierCounts[skill.tier] || 0) + 1;
            });
            
            const total = skills.length;
            if (total > 0) {
                const t0Pct = (tierCounts[0] / total) * 100;
                const t1Pct = (tierCounts[1] / total) * 100;
                
                if (t0Pct < 5 || t0Pct > 15) {
                    warnings.push(`${engineName}: Tier 0 is ${t0Pct.toFixed(1)}% (target: 10%)`);
                }
                if (t1Pct < 50 || t1Pct > 65) {
                    warnings.push(`${engineName}: Tier 1 is ${t1Pct.toFixed(1)}% (target: 55-60%)`);
                }
            }
            
            // Check each skill
            skills.forEach(skill => {
                if (!skill.id || !skill.name) {
                    errors.push(`${engineName}: Skill missing id or name`);
                }
                
                if (!skill.keywords || skill.keywords.length === 0) {
                    warnings.push(`${engineName}/${skill.name}: No keywords`);
                }
                
                if (!skill.jyotish_hooks) {
                    warnings.push(`${engineName}/${skill.name}: No Jyotish hooks`);
                }
            });
        }
        
        return {
            valid: errors.length === 0,
            errors,
            warnings,
            stats: {
                engines: Object.keys(this.engines).length,
                totalSkills: this.filterSkills().length,
                keywords: this.getAllKeywords().length
            }
        };
    }
}

// Create singleton instance
const skillDB = new SkillDatabase();

// Auto-load when DOM ready (in browser environment)
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => skillDB.load());
    } else {
        skillDB.load();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SkillDatabase;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.SkillDatabase = SkillDatabase;
    window.skillDB = skillDB;
}
