// === SHARED SKILL SYSTEM BRIDGE ===
// Connects Fusion Lab and Sanctum Builder through localStorage
// Like the nervous system connecting organs

const SkillSystem = {
    // === STORAGE KEYS ===
    KEYS: {
        BASE_SKILLS: 'astrakarma_base_skills',
        FUSED_SKILLS: 'fusedSkills', // Keep existing key for compatibility
        SANCTUM_CARDS: 'astrakarma_sanctum_cards',
        LAST_SYNC: 'astrakarma_last_sync'
    },

    // === GET ALL SKILLS (Base + Fused) ===
    getAllSkills() {
        const baseSkills = this.getBaseSkills();
        const fusedSkills = this.getFusedSkills();
        const allSkills = [...baseSkills, ...fusedSkills];
        
        console.log(`🔄 SkillSystem: ${baseSkills.length} base + ${fusedSkills.length} fused = ${allSkills.length} total`);
        return allSkills;
    },

    // === BASE SKILLS ===
    getBaseSkills() {
        // Check if SAMPLE_SKILLS is available (fusion demo)
        if (typeof SAMPLE_SKILLS !== 'undefined') {
            return SAMPLE_SKILLS;
        }
        
        // Otherwise load from localStorage
        try {
            const stored = localStorage.getItem(this.KEYS.BASE_SKILLS);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load base skills:', error);
        }
        
        return [];
    },

    // Store base skills (called by fusion demo on init)
    saveBaseSkills(skills) {
        try {
            localStorage.setItem(this.KEYS.BASE_SKILLS, JSON.stringify(skills));
            this.updateLastSync();
            console.log(`💾 SkillSystem: Saved ${skills.length} base skills`);
        } catch (error) {
            console.error('Failed to save base skills:', error);
        }
    },

    // === FUSED SKILLS ===
    getFusedSkills() {
        try {
            const stored = localStorage.getItem(this.KEYS.FUSED_SKILLS);
            if (stored) {
                const fused = JSON.parse(stored);
                console.log(`✨ SkillSystem: Loaded ${fused.length} fused skills`);
                return fused;
            }
        } catch (error) {
            console.error('Failed to load fused skills:', error);
        }
        
        return [];
    },

    // === SANCTUM CARDS ===
    getSanctumCards() {
        try {
            const stored = localStorage.getItem(this.KEYS.SANCTUM_CARDS);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load sanctum cards:', error);
        }
        
        return [];
    },

    saveSanctumCard(card) {
        try {
            const cards = this.getSanctumCards();
            cards.push(card);
            localStorage.setItem(this.KEYS.SANCTUM_CARDS, JSON.stringify(cards));
            this.updateLastSync();
            console.log(`💾 SkillSystem: Saved sanctum card "${card.name}"`);
            return true;
        } catch (error) {
            console.error('Failed to save sanctum card:', error);
            return false;
        }
    },

    deleteSanctumCard(cardId) {
        try {
            let cards = this.getSanctumCards();
            cards = cards.filter(c => c.id !== cardId);
            localStorage.setItem(this.KEYS.SANCTUM_CARDS, JSON.stringify(cards));
            this.updateLastSync();
            console.log(`🗑️ SkillSystem: Deleted sanctum card ${cardId}`);
            return true;
        } catch (error) {
            console.error('Failed to delete sanctum card:', error);
            return false;
        }
    },

    // === SKILL LOOKUP ===
    findSkillById(skillId) {
        const allSkills = this.getAllSkills();
        return allSkills.find(s => s.id === skillId);
    },

    findSkillsByEngine(engineId) {
        const allSkills = this.getAllSkills();
        return allSkills.filter(s => s.engine === engineId);
    },

    searchSkills(query) {
        const allSkills = this.getAllSkills();
        const q = query.toLowerCase();
        return allSkills.filter(s =>
            s.name.toLowerCase().includes(q) ||
            (s.description && s.description.toLowerCase().includes(q)) ||
            (s.keywords && s.keywords.some(k => k.toLowerCase().includes(q)))
        );
    },

    // === SYNC TRACKING ===
    updateLastSync() {
        localStorage.setItem(this.KEYS.LAST_SYNC, Date.now().toString());
    },

    getLastSync() {
        const timestamp = localStorage.getItem(this.KEYS.LAST_SYNC);
        return timestamp ? parseInt(timestamp) : null;
    },

    // === NAVIGATION ===
    openFusionLab() {
        window.location.href = '../05-fusion/demo/index.html';
    },

    openSanctumBuilder() {
        window.location.href = '../06-prototypes/sanctum-builder-v2.html';
    },

    // === STATISTICS ===
    getStats() {
        const base = this.getBaseSkills();
        const fused = this.getFusedSkills();
        const cards = this.getSanctumCards();
        
        return {
            baseSkills: base.length,
            fusedSkills: fused.length,
            totalSkills: base.length + fused.length,
            sanctumCards: cards.length,
            lastSync: this.getLastSync()
        };
    }
};

// Make globally available
if (typeof window !== 'undefined') {
    window.SkillSystem = SkillSystem;
    console.log('🌐 SkillSystem Bridge Loaded');
}
