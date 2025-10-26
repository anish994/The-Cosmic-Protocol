// 🔧 Skill Completer V1.0 - Generate Missing Skills
// Completes Consciousness (4), Tantra (11), Therapeutic (6) = 21 total

const fs = require('fs');

// Missing skill definitions based on engine patterns
const missingSkills = {
  consciousness: [
    {
      number: 97,
      name: "Perfect Awareness",
      tier: 4,
      cost: { kp: 12, consciousness: 80 },
      cooldown: 10,
      effect: "Achieve complete battlefield awareness. See all hidden information for 3 turns. All your abilities cost 50% less Consciousness.",
      keywords: ["Insight", "Efficiency", "Vision"],
      themes: ["scaling", "information", "economy"]
    },
    {
      number: 98,
      name: "Eternal Mind",
      tier: 4,
      cost: { kp: 14, consciousness: 90 },
      cooldown: 12,
      effect: "Consciousness no longer depletes. All abilities using Consciousness cost 0 for 2 turns. Draw 3 cards.",
      keywords: ["Infinite", "Economy", "Scaling"],
      themes: ["scaling", "broken", "ultimate"]
    },
    {
      number: 99,
      name: "Cosmic Synthesis",
      tier: 4,
      cost: { kp: 15, consciousness: 100 },
      cooldown: 15,
      effect: "Combine all active buffs into one mega-buff with combined effects and duration. Buff cannot be dispelled.",
      keywords: ["Synthesis", "Permanent", "Power"],
      themes: ["scaling", "ultimate", "unstoppable"]
    },
    {
      number: 100,
      name: "Transcendent Form",
      tier: 4,
      cost: { kp: 20, consciousness: 150 },
      cooldown: 20,
      effect: "ULTIMATE: Transform into pure consciousness. Immune to all damage and debuffs for 3 turns. All abilities are instant and free. At end, restore all resources to maximum.",
      keywords: ["Ultimate", "Transcendence", "Godmode"],
      themes: ["scaling", "ultimate", "invincible"]
    }
  ],
  
  tantra: [
    {
      number: 90,
      name: "Ravaging Storm",
      tier: 3,
      cost: { kp: 9, shakti: 60 },
      cooldown: 8,
      effect: "Deal 35 damage to all enemies. Apply [Burn] and [Bleed] for 3 turns each.",
      keywords: ["AoE", "Burn", "Bleed", "Pressure"],
      themes: ["aggro", "dot", "tempo"]
    },
    {
      number: 91,
      name: "Death Mark",
      tier: 3,
      cost: { kp: 8, shakti: 55 },
      cooldown: 9,
      effect: "Mark target enemy. If they drop below 30% Ojas within 3 turns, instantly Execute them.",
      keywords: ["Execute", "Pressure", "Finish"],
      themes: ["aggro", "execute", "tempo"]
    },
    {
      number: 92,
      name: "Relentless Pursuit",
      tier: 3,
      cost: { kp: 7, shakti: 50 },
      cooldown: 7,
      effect: "Gain +30% attack speed for 4 turns. Attacks ignore 50% of enemy defense.",
      keywords: ["Haste", "Penetration", "Relentless"],
      themes: ["aggro", "tempo", "offense"]
    },
    {
      number: 93,
      name: "Overwhelming Force",
      tier: 3,
      cost: { kp: 10, shakti: 70 },
      cooldown: 10,
      effect: "Deal 50 damage. If target survives, Stun them for 2 turns and apply [Vulnerable] x3.",
      keywords: ["Damage", "Stun", "Vulnerable", "Control"],
      themes: ["aggro", "control", "pressure"]
    },
    {
      number: 94,
      name: "Savage Frenzy",
      tier: 4,
      cost: { kp: 11, shakti: 75 },
      cooldown: 11,
      effect: "Enter Frenzy: +50% damage, +30% attack speed, but take +20% damage. Lasts 5 turns.",
      keywords: ["Frenzy", "Risk", "Power"],
      themes: ["aggro", "risk", "tempo"]
    },
    {
      number: 95,
      name: "Annihilation Wave",
      tier: 4,
      cost: { kp: 12, shakti: 80 },
      cooldown: 12,
      effect: "Deal 60 damage to all enemies. Destroys all enemy shields and buffs first.",
      keywords: ["AoE", "Dispel", "Destruction"],
      themes: ["aggro", "control", "tempo"]
    },
    {
      number: 96,
      name: "Ultimate Destruction",
      tier: 4,
      cost: { kp: 13, shakti: 85 },
      cooldown: 13,
      effect: "Deal 80 pure damage (ignores shields, immunity, protection). Cannot be prevented or reduced.",
      keywords: ["True Damage", "Unstoppable", "Execute"],
      themes: ["aggro", "ultimate", "unstoppable"]
    },
    {
      number: 97,
      name: "Apocalypse Flame",
      tier: 4,
      cost: { kp: 14, shakti: 90 },
      cooldown: 14,
      effect: "Apply permanent [Burn] that deals increasing damage each turn (5, 10, 15, 20...). Cannot be cleansed.",
      keywords: ["Burn", "DoT", "Permanent", "Unstoppable"],
      themes: ["aggro", "dot", "ultimate"]
    },
    {
      number: 98,
      name: "Wrathful Ascension",
      tier: 4,
      cost: { kp: 15, shakti: 100 },
      cooldown: 15,
      effect: "Transform into Avatar of Wrath for 3 turns. All attacks deal triple damage and apply [Burn], [Bleed], and [Decay].",
      keywords: ["Ultimate", "Transformation", "Devastation"],
      themes: ["aggro", "ultimate", "broken"]
    },
    {
      number: 99,
      name: "Eternal Rage",
      tier: 4,
      cost: { kp: 18, shakti: 120 },
      cooldown: 18,
      effect: "Permanent buff: All your damage increased by 100%. All DoT effects doubled. Shakti regenerates twice as fast.",
      keywords: ["Permanent", "Scaling", "Power"],
      themes: ["aggro", "scaling", "ultimate"]
    },
    {
      number: 100,
      name: "Cataclysm",
      tier: 4,
      cost: { kp: 25, shakti: 200 },
      cooldown: 25,
      effect: "ULTIMATE: Deal 200 damage to all enemies. Destroy all structures, shields, and protections. Apply every DoT in the game for 10 turns each. Reduce max Ojas by 50%.",
      keywords: ["Ultimate", "Apocalypse", "Devastation", "Unstoppable"],
      themes: ["aggro", "ultimate", "godmode"]
    }
  ],
  
  therapeutic: [
    {
      number: 95,
      name: "Mass Resurrection",
      tier: 4,
      cost: { kp: 12, prana: 80 },
      cooldown: 15,
      effect: "Revive all fallen allies with 50% Ojas. They gain immunity for 2 turns.",
      keywords: ["Resurrect", "Heal", "Immunity"],
      themes: ["healing", "support", "ultimate"]
    },
    {
      number: 96,
      name: "Divine Sanctuary",
      tier: 4,
      cost: { kp: 13, prana: 85 },
      cooldown: 12,
      effect: "Create sanctuary zone. All allies inside heal 20 per turn and are immune to debuffs. Lasts 5 turns.",
      keywords: ["Sanctuary", "Heal", "Immunity", "Zone"],
      themes: ["healing", "defense", "support"]
    },
    {
      number: 97,
      name: "Eternal Life",
      tier: 4,
      cost: { kp: 14, prana: 90 },
      cooldown: 18,
      effect: "Target ally cannot drop below 1 Ojas for 3 turns. They heal 30 per turn and are immune to Execute effects.",
      keywords: ["Immortality", "Heal", "Protection"],
      themes: ["healing", "defense", "ultimate"]
    },
    {
      number: 98,
      name: "Radiant Ascension",
      tier: 4,
      cost: { kp: 15, prana: 100 },
      cooldown: 16,
      effect: "Heal all allies to full Ojas. Remove all debuffs. Grant +50% damage and immunity for 2 turns.",
      keywords: ["Heal", "Cleanse", "Power", "Immunity"],
      themes: ["healing", "support", "ultimate"]
    },
    {
      number: 99,
      name: "Phoenix Rebirth",
      tier: 4,
      cost: { kp: 18, prana: 120 },
      cooldown: 20,
      effect: "Permanent passive: When you would die, instead fully heal and gain 5 turns of immunity. Can only trigger once per duel.",
      keywords: ["Resurrect", "Immortality", "Ultimate"],
      themes: ["healing", "survival", "ultimate"]
    },
    {
      number: 100,
      name: "Cosmic Renewal",
      tier: 4,
      cost: { kp: 25, prana: 200 },
      cooldown: 30,
      effect: "ULTIMATE: Reset the entire duel state. All Ojas restored to maximum, all cooldowns reset, all debuffs removed, all resources refilled. Both players draw 5 cards.",
      keywords: ["Ultimate", "Reset", "Renewal", "Miracle"],
      themes: ["healing", "ultimate", "broken"]
    }
  ]
};

