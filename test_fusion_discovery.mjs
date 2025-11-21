import { FusionDiscovery } from './World_Bible_folder/engines/FusionDiscoverySystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  FUSION DISCOVERY SYSTEM VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Setup Listener for Legendary Event
let legendaryTriggered = false;
EventBus.on('LEGENDARY_FUSION_TRIGGERED', (data) => {
    console.log(`[EventBus] CAUGHT: LEGENDARY_FUSION_TRIGGERED`);
    console.log(`  > Name: ${data.name}`);
    console.log(`  > Effect: ${data.worldEffect}`);
    legendaryTriggered = true;
});

// 1. Test Normal Fusion
console.log("\n[TEST 1] Normal Fusion Discovery");
EventBus.emit('FUSION_DISCOVERED', {
    fusion: {
        id: 'fusion_normal_01',
        baseSkills: ['skill_fireball', 'skill_ice_shard'],
        name: 'Frostfire Bolt'
    },
    synergy: 50
});

if (legendaryTriggered) {
    console.error("FAIL: Legendary event triggered for normal fusion.");
} else {
    console.log("PASS: No legendary event for normal fusion.");
}

// 2. Test Legendary Fusion
console.log("\n[TEST 2] Legendary Fusion Discovery");
const legendaryFusion = {
    id: 'fusion_legendary_01',
    baseSkills: ['skill_void_blast', 'skill_solar_flare'], // Matches key in System
    name: 'Solar Void Singularity'
};

EventBus.emit('FUSION_DISCOVERED', {
    fusion: legendaryFusion,
    synergy: 95
});

if (legendaryTriggered) {
    console.log("PASS: Legendary event triggered successfully.");
} else {
    console.error("FAIL: Legendary event NOT triggered.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
