
const fs = require('fs');

// Mock EventBus
const EventBus = {
    listeners: {},
    on(event, cb) { 
        if(!this.listeners[event]) this.listeners[event] = [];
        this.listeners[event].push(cb);
    },
    emit(event, data) {
        console.log(`[EventBus] Emitting: ${event}`, data);
        if(this.listeners[event]) this.listeners[event].forEach(cb => cb(data));
    }
};

// Mock Enemy Engine
class EnemyConsciousnessEngine {
    constructor() {
        this.tacticalMemory = { 'AOE_SPAM': 0 };
        EventBus.on('TACTIC_LEARNED', (data) => {
            console.log(`[Hive Mind] Received intel: ${data.tactic}`);
            this.tacticalMemory[data.tactic] += 5;
        });
    }
    processReaction(actionType) {
        if (actionType === 'AOE_ATTACK') {
            this.tacticalMemory['AOE_SPAM']++;
            if (this.tacticalMemory['AOE_SPAM'] % 2 === 0) { // Lower threshold for test
                EventBus.emit('TACTIC_LEARNED', { tactic: 'AOE_SPAM', sourceRegion: 'TEST_REGION' });
            }
        }
    }
}

console.log("=== STARTING EVOLUTION VERIFICATION ===");

// 1. TEST HIVE MIND
console.log("\n--- Testing Hive Mind (EventBus) ---");
const enemyEngine = new EnemyConsciousnessEngine();

console.log(`Initial Memory: ${enemyEngine.tacticalMemory['AOE_SPAM']}`);
console.log("Simulating Attack 1...");
enemyEngine.processReaction('AOE_ATTACK'); // 1
console.log("Simulating Attack 2 (Trigger Threshold)...");
enemyEngine.processReaction('AOE_ATTACK'); // 2 -> Emits Event -> Adds 5

if (enemyEngine.tacticalMemory['AOE_SPAM'] >= 7) { // 2 + 5 = 7
    console.log(`[SUCCESS] Hive Mind updated memory. Current: ${enemyEngine.tacticalMemory['AOE_SPAM']}`);
} else {
    console.error(`[FAIL] Hive Mind failed. Current: ${enemyEngine.tacticalMemory['AOE_SPAM']}`);
}

console.log("\n=== VERIFICATION COMPLETE ===");
