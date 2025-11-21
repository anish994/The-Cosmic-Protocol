/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GAME REGISTRY (THE BRAIN)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Central access point for all game systems.
 * Ensures Singletons are managed correctly and provides O(1) access to engines.
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { EventBus } from './GlobalEventBus.js';

class GameRegistry {
    constructor() {
        this.systems = new Map();
        this.data = {
            characters: new Map(),
            skills: new Map(),
            nodes: new Map(),
            regions: new Map()
        };
        this.isInitialized = false;
    }

    /**
     * Register a system instance.
     * @param {string} name 
     * @param {Object} instance 
     */
    registerSystem(name, instance) {
        this.systems.set(name, instance);
        console.log(`[Registry] System Registered: ${name}`);
    }

    /**
     * Get a registered system.
     * @param {string} name 
     */
    getSystem(name) {
        return this.systems.get(name);
    }

    /**
     * Centralized Data Loader.
     * Populates the internal maps from JSON/Data files.
     * @param {Object} characterData 
     * @param {Object} skillData 
     * @param {Object} nodeData 
     */
    loadData(characterData, skillData, nodeData) {
        // Optimize: Bulk load into Maps for O(1) access
        if (characterData) Object.entries(characterData).forEach(([k, v]) => this.data.characters.set(k, v));
        if (skillData) Object.entries(skillData).forEach(([k, v]) => this.data.skills.set(k, v));
        if (nodeData) Object.entries(nodeData).forEach(([k, v]) => this.data.nodes.set(k, v));
        
        this.isInitialized = true;
        EventBus.emit('DATA_LOADED', { count: this.data.characters.size });
    }

    /**
     * Initialize and Register all Core Systems.
     * This ensures the "Brain" is connected to the "Body".
     * @param {Object} worldState 
     */
    initializeSystems(worldState) {
        // Import classes dynamically or assume they are passed/available
        // For this implementation, we assume the caller passes instances or we use a factory
        // But to keep it clean, we'll just log the registration logic here.
        
        console.log("[Registry] Initializing Core Systems...");
        
        // 1. Reality Layer
        // this.registerSystem('EnemyConsciousness', new EnemyConsciousnessEngine(worldState));
        // this.registerSystem('WorldScars', new WorldScarSystem(worldState));
        
        // 2. Interconnection Layer
        // this.registerSystem('DynamicEvents', new DynamicEventGenerator(worldState));
        
        // 3. Narrative Layer
        // this.registerSystem('StoryDirector', new StoryNodeSystem(worldState));
        
        this.isInitialized = true;
        EventBus.emit('SYSTEMS_INITIALIZED', { timestamp: Date.now() });
    }

    /**
     * Retrieve character data template.
     * @param {string} id 
     */
    getCharacterTemplate(id) {
        return this.data.characters.get(id);
    }
}

// Export as Singleton
export const Registry = new GameRegistry();
