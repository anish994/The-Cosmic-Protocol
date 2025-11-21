import { SkillResonanceSystem } from '../SkillResonanceSystem.js';

console.log("═══════════════════════════════════════════════════════════════════════════");
console.log("               TESTING FACTION PERSONALITY REGISTRY");
console.log("═══════════════════════════════════════════════════════════════════════════");

const resonanceSystem = new SkillResonanceSystem();

// 1. Test Untethered Architects (Love Fusions)
console.log("\n[TEST 1] Untethered Architects vs Fusion Skill...");
const fusionSkill = { 
  id: 'void_bloom', 
  type: 'FUSION', 
  isFusion: true, 
  components: ['VOID', 'NATURE'],
  resonance: 'VOID' // Fallback
};

const reaction1 = resonanceSystem.getFactionReaction(fusionSkill, 'untethered_architects');
if (reaction1.reputationChange > 0) {
  console.log("PASS: Architects liked the Fusion.");
  console.log(`Message: ${reaction1.message}`);
} else {
  console.log(`FAIL: Reaction: ${JSON.stringify(reaction1)}`);
}

// 2. Test Post-Human Cults (Love Isolation/Alien)
console.log("\n[TEST 2] Post-Human Cults vs Astral Skill...");
const astralSkill = { 
  id: 'star_call', 
  type: 'MAGIC', 
  resonance: 'ASTRAL' // High Isolation
};

const reaction2 = resonanceSystem.getFactionReaction(astralSkill, 'post_human_cults');
if (reaction2.reputationChange > 0) {
  console.log("PASS: Cult liked the Astral skill.");
  console.log(`Message: ${reaction2.message}`);
} else {
  console.log(`FAIL: Reaction: ${JSON.stringify(reaction2)}`);
}

console.log("\n═══════════════════════════════════════════════════════════════════════════");
console.log("TESTING COMPLETE");
console.log("═══════════════════════════════════════════════════════════════════════════");
