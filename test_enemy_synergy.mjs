import { EnemyConsciousnessEngine } from './World_Bible_folder/engines/EnemyConsciousnessEngine.js';
import { EventBus } from './World_Bible_folder/engines/GlobalEventBus.js';

console.log("════════════════════════════════════════════════════════════");
console.log("  ENEMY SYNERGY & REACTION VERIFICATION");
console.log("════════════════════════════════════════════════════════════");

const engine = new EnemyConsciousnessEngine({});

// 1. Generate Enemy
const undeadTemplate = {
    id: 'skeleton_warrior',
    name: 'Skeleton Warrior',
    type: 'UNDEAD',
    faction: 'ashram_remnants',
    maxHp: 100,
    traits: []
};

const enemy = engine.generateConsciousEnemy(undeadTemplate, { factionState: {} });
console.log(`Generated Enemy: ${enemy.name} (${enemy.type})`);

// 2. Test Weakness (Light vs Undead)
console.log("\n[TEST 1] Weakness Interaction (Light vs Undead)");
const reaction1 = engine.processReaction(enemy, 'ATTACK', 10, { skillTags: ['LIGHT'] });

if (reaction1 && reaction1.type === 'STAGGER') {
    console.log(`PASS: Enemy staggered by Light damage. Dialogue: "${reaction1.dialogue}"`);
} else {
    console.error("FAIL: Enemy did not stagger.");
}

// 3. Test Fusion Reaction
console.log("\n[TEST 2] Fusion Reaction");
const reaction2 = engine.processReaction(enemy, 'FUSION_USED', 0, { fusionName: 'Solar Void Singularity' });

if (reaction2 && reaction2.type === 'SHOCK') {
    console.log(`PASS: Enemy shocked by Fusion. Dialogue: "${reaction2.dialogue}"`);
} else {
    console.error("FAIL: Enemy did not react to fusion.");
}

console.log("\n════════════════════════════════════════════════════════════");
console.log("  VERIFICATION COMPLETE");
console.log("════════════════════════════════════════════════════════════");
