import { EnvironmentSystem } from './World_Bible_folder/engines/EnvironmentInteractionSystem.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  ENVIRONMENT INTERACTION SYSTEM VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

// Setup Listener
let interactionTriggered = false;
EventBus.on('ENVIRONMENT_INTERACTION', (data) => {
    console.log(`[EventBus] CAUGHT: ENVIRONMENT_INTERACTION`);
    console.log(`  > Type: ${data.type}`);
    console.log(`  > Description: ${data.description}`);
    
    if (data.type === 'EXPLOSION') {
        interactionTriggered = true;
    }
});

// Test Fire + Flammable
console.log("\n[TEST 1] Fire Skill on Flammable Environment");
EventBus.emit('SKILL_USED', {
    skill: {
        id: 'skill_fireball',
        tags: ['FIRE', 'PROJECTILE']
    },
    targetEnv: {
        id: 'env_oil_barrel',
        tags: ['FLAMMABLE', 'LIQUID']
    },
    targetLocation: { x: 10, y: 10 }
});

if (interactionTriggered) {
    console.log("PASS: Interaction triggered successfully.");
} else {
    console.error("FAIL: Interaction NOT triggered.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