// Convert to full skill format
function generateCompleteSkills() {
  const allSkills = [];
  
  for (const [engine, skills] of Object.entries(missingSkills)) {
    skills.forEach(skill => {
      const fullSkill = {
        id: `SKILL_${engine.toUpperCase()}_${skill.number}`,
        number: skill.number,
        name: skill.name,
        engine: engine.charAt(0).toUpperCase() + engine.slice(1),
        tier: skill.tier,
        tierValue: skill.tier,
        cost: skill.cost,
        cooldown: skill.cooldown,
        effect: skill.effect,
        keywords: skill.keywords,
        themes: skill.themes,
        powerScore: 50 + (skill.tier * 15) + (skill.number % 10) * 2,
        isFused: false,
        fusionDepth: 0,
        fusionIngredients: [],
        source: `${engine} v3.1 Completion Patch`
      };
      
      allSkills.push(fullSkill);
    });
  }
  
  return allSkills;
}

// Main execution
console.log("🔧 Starting Skill Completer...\n");

const completionSkills = generateCompleteSkills();

console.log("✅ Generated Missing Skills:\n");
console.log(`   Consciousness: ${missingSkills.consciousness.length} skills (#97-100)`);
console.log(`   Tantra: ${missingSkills.tantra.length} skills (#90-100)`);
console.log(`   Therapeutic: ${missingSkills.therapeutic.length} skills (#95-100)`);
console.log(`\n   TOTAL: ${completionSkills.length} skills generated\n`);

// Save to file
const outputPath = '../03-data/completion_skills_v3.json';
fs.writeFileSync(outputPath, JSON.stringify(completionSkills, null, 2));

console.log(`💾 Saved ${completionSkills.length} completion skills to ${outputPath}\n`);
console.log("✅ Skill Completion Ready for Merge!\n");
console.log("Run masterMerger.js again to include these 21 missing skills!");
