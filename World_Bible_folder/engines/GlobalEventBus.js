/**
 * ═══════════════════════════════════════════════════════════════════════════
 * GLOBAL EVENT BUS (THE NERVOUS SYSTEM)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * A lightweight, high-performance Pub/Sub system to decouple game systems.
 * Allows "Aliveness" to propagate instantly without tight coupling.
 * 
 * USAGE:
 *   EventBus.emit('PLAYER_MOVED', { region: 'ashram_central' });
 *   EventBus.on('PLAYER_MOVED', (data) => { ... });
 * 
 * @version 1.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

class GlobalEventBus {
    constructor() {
        this.listeners = new Map();
        this.history = []; // Optional: Keep last N events for debugging
        this.maxHistory = 50;
    }

    /**
     * Subscribe to an event.
     * @param {string} eventName 
     * @param {Function} callback 
     * @returns {Function} Unsubscribe function
     */
    on(eventName, callback) {
        if (!this.listeners.has(eventName)) {
            this.listeners.set(eventName, new Set());
        }
        this.listeners.get(eventName).add(callback);

        // Return unsubscribe function
        return () => this.off(eventName, callback);
    }

    /**
     * Unsubscribe from an event.
     * @param {string} eventName 
     * @param {Function} callback 
     */
    off(eventName, callback) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).delete(callback);
        }
    }

    /**
     * Emit an event to all subscribers.
     * @param {string} eventName 
     * @param {Object} data 
     */
    emit(eventName, data = {}) {
        // Log for debugging
        this._addToHistory(eventName, data);
        
        // NEW: Global Console Logger for "Alive" feel during development
        if (eventName.includes('SCAR') || eventName.includes('NEMESIS') || eventName.includes('TACTIC')) {
            console.log(`%c[ALIVE] ${eventName}`, 'color: cyan', data);
        }

        if (this.listeners.has(eventName)) {
            for (const callback of this.listeners.get(eventName)) {
                try {
                    callback(data);
                } catch (err) {
                    console.error(`[EventBus] Error in listener for ${eventName}:`, err);
                }
            }
        }
    }

    _addToHistory(eventName, data) {
        this.history.unshift({ event: eventName, data, timestamp: Date.now() });
        if (this.history.length > this.maxHistory) {
            this.history.pop();
        }
    }

    /**
     * Clear all listeners (useful for resetting game state).
     */
    clear() {
        this.listeners.clear();
        this.history = [];
    }
}

// Export as Singleton
const EventBus = new GlobalEventBus();
module.exports = { EventBus, GlobalEventBus };
