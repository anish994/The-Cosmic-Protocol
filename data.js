// === 8 MAIN ENGINES ===
const ENGINES = [
    { id: "foundational", name: "Foundational", icon: "🏛️", color: "#8B7355" },
    { id: "character_analysis", name: "Character Analysis", icon: "🎭", color: "#9370DB" },
    { id: "consciousness", name: "Consciousness", icon: "👁️", color: "#00CED1" },
    { id: "divination", name: "Divination", icon: "🔮", color: "#9400D3" },
    { id: "singularity", name: "Singularity", icon: "⚡", color: "#FF6B6B" },
    { id: "tantra", name: "Tantra", icon: "🕉️", color: "#FF8C00" },
    { id: "therapeutic", name: "Therapeutic", icon: "🌿", color: "#32CD32" },
    { id: "invocation", name: "Invocation", icon: "✨", color: "#FFD700" }
];

// Sample skill data for prototype testing (using real engine structure)
const SAMPLE_SKILLS = [
    {
        id: "SKILL_FOUNDATIONAL_001",
        name: "Basic Scaffold",
        engine: "foundational",
        category: "Foundation",
        tier: 0,
        cost: { kp: 1 },
        cooldown: 0,
        unlocked: true,
        description: "Deploy a [Structure] that lasts 3 turns. Allies within 3x3 area gain +10% effect.",
        effects: ["Deploy [Structure] (3 turns)", "+10% effect in 3x3 area"],
        keywords: ["Structure"],
        powerScore: 4
    },
    {
        id: "SKILL_SINGULARITY_025",
        name: "Threshold Strike",
        engine: "singularity",
        category: "Finisher",
        tier: 2,
        cost: { kp: 3 },
        cooldown: 2,
        unlocked: true,
        description: "Deal massive damage when target is below 30% Ojas. Triggers chain reactions.",
        effects: ["Massive damage <30% Ojas", "Chain reaction potential"],
        keywords: ["Threshold", "Finisher"],
        powerScore: 55
    },
    {
        id: "SKILL_CONSCIOUSNESS_042",
        name: "Mind Field",
        engine: "consciousness",
        category: "Zone Control",
        tier: 3,
        cost: { kp: 4 },
        cooldown: 3,
        unlocked: true,
        description: "Create a persistent [Field] that amplifies ally mental abilities and disrupts enemy focus.",
        effects: ["Deploy [Field] zone", "Amplifies mental abilities", "Disrupts enemy focus"],
        keywords: ["Field", "Amplify"],
        powerScore: 68
    },
    {
        id: "SKILL_CHARACTER_015",
        name: "Persona Shift",
        engine: "character_analysis",
        category: "Adaptive",
        tier: 2,
        cost: { kp: 3 },
        cooldown: 2,
        unlocked: true,
        description: "Analyze opponent and shift fighting style to exploit weaknesses.",
        effects: ["Analyze opponent", "Exploit weaknesses", "+20% damage vs analyzed target"],
        keywords: ["Analyze", "Adapt"],
        powerScore: 42
    },
    {
        id: "SKILL_THERAPEUTIC_033",
        name: "Healing Wave",
        engine: "therapeutic",
        category: "Restoration",
        tier: 3,
        cost: { kp: 3 },
        cooldown: 3,
        unlocked: true,
        description: "Channel healing energy to restore Ojas and remove afflictions.",
        effects: ["Restore 40 Ojas", "Remove 2 debuffs", "[Heal-over-time] 3 turns"],
        keywords: ["Heal", "Cleanse"],
        powerScore: 58
    },
    {
        id: "SKILL_DIVINATION_018",
        name: "Fate Glimpse",
        engine: "divination",
        category: "Prediction",
        tier: 2,
        cost: { kp: 2 },
        cooldown: 3,
        unlocked: true,
        description: "Glimpse future possibilities. Reveal enemy next move and gain insight bonus.",
        effects: ["Reveal enemy next action", "+15% dodge chance", "Insight token gained"],
        keywords: ["Foresight", "Insight"],
        powerScore: 48
    },
    {
        id: "SKILL_TANTRA_050",
        name: "Energy Weave",
        engine: "tantra",
        category: "Flow",
        tier: 3,
        cost: { kp: 4 },
        cooldown: 2,
        unlocked: true,
        description: "Weave cosmic energy into powerful patterns that amplify next action.",
        effects: ["Next skill +50% power", "[Flow] state for 2 turns", "Energy amplification"],
        keywords: ["Flow", "Amplify"],
        powerScore: 65
    },
    {
        id: "SKILL_INVOCATION_105",
        name: "Divine Blessing",
        engine: "invocation",
        category: "Entity Power",
        tier: 4,
        cost: { kp: 5 },
        cooldown: 5,
        unlocked: true,
        description: "Channel power from invoked deity. Massive stat boost based on planetary alignment.",
        effects: ["Channel divine power", "+40% all stats", "Planetary bonus"],
        keywords: ["Invoke", "Divine"],
        powerScore: 85
    },
    {
        id: "SKILL_SINGULARITY_099",
        name: "Cascade Collapse",
        engine: "singularity",
        category: "Ultimate",
        tier: 5,
        cost: { kp: 8 },
        cooldown: 8,
        unlocked: false,
        description: "Trigger cascading threshold reactions. Each target below 50% creates chain damage.",
        effects: ["Chain threshold damage", "Cascading reactions", "Devastating finisher"],
        keywords: ["Threshold", "Chain", "Ultimate"],
        powerScore: 125
    },
    {
        id: "SKILL_THERAPEUTIC_088",
        name: "Sanctuary Aura",
        engine: "therapeutic",
        category: "Ultimate Heal",
        tier: 5,
        cost: { kp: 7 },
        cooldown: 7,
        unlocked: false,
        description: "Create ultimate healing sanctuary. Massive restoration and protection zone.",
        effects: ["Restore 80 Ojas", "Immunity zone", "Regeneration field"],
        keywords: ["Heal", "Zone", "Ultimate"],
        powerScore: 110
    }
];

// Tier display names
const TIER_NAMES = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V"
};
