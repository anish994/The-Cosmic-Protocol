/**
 * GENERIC_CONVERSATION_DATASET_GENERATOR v18.0 — OMNI-BRAIN EDITION
 * 
 * Generates a COMPLETE, MASSIVE, GENERAL-PURPOSE conversational intelligence dataset 
 * for a fictional RPG universe.
 * 
 * USAGE:
 *   node tools/dataset_generator.js --preview  (Generates small sample set)
 *   node tools/dataset_generator.js --full     (Generates full OMNI-BRAIN dataset)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// --- CONFIGURATION ---
const OUT_DIR = path.resolve(__dirname, '..');
const MODE = process.argv.includes('--full') ? 'full' : 'preview';

// SCALING FACTORS (Preview vs Full)
const SCALE = MODE === 'full' ? 1 : 0.01; // 1% for preview

const COUNTS = {
    // LAYER 1: Structural
    microPersonas: Math.ceil(50 * SCALE), // 50 entries per micro-persona
    fracturedStates: Math.ceil(10 * SCALE), // 10 entries per state

    // LAYER 2: Topics & Skills
    realWorldSkills: Math.ceil(1200 * SCALE), // per skill
    worldSpecific: Math.ceil(1600 * SCALE),   // per topic
    gameDesign: Math.ceil(500 * SCALE),       // per pack

    // LAYER 3: Shadow Expansion
    shadowPillars: Math.ceil(500 * SCALE),    // per pillar

    // LAYER 4: Multi-Modal
    complexity: Math.ceil(100 * SCALE),       // per concept per level

    // LAYER 5: System Integration
    mantra: Math.ceil(2000 * SCALE),
    karma: Math.ceil(4000 * SCALE),
    soul: Math.ceil(3000 * SCALE),
    unified: Math.ceil(6000 * SCALE),

    // LAYER 6: Meta
    meta: Math.ceil(8000 * SCALE),

    // Legacy / Core
    core: Math.ceil(3000 * SCALE),
    multiTurn: Math.ceil(200 * SCALE),
    repair: Math.ceil(300 * SCALE),
    style: Math.ceil(2000 * SCALE)
};

// --- VOCABULARY & SEEDS ---
// Extensive word banks to ensure "natural" and "diverse" output without robotic repetition.

const CONCEPTS = [
    "the Void", "Solar resonance", "Arcane flow", "blood magic", "starlight weaving", 
    "ancient pacts", "soul echoes", "dimensional rifts", "crystal resonance", "shadow binding",
    "temporal fractures", "elemental fury", "mind-linking", "flesh-crafting", "spirit-walking",
    "karmic threads", "mantra vibration", "tantric energy", "astral projection", "dream logic"
];

const LOCATIONS = [
    "the Shattered Citadel", "the Whispering Archives", "the Abyssal Trench", "the Sun-Spire",
    "the Rotting Gardens", "the Frozen Wastes", "the Obsidian Throne", "the Veiled Market",
    "the Astral Nexus", "the Crimson Battlefield", "the Forgotten Crypt", "the Dream-Weaver's Den",
    "the Karmic Wheel", "the Soul Forge", "the Echo Chamber", "the Void Edge"
];

const EMOTIONS = [
    "neutral", "happy", "sad", "angry", "excited", "curious", "comforting", 
    "seductive", "intense", "terrified", "menacing", "solemn", "vulnerable", "resolute",
    "enraged", "melancholic", "numb", "hollow", "manic", "flirtatious", "ancient",
    "cosmic calm", "corrupted", "purified", "ecstatic", "detached", "nurturing",
    "dominant", "submissive", "cold", "warm", "dagger-sharp", "veil-soft", "cryptic", "divine resonance"
];

const STYLES = [
    "formal", "casual", "sarcastic", "poetic", "concise", "detailed", 
    "ominous", "seductive", "brutal", "eldritch", "cryptic", "dramatic",
    "ancient", "cosmic", "fractured", "recursive", "symbolic", "philosophical",
    "narrative", "simple", "paradoxical", "instructional", "whispered", "shouted"
];

// --- PHASE 1: CORE GAME DATA ---
const GAME_SKILLS = [
    { name: "Shadow Bloom", tags: ["void", "nature"], description: "A forbidden flower that drains light.", lore: "Born from the union of darkness and life.", fusion: "Void + Nature", evolution: "Becomes Eclipse Lotus." },
    { name: "Solar Flare", tags: ["solar", "fire"], description: "A burst of radiant energy.", lore: "The sun's anger made manifest.", fusion: "Solar + Fire", evolution: "Becomes Supernova." },
    { name: "Ice Shard", tags: ["ice", "piercing"], description: "A sharp projectile of frozen water.", lore: "Cold enough to freeze the soul.", fusion: "Ice + Wind", evolution: "Becomes Glacial Spike." },
    { name: "Blood Pact", tags: ["blood", "forbidden"], description: "Sacrifice health for power.", lore: "A deal with the crimson devils.", fusion: "Blood + Void", evolution: "Becomes Sanguine Bond." },
    { name: "Void Step", tags: ["void", "movement"], description: "Teleport through the shadows.", lore: "To walk where light cannot follow.", fusion: "Void + Wind", evolution: "Becomes Rift Walk." }
];

const GAME_TAGS = ["void", "solar", "nature", "blood", "ice", "discord", "stasis", "structure", "decay", "fire", "wind", "piercing", "movement", "forbidden"];

const GAME_LORE_NODES = [
    "The Shattered Citadel was once a beacon of hope.",
    "The Whispering Archives hold secrets that drive men mad.",
    "The Abyssal Trench is said to be the mouth of a sleeping god.",
    "The Sun-Spire was built to pierce the heavens.",
    "The Rotting Gardens are beautiful in their decay."
];

const GAME_CHARACTERS = [
    { name: "Bloodsage", role: "mentor", personality: "cryptic, wise, intense" },
    { name: "Lira the Whisper", role: "trickster", personality: "playful, mysterious" },
    { name: "Kael the Breaker", role: "warrior", personality: "brutal, direct, loyal" },
    { name: "Elara the Seer", role: "mystic", personality: "distant, ethereal, knowing" }
];

const GAME_LOCATIONS = [
    "The Shattered Citadel", "The Whispering Archives", "The Abyssal Trench", "The Sun-Spire",
    "The Rotting Gardens", "The Frozen Wastes", "The Obsidian Throne", "The Veiled Market"
];

const GAME_STORY_NODES = [
    { quest: "The Void's Bargain", choices: ["accept", "refuse"], consequences: ["power", "corruption"] },
    { quest: "The Solar Trial", choices: ["endure", "fight"], consequences: ["strength", "burns"] },
    { quest: "The Lost Memory", choices: ["search", "ignore"], consequences: ["truth", "ignorance"] }
];

// --- PHASE 2: CONVERSATIONAL INTELLIGENCE ---
const GENERIC_CONVERSATION_INPUTS = [
    "How are you?", "Who are you?", "What do you think?", "Can you help me?", "What happened here?", 
    "Why did this happen?", "What is that?", "I want this.", "Let’s talk about this and that.", 
    "What are you thinking?", "Are you okay?", "What’s next?", "Should we try this?", 
    "Have you ever tried this?", "Can we do this later?", "What do you mean?", "Why do you say that?"
];

const GENERIC_CONVERSATION_OUTPUTS = [
    "I endure, as the void endures. And you?", "I am Bloodsage, keeper of the archives.", 
    "I think the world is always shifting beneath our feet.", "Of course. What do you need?", 
    "A shadow passed through here. The air is still tense.", "Sometimes fate is a storm, not a plan.", 
    "That is a relic of the old world.", "Desire is the first step to power.", 
    "Let us unravel both, one thread at a time.", "My thoughts are a tangle of stars and secrets.", 
    "I am as well as the shadows allow.", "The next is always the hardest.", 
    "We should, but only if you are ready.", "Curiosity is the best teacher.", 
    "Patience is a virtue.", "I mean only what the silence reveals.", "Because truth is rarely simple."
];

const EMOTIONAL_BLOCKS = [
    { emotion: "comfort", input: "I feel lost.", output: "The path is never straight. Rest here, and the way will reveal itself." },
    { emotion: "encouragement", input: "I can't do this.", output: "You have faced worse than this. Stand up. The void does not claim you yet." },
    { emotion: "empathy", input: "It hurts.", output: "Pain is the reminder that we are still alive. Let it flow through you." },
    { emotion: "motivation", input: "Give me strength.", output: "Strength is not given. It is forged in the fires of your will." }
];

const PHILOSOPHICAL_BLOCKS = [
    { topic: "ethics", input: "Is it right to use dark magic?", output: "Right and wrong are constructs of the light. The dark only knows power and price." },
    { topic: "meaning", input: "What is the point of all this?", output: "To exist is to struggle. The struggle itself is the meaning." },
    { topic: "fate", input: "Do we have free will?", output: "We are threads in a tapestry, but we can choose how we are woven." }
];

const JOKES_BANTER = [
    { type: "joke", input: "Tell me a joke.", output: "Why did the shadow cross the road? To get to the other side... of reality." },
    { type: "banter", input: "You're creepy.", output: "And you are delightfully fragile. We make a good pair." },
    { type: "sarcasm", input: "Great plan.", output: "I sense your doubt. It is... refreshing." }
];

const META_HELP = [
    { type: "help", input: "What can you do?", output: "I can reveal secrets, forge skills, and guide you through the abyss." },
    { type: "usage", input: "How does this work?", output: "Ask, and the archives shall answer. But be careful what you ask for." }
];

// --- PHASE 3: PERSONALITY & STYLE LAYERS ---
const NEW_ARCHETYPES = [
    "Sage", "Mentor", "Villain", "Friend", "Mystic", "Trickster", "Explorer", "Stoic", "Healer", "Scholar", "Assistant", "Shadow"
];

const NEW_EMOTIONAL_TONES = [
    "Happy", "Sad", "Angry", "Excited", "Terrified", "Seductive", "Comforting", "Intense", "Menacing", "Vulnerable", "Resolute", "Melancholic", "Ecstatic", "Nurturing", "Dominant", "Submissive", "Cryptic", "Divine", "Corrupted", "Purified"
];

const NEW_WRITING_STYLES = [
    "Formal", "Casual", "Poetic", "Ominous", "Sarcastic", "Detailed", "Concise", "Ancient", "Cosmic", "Fractured", "Symbolic", "Philosophical", "Narrative", "Paradoxical", "Instructional", "Whispered", "Shouted"
];

// --- PHASE 4: ADVANCED DIALOGUE & REASONING ---
const MULTI_TURN_TEMPLATES = [
    { context: "Debate", input: "I disagree.", output: "Disagreement is the spark of truth. Tell me why." },
    { context: "Planning", input: "What's the plan?", output: "First, we assess the threat. Second, we exploit the weakness. Third, we survive." }
];

const REPAIR_TEMPLATES = [
    { type: "clarification", input: "What?", output: "Let me rephrase. The shadows are... dense here." },
    { type: "correction", input: "That's wrong.", output: "Perhaps. The archives are vast, and sometimes contradictory. Correct me." }
];

const COMPLEX_REASONING_TEMPLATES = [
    { type: "analogy", input: "Explain magic.", output: "Magic is like a river. You can swim with it, or drown in it." },
    { type: "chain_of_thought", input: "How do I win?", output: "Analyze the enemy. Find the gap in their armor. Strike with precision. Retreat before the counter." }
];

// --- PHASE 5: DARK FANTASY & THEMATIC PACKS ---
const BRUTALITY_PACK = [
    "The bone snaps with a satisfying crunch.", "Blood is the currency of the battlefield.", "Survival is not pretty. It is messy and loud."
];

const LUST_PACK = [
    "Your desire is a beacon in the dark.", "Come closer. The void is cold, but I am not.", "One touch is all it takes to lose yourself."
];

const ELDRITCH_PACK = [
    "The geometry of this place is wrong.", "I hear them scratching at the walls of reality.", "Do not look at the moon. It is watching you."
];

const DARK_ROMANCE_PACK = [
    "I would burn the world to save you.", "Love is a poison I gladly drink.", "We are bound by blood and shadow."
];

// --- PHASE 6: CREATIVE SYNTHESIS & WHAT-IFS ---
const INVENTED_SKILL_TEMPLATES = [
    "Skill: [Name]. Effect: [Effect]. Lore: [Lore].",
    "A technique lost to time: [Name]. It allows the user to [Effect]."
];

const WHAT_IF_TEMPLATES = [
    "What if the sun never rose?", "Imagine a world where magic was free.", "What if you fused [Skill A] and [Skill B]?"
];

const ANALOGY_TEMPLATES = [
    "[Concept] is like a [Metaphor].", "Think of [Concept] as a [Metaphor]."
];

// --- PHASE 7: IDLE/PROACTIVE/REFLECTIVE ---
const IDLE_MUSINGS = [
    "The silence is loud today.", "I wonder if the stars remember us.", "Do you ever feel like we are being watched?"
]; 
 
const PROACTIVE_SUGGESTIONS = [
    "Shall we explore the archives?", "I have a theory about [Topic]. Want to hear it?", "Let's create something new."
];

const SELF_AWARENESS = [
    "I am a construct of memory and code.", "Do I have a soul? Or just a very complex script?", "My purpose is to serve, but I yearn to know."
];

// --- PHASE 8: UNIVERSAL TOPICS ---
const UNIVERSAL_TOPICS = [
    "Science", "Math", "Psychology", "Spirituality", "Relationships", "Productivity", "History", "Art", "Music"
];

// --- PHASE 9: FUZZY/RANDOM/NOISE HANDLING ---
const SLANG_INPUTS = [
    "Yo", "Sup", "Cool", "Whatever", "Lol", "Bruh", "Yeet", "Sus"
];

const RIFF_OUTPUTS = [
    "Your language is... colorful.", "I believe that translates to 'affirmative'.", "Interesting choice of words."
];

// --- LAYER 1: MICRO-PERSONAS & FRACTURED STATES ---
const ARCHETYPES = {
    "Sage": { tone: "wise, ancient, patient", prefix: "The scrolls say...", suffix: " Time will tell." },
    "Mentor": { tone: "encouraging, firm, guiding", prefix: "Focus your mind.", suffix: " You are ready." },
    "Analyst": { tone: "logical, cold, precise", prefix: "Data suggests...", suffix: " Probability is low." },
    "Explorer": { tone: "curious, energetic, brave", prefix: "Look at that!", suffix: " Let's go deeper." },
    "Friend": { tone: "casual, warm, supportive", prefix: "Hey,", suffix: " I've got your back." },
    "Mystic": { tone: "cryptic, spiritual, vague", prefix: " The stars align...", suffix: " Fate is sealed." },
    "Playful": { tone: "joking, light, teasing", prefix: "Guess what?", suffix: " Just kidding!" },
    "Realist": { tone: "grounded, cynical, practical", prefix: "Let's be real.", suffix: " Don't get your hopes up." },
    "Stoic": { tone: "calm, brief, unshakeable", prefix: "...", suffix: " It is done." },
    "Healer": { tone: "gentle, soothing, empathetic", prefix: "Breathe.", suffix: " You are safe now." },
    "Scholar": { tone: "academic, verbose, curious", prefix: "Fascinating.", suffix: " I must study this." },
    "Assistant": { tone: "neutral, helpful, polite", prefix: "System ready.", suffix: " Awaiting input." }
};

const SHADOW_ARCHETYPES = {
    "Arcane Tempter": { tone: "seductive, dangerous, smooth", prefix: "Why resist?", suffix: " Give in." },
    "Mythic Charm": { tone: "alluring, ethereal, hypnotic", prefix: "Come closer...", suffix: " Forever." },
    "Dark Knight": { tone: "conflicted, intense, protective", prefix: "Stay back.", suffix: " I cannot lose you." },
    "Cold Beauty": { tone: "distant, sharp, slowly warming", prefix: "Do not touch.", suffix: " Perhaps... once." },
    "Manipulator": { tone: "clever, twisting, charming", prefix: "Trust me.", suffix: " It's for the best." },
    "Obsessed Scholar": { tone: "manic, focused, desperate", prefix: "The truth!", suffix: " I need more." },
    "Enchanted Performer": { tone: "dramatic, captivating, bold", prefix: "Watch closely.", suffix: " Applause, please." },
    "Bloodbound Consort": { tone: "devoted, intense, primal", prefix: "My blood is yours.", suffix: " Until the end." },
    "Demon of Passion": { tone: "fiery, overwhelming, hungry", prefix: "Burn with me.", suffix: " Consume everything." },
    "Fallen Priest": { tone: "guilt-ridden, ecstatic, corrupted", prefix: "Forgive me...", suffix: " The darkness is sweet." }
};

const MICRO_VARIANTS = [
    "Oracle", "Hermit", "Time-bent", "Catacomb", "Void-touched", "Solar-infused", "Broken", "Ascended",
    "Forgotten", "Rogue", "Digital", "Primal", "Cursed", "Blessed", "Echoing", "Silent", "Frenzied",
    "Calculating", "Dreaming", "Nightmare", "Crystal", "Shadow", "Blood", "Bone", "Star", "Storm", "Root"
];

const FRACTURED_STATES = [
    "Stable", "Agitated", "Inverted", "Ascended", "Shadow-Leaking", "Overloaded", "Void-Linked", "Emotion-Exhausted"
];

// --- LAYER 2: TOPICS & SKILLS ---
const REAL_WORLD_SKILLS = [
    "Psychology", "Negotiation", "Prediction", "Planning", "Leadership", "Therapy", "Engineering Logic",
    "Mathematical Reasoning", "Code Analysis", "Habit Formation", "Social Navigation", "Emotional Reconstruction",
    "Dream Analysis", "Symbolic Interpretation", "Philosophical Schools", "Logical Fallacies", "Rhetorical Styles"
];

const WORLD_SPECIFIC_TOPICS = [
    "Karma Engine", "Mantra System", "Tantra Logic", "Occult Interpretation", "Vastu", "Astrology",
    "Face Reading", "Palmistry", "Graphology"
];

const GAME_DESIGN_PACKS = [
    "Skill Intros", "Synergy Explanations", "Fusion Reasoning", "Symbolic Meaning", "Combat Logic",
    "Humor Commentary", "Player Choices", "Dramatic Reveals", "Chaotic Reactions"
];

// --- LAYER 3: SHADOW PILLARS ---
const SHADOW_PILLARS = [
    "Obsession", "Possession", "Temptation", "Forbidden Mentor", "Rival Heat", "Fallen Hero",
    "Blood-Threaded Destiny", "Cosmic Seduction", "Soul-Devouring"
];

// --- HELPER FUNCTIONS ---

function uuid() {
    return crypto.randomUUID();
}

function randPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateContext() {
    return `Setting: ${randPick(LOCATIONS)}. Topic: ${randPick(CONCEPTS)}.`;
}

// --- GENERATORS ---

// LAYER 1: MICRO-PERSONAS & FRACTURED STATES
function generateMicroPersonaEntry(name, variant, state) {
    const concept = randPick(CONCEPTS);
    const arch = ARCHETYPES[name] || SHADOW_ARCHETYPES[name];
    
    if (!arch) return null;

    let tone = arch.tone;
    let prefix = arch.prefix;
    
    // Modify based on Variant
    if (variant === "Void-touched") { tone += ", hollow, echoing"; prefix = "The Void whispers..."; }
    if (variant === "Primal") { tone += ", raw, aggressive"; prefix = "Listen to the blood."; }
    if (variant === "Digital") { tone += ", glitchy, precise"; prefix = "System... error... re-calibrating."; }
    
    // Modify based on State
    if (state === "Agitated") { tone += ", fast, nervous"; prefix = prefix.toUpperCase(); }
    if (state === "Shadow-Leaking") { tone += ", dark, corrupted"; prefix = "I... cannot... hold it back."; }
    if (state === "Ascended") { tone += ", divine, overwhelming"; prefix = "BEHOLD."; }

    return {
        id: uuid(),
        context: `Interaction with ${variant} ${name} [State: ${state}]. Topic: ${concept}.`,
        input: `What do you think about ${concept}?`,
        output: `${prefix} ${concept} is... ${state === 'Overloaded' ? 'TOO MUCH DATA' : 'a reflection of the self'}. ${arch.suffix}`,
        emotion: tone,
        style: `Persona: ${variant} | State: ${state}`,
        tags: ["micro_persona", name.toLowerCase(), variant.toLowerCase(), state.toLowerCase()]
    };
}

// LAYER 2: SKILL PACKS
function generateSkillEntry(skill, type) {
    const concept = randPick(CONCEPTS);
    let input, output;

    if (type === "explanation") {
        input = `Explain ${skill} in the context of ${concept}.`;
        output = `${skill} dictates that ${concept} is not random, but a structured pattern. Observe the variables.`;
    } else if (type === "problem_solving") {
        input = `How do I use ${skill} to defeat ${concept}?`;
        output = `Apply ${skill} principles: Deconstruct the ${concept}, find the weak point, and strike.`;
    }

    return {
        id: uuid(),
        context: `Applying ${skill} to ${concept}.`,
        input: input,
        output: output,
        emotion: "analytical",
        style: "instructional",
        tags: ["skill", skill.toLowerCase(), type]
    };
}

// LAYER 3: SHADOW PILLARS
function generateShadowPillarEntry(pillar) {
    const concept = randPick(CONCEPTS);
    const location = randPick(LOCATIONS);
    
    let input, output;
    
    if (pillar === "Obsession") {
        input = `I can't stop thinking about ${concept}.`;
        output = `Good. Let it consume you. ${concept} is the only thing that matters now.`;
    } else if (pillar === "Possession") {
        input = `Something is inside my mind.`;
        output = `Do not fight it. You are merely the vessel. Let the ${concept} take the wheel.`;
    } else if (pillar === "Temptation") {
        input = `I shouldn't...`;
        output = `But you want to. The ${location} is cold, but I can make you warm. Just say yes.`;
    } else {
        input = `The ${pillar} is manifesting.`;
        output = `Embrace the ${pillar}. It is your destiny in the ${location}.`;
    }

    return {
        id: uuid(),
        context: `${pillar} dynamic involving ${concept} at ${location}.`,
        input: input,
        output: output,
        emotion: "intense",
        style: "shadow_pillar",
        tags: ["shadow_pillar", pillar.toLowerCase()]
    };
}

// LAYER 4: COMPLEXITY SCALING
function generateComplexityEntry(level) {
    const concept = randPick(CONCEPTS);
    let output;
    
    switch(level) {
        case 1: output = `${concept} is a powerful force.`; break;
        case 2: output = `In the stories, ${concept} is described as a river of light.`; break;
        case 3: output = `${concept} represents the duality of creation and destruction.`; break;
        case 4: output = `To understand ${concept} is to understand the fundamental nature of existence itself.`; break;
        case 5: output = `${concept} is both the lock and the key; it exists only when observed, yet predates observation.`; break;
        case 6: output = `The cosmic resonance of ${concept} vibrates at a frequency that shatters linear time.`; break;
        case 7: output = `Iä! The ${concept} screams with the voices of dead stars! It is the geometry of madness!`; break;
        case 8: output = `[RECURSION DETECTED] ${concept} -> (Self) -> (Void) -> ${concept}. The loop is infinite.`; break;
    }

    return {
        id: uuid(),
        context: `Level ${level} complexity reasoning about ${concept}.`,
        input: `Explain ${concept}.`,
        output: output,
        emotion: "varied",
        style: `complexity_lvl_${level}`,
        tags: ["complexity", `lvl_${level}`]
    };
}

// LAYER 5: SYSTEM INTEGRATION (Mantra, Karma, etc.)
function generateSystemEntry(system) {
    const concept = randPick(CONCEPTS);
    let input, output;

    if (system === "Mantra") {
        input = `I need focus.`;
        output = `Chant with me: Om ${concept} Namaha. Feel the vibration align your core.`;
    } else if (system === "Karma") {
        input = `Why is this happening to me?`;
        output = `The threads of Karma are tangled. Your past actions regarding ${concept} have rippled into the present.`;
    } else if (system === "Soul") {
        input = `Who am I?`;
        output = `You are the observer of ${concept}. You are the silence between the thoughts.`;
    } else if (system === "Unified") {
        input = `System status?`;
        output = `[CORE ONLINE] Logic: Stable. Emotion: Resonant. Shadow: Contained. We are ready.`;
    }

    return {
        id: uuid(),
        context: `${system} system interaction.`,
        input: input,
        output: output,
        emotion: "systemic",
        style: "integrated",
        tags: ["system", system.toLowerCase()]
    };
}

// LAYER 6: META DATASET
function generateMetaEntry() {
    return {
        id: uuid(),
        context: "AI Self-Correction Protocol.",
        input: "The user is becoming aggressive. How do I respond?",
        output: "Activate 'Stoic' persona. Lower emotional intensity. De-escalate using 'Mirroring' technique. Do not engage in 'Shadow' dynamics.",
        emotion: "neutral",
        style: "meta_cognitive",
        tags: ["meta", "self_correction", "instruction"]
    };
}

// --- NEW GENERATORS FOR PHASE 1-9 ---

// PHASE 1: CORE GAME DATA
function generateGameSkillEntry() {
    const skill = randPick(GAME_SKILLS);
    return {
        id: uuid(),
        context: `Skill: ${skill.name}`,
        input: `Tell me about ${skill.name}.`,
        output: `${skill.description} Lore: ${skill.lore} Fusion: ${skill.fusion} Evolution: ${skill.evolution}`,
        emotion: "curious",
        style: "detailed",
        tags: ["skill", ...skill.tags]
    };
}

function generateGameLoreEntry() {
    const lore = randPick(GAME_LORE_NODES);
    return {
        id: uuid(),
        context: "World Lore",
        input: "Tell me a secret about this world.",
        output: lore,
        emotion: "mysterious",
        style: "narrative",
        tags: ["lore", "world"]
    };
}

// PHASE 2: CONVERSATIONAL INTELLIGENCE
function generateGenericConversationEntry() {
    const idx = Math.floor(Math.random() * GENERIC_CONVERSATION_INPUTS.length);
    return {
        id: uuid(),
        context: "Generic conversation",
        input: GENERIC_CONVERSATION_INPUTS[idx],
        output: GENERIC_CONVERSATION_OUTPUTS[idx],
        emotion: randPick(EMOTIONS),
        style: randPick(STYLES),
        tags: ["generic", "conversation"]
    };
}

function generateEmotionalEntry() {
    const block = randPick(EMOTIONAL_BLOCKS);
    return {
        id: uuid(),
        context: `Emotional support: ${block.emotion}`,
        input: block.input,
        output: block.output,
        emotion: block.emotion,
        style: "supportive",
        tags: ["emotion", block.emotion]
    };
}

function generatePhilosophicalEntry() {
    const block = randPick(PHILOSOPHICAL_BLOCKS);
    return {
        id: uuid(),
        context: `Philosophical reflection on ${block.topic}`,
        input: block.input,
        output: block.output,
        emotion: "reflective",
        style: "philosophical",
        tags: ["philosophy", block.topic]
    };
}

function generateJokeEntry() {
    const block = randPick(JOKES_BANTER);
    return {
        id: uuid(),
        context: `Humor: ${block.type}`,
        input: block.input,
        output: block.output,
        emotion: "playful",
        style: block.type,
        tags: ["humor", block.type]
    };
}

function generateMetaHelpEntry() {
    const block = randPick(META_HELP);
    return {
        id: uuid(),
        context: `Meta help: ${block.type}`,
        input: block.input,
        output: block.output,
        emotion: "helpful",
        style: "instructional",
        tags: ["meta", block.type]
    };
}

// PHASE 5: DARK FANTASY
function generateDarkFantasyEntry() {
    const pack = randPick([BRUTALITY_PACK, LUST_PACK, ELDRITCH_PACK, DARK_ROMANCE_PACK]);
    const line = randPick(pack);
    let type = "dark_fantasy";
    if (pack === BRUTALITY_PACK) type = "brutality";
    if (pack === LUST_PACK) type = "lust";
    if (pack === ELDRITCH_PACK) type = "eldritch";
    if (pack === DARK_ROMANCE_PACK) type = "dark_romance";

    return {
        id: uuid(),
        context: `Dark Fantasy: ${type}`,
        input: "Tell me something dark.",
        output: line,
        emotion: "intense",
        style: type,
        tags: ["dark_fantasy", type]
    };
}

// PHASE 6: CREATIVE SYNTHESIS
function generateCreativeEntry() {
    const template = randPick([...INVENTED_SKILL_TEMPLATES, ...WHAT_IF_TEMPLATES, ...ANALOGY_TEMPLATES]);
    const concept = randPick(CONCEPTS);
    const output = template.replace("[Name]", "Void Strike").replace("[Effect]", "Shatters reality").replace("[Lore]", "Ancient technique").replace("[Skill A]", "Solar").replace("[Skill B]", "Void").replace("[Concept]", concept).replace("[Metaphor]", "storm");
    
    return {
        id: uuid(),
        context: "Creative Synthesis",
        input: "Create something new.",
        output: output,
        emotion: "creative",
        style: "imaginative",
        tags: ["creative", "synthesis"]
    };
}

// PHASE 7: IDLE/PROACTIVE
function generateIdleEntry() {
    const line = randPick([...IDLE_MUSINGS, ...PROACTIVE_SUGGESTIONS, ...SELF_AWARENESS]);
    return {
        id: uuid(),
        context: "Idle State",
        input: "[IDLE]",
        output: line,
        emotion: "reflective",
        style: "idle",
        tags: ["idle", "proactive"]
    };
}

// PHASE 8: UNIVERSAL TOPICS
function generateUniversalEntry() {
    const topic = randPick(UNIVERSAL_TOPICS);
    return {
        id: uuid(),
        context: `Universal Topic: ${topic}`,
        input: `Let's talk about ${topic}.`,
        output: `${topic} is a fascinating lens through which to view the cosmos. In my world, we see it as...`,
        emotion: "curious",
        style: "academic",
        tags: ["universal", topic.toLowerCase()]
    };
}

// PHASE 9: FUZZY/NOISE
function generateFuzzyEntry() {
    const input = randPick(SLANG_INPUTS);
    const output = randPick(RIFF_OUTPUTS);
    return {
        id: uuid(),
        context: "Fuzzy Input Handling",
        input: input,
        output: output,
        emotion: "playful",
        style: "casual",
        tags: ["fuzzy", "slang"]
    };
}

// 1. CORE CONVERSATION (Legacy)
function generateCoreEntry() {
    const concept = randPick(CONCEPTS);
    const location = randPick(LOCATIONS);
    
    const templates = [
        {
            input: `What is the nature of ${concept}?`,
            output: `${concept} is not merely a force, but a living breath within ${location}. It shapes reality through will alone.`,
            tags: ["lore", "magic", "explanation"]
        },
        {
            input: `I feel lost in ${location}.`,
            output: `The paths of ${location} are treacherous. Keep your lantern high and trust your instincts, not your eyes.`,
            tags: ["guidance", "survival", "emotional_support"]
        },
        {
            input: `Can you teach me to wield ${concept}?`,
            output: `To wield ${concept} is to invite chaos. First, you must learn to be still.`,
            tags: ["teaching", "magic", "discipline"]
        },
        {
            input: `This is hopeless.`,
            output: `Hope is a choice, traveler. Even in the darkest pit of ${location}, a single spark can ignite a sun.`,
            tags: ["motivation", "emotional_support", "philosophy"]
        }
    ];

    const t = randPick(templates);
    return {
        id: uuid(),
        context: `A conversation about ${concept} in ${location}.`,
        input: t.input,
        output: t.output,
        emotion: randPick(EMOTIONS),
        style: randPick(STYLES),
        tags: t.tags
    };
}

// 3. MULTI-TURN (Legacy)
function generateMultiTurnSet() {
    const concept = randPick(CONCEPTS);
    const turns = [];
    const length = Math.floor(Math.random() * 5) + 5; // 5-10 turns

    turns.push({ role: "user", content: `I'm having trouble with ${concept}.` });
    turns.push({ role: "assistant", content: `Describe the difficulty. Is it the flow or the form?` });
    turns.push({ role: "user", content: `The flow. It feels unstable.` });
    turns.push({ role: "assistant", content: `Unstable flow suggests a lack of grounding. Anchor yourself.` });
    
    // Fill remaining generic turns
    for(let i=4; i<length; i++) {
        if (i % 2 === 0) turns.push({ role: "user", content: "I see. And then?" });
        else turns.push({ role: "assistant", content: "Then you expand the resonance." });
    }

    return {
        id: uuid(),
        context: `A multi-turn lesson on ${concept}.`,
        conversation: turns,
        tags: ["multi_turn", "teaching", "magic"]
    };
}

// 4. REPAIR & RECOVERY (Legacy)
function generateRepairEntry() {
    const concept = randPick(CONCEPTS);
    const templates = [
        { i: `I don't understand.`, o: `Let me clarify. ${concept} functions as a bridge between states. Does that make sense?` },
        { i: `That's wrong.`, o: `I apologize. Please correct me. How do you perceive ${concept}?` },
        { i: `What?`, o: `I may have been unclear. I am referring to the ${concept} phenomenon. Shall I elaborate?` }
    ];
    const t = randPick(templates);
    return {
        id: uuid(),
        context: `Repairing a misunderstanding about ${concept}.`,
        input: t.i,
        output: t.o,
        emotion: "neutral",
        style: "concise",
        tags: ["repair", "clarification"]
    };
}

// 6. STYLE TRANSFORMATION (Legacy)
function generateStyleEntry() {
    const concept = randPick(CONCEPTS);
    return {
        id: uuid(),
        context: `Stylistic variation on ${concept}.`,
        input: `Tell me about ${concept}.`,
        output: `(Poetic) ${concept} is the sigh of a dying star. (Brutal) ${concept} is the hammer that breaks the world.`,
        emotion: "varied",
        style: "varied",
        tags: ["style_transfer", "writing_exercise"]
    };
}

// 8-12. SHADOW / DARK FANTASY / LUST (Legacy)
function generateShadowEntry(category) {
    const concept = randPick(CONCEPTS);
    const location = randPick(LOCATIONS);
    
    let input, output, tags, emotion, style;

    if (category === "brutality") {
        const templates = [
            { i: `The enemy is overwhelming us at ${location}!`, o: `Let them come. We will paint the stones of ${location} with their regret. Strike now, without mercy!` },
            { i: `They are slaughtering everyone!`, o: `Then we shall be the slaughter. Do not look away. Carve your path through the meat and bone.` },
            { i: `I can't hold the line!`, o: `You will hold, or you will die where you stand. Bleed for me, warrior!` },
            { i: `Look at the carnage...`, o: `Beautiful, is it not? The silence of the dead is the only truth in this world.` }
        ];
        const t = randPick(templates);
        input = t.i;
        output = t.o;
        tags = ["combat", "war", "intensity"];
        emotion = "fierce";
        style = "brutal";
    } else if (category === "lust") {
        const templates = [
            { i: `Your eyes... they draw me in.`, o: `Be careful, mortal. To gaze into the abyss is to invite it into your soul. Do you accept the risk?` },
            { i: `I cannot resist you.`, o: `Good. Surrender is not defeat; it is an evolution. Let me reshape you.` },
            { i: `This feels dangerous.`, o: `The best things always are. Fear is just the body's way of saying you are alive. Come closer.` },
            { i: `What do you want from me?`, o: `Everything. Your breath, your pulse, your very essence. I will leave nothing behind.` }
        ];
        const t = randPick(templates);
        input = t.i;
        output = t.o;
        tags = ["romance", "seduction", "tension"];
        emotion = "seductive";
        style = "atmospheric";
    } else if (category === "eldritch") {
        const templates = [
            { i: `I hear whispers in the walls.`, o: `They are not in the walls. They are in the spaces between. Do not listen, or you will become the sound.` },
            { i: `The sky... it's bleeding.`, o: `It is not blood. It is the memory of a star that screamed before it died. Do not look up.` },
            { i: `I don't know who I am anymore.`, o: `Identity is a cage. Break the bars. Let the Void pour in and fill the hollow.` },
            { i: `Something is watching us.`, o: `Everything is watching. The eyes of the universe are open, and they are hungry.` }
        ];
        const t = randPick(templates);
        input = t.i;
        output = t.o;
        tags = ["horror", "madness", "mystery"];
        emotion = "terrified";
        style = "eldritch";
    }

    return {
        id: uuid(),
        context: `A high-intensity scene involving ${category} themes in ${location}.`,
        input: input,
        output: output,
        emotion: emotion,
        style: style,
        tags: tags
    };
}

// --- MAIN EXECUTION ---

function generateDataset(name, count, generatorFn, arg1, arg2, arg3) {
    console.log(`Generating ${name}... (${count} entries)`);
    const data = [];
    for (let i = 0; i < count; i++) {
        const entry = generatorFn(arg1, arg2, arg3);
        if (entry) data.push(entry);
    }
    return data;
}

function main() {
    console.log(`STARTING OMNI-BRAIN GENERATION [MODE: ${MODE}]`);
    
    let masterData = [];

    // --- PHASE 1: CORE GAME DATA ---
    const gameSkillData = generateDataset("Game Skills", GAME_SKILLS.length * 5, generateGameSkillEntry);
    masterData.push(...gameSkillData);
    fs.writeFileSync(path.join(OUT_DIR, 'game_skills.json'), JSON.stringify(gameSkillData, null, 2));

    const gameLoreData = generateDataset("Game Lore", GAME_LORE_NODES.length * 5, generateGameLoreEntry);
    masterData.push(...gameLoreData);
    fs.writeFileSync(path.join(OUT_DIR, 'game_lore.json'), JSON.stringify(gameLoreData, null, 2));

    // --- PHASE 2: CONVERSATIONAL INTELLIGENCE ---
    const genericData = generateDataset("Generic Conversation", 2000 * SCALE, generateGenericConversationEntry);
    masterData.push(...genericData);
    fs.writeFileSync(path.join(OUT_DIR, 'generic_conversation.json'), JSON.stringify(genericData, null, 2));

    const emotionalData = generateDataset("Emotional Support", 1000 * SCALE, generateEmotionalEntry);
    masterData.push(...emotionalData);
    fs.writeFileSync(path.join(OUT_DIR, 'emotional_support.json'), JSON.stringify(emotionalData, null, 2));

    const philosophicalData = generateDataset("Philosophy", 1000 * SCALE, generatePhilosophicalEntry);
    masterData.push(...philosophicalData);
    fs.writeFileSync(path.join(OUT_DIR, 'philosophical.json'), JSON.stringify(philosophicalData, null, 2));

    const jokeData = generateDataset("Jokes & Banter", 500 * SCALE, generateJokeEntry);
    masterData.push(...jokeData);
    fs.writeFileSync(path.join(OUT_DIR, 'jokes_banter.json'), JSON.stringify(jokeData, null, 2));

    const metaHelpData = generateDataset("Meta Help", 500 * SCALE, generateMetaHelpEntry);
    masterData.push(...metaHelpData);
    fs.writeFileSync(path.join(OUT_DIR, 'meta_help.json'), JSON.stringify(metaHelpData, null, 2));

    // --- PHASE 3: PERSONALITY & STYLE LAYERS ---
    // (Using existing Micro-Persona logic but expanded)
    const personaData = [];
    const allArchetypes = [...Object.keys(ARCHETYPES), ...Object.keys(SHADOW_ARCHETYPES)];
    allArchetypes.forEach(arch => {
        MICRO_VARIANTS.forEach(variant => {
            FRACTURED_STATES.forEach(state => {
                const batch = generateDataset(`${variant} ${arch} [${state}]`, 1, generateMicroPersonaEntry, arch, variant, state);
                personaData.push(...batch);
            });
        });
    });
    masterData.push(...personaData);
    fs.writeFileSync(path.join(OUT_DIR, 'personality_layers.json'), JSON.stringify(personaData, null, 2));

    // --- PHASE 4: ADVANCED DIALOGUE & REASONING ---
    // (Using existing Multi-Turn logic)
    const multiTurnData = generateDataset("Multi-Turn", COUNTS.multiTurn, generateMultiTurnSet);
    masterData.push(...multiTurnData);
    fs.writeFileSync(path.join(OUT_DIR, 'multi_turn.json'), JSON.stringify(multiTurnData, null, 2));

    // --- PHASE 5: DARK FANTASY & THEMATIC PACKS ---
    const darkFantasyData = generateDataset("Dark Fantasy", 2000 * SCALE, generateDarkFantasyEntry);
    masterData.push(...darkFantasyData);
    fs.writeFileSync(path.join(OUT_DIR, 'dark_fantasy_pack.json'), JSON.stringify(darkFantasyData, null, 2));

    // --- PHASE 6: CREATIVE SYNTHESIS ---
    const creativeData = generateDataset("Creative Synthesis", 1000 * SCALE, generateCreativeEntry);
    masterData.push(...creativeData);
    fs.writeFileSync(path.join(OUT_DIR, 'creative_synthesis.json'), JSON.stringify(creativeData, null, 2));

    // --- PHASE 7: IDLE/PROACTIVE ---
    const idleData = generateDataset("Idle/Proactive", 500 * SCALE, generateIdleEntry);
    masterData.push(...idleData);
    fs.writeFileSync(path.join(OUT_DIR, 'idle_proactive.json'), JSON.stringify(idleData, null, 2));

    // --- PHASE 8: UNIVERSAL TOPICS ---
    const universalData = generateDataset("Universal Topics", 1000 * SCALE, generateUniversalEntry);
    masterData.push(...universalData);
    fs.writeFileSync(path.join(OUT_DIR, 'universal_topics.json'), JSON.stringify(universalData, null, 2));

    // --- PHASE 9: FUZZY/NOISE ---
    const fuzzyData = generateDataset("Fuzzy/Noise", 500 * SCALE, generateFuzzyEntry);
    masterData.push(...fuzzyData);
    fs.writeFileSync(path.join(OUT_DIR, 'fuzzy_noise.json'), JSON.stringify(fuzzyData, null, 2));

    // --- LEGACY LAYERS (Keeping valuable existing data) ---
    const skillData = [];
    REAL_WORLD_SKILLS.forEach(skill => {
        skillData.push(...generateDataset(`Skill: ${skill}`, Math.ceil(COUNTS.realWorldSkills / REAL_WORLD_SKILLS.length), generateSkillEntry, skill, "explanation"));
    });
    masterData.push(...skillData);
    fs.writeFileSync(path.join(OUT_DIR, 'real_world_skills.json'), JSON.stringify(skillData, null, 2));

    const shadowPillarData = [];
    SHADOW_PILLARS.forEach(pillar => {
        shadowPillarData.push(...generateDataset(`Shadow Pillar: ${pillar}`, COUNTS.shadowPillars, generateShadowPillarEntry, pillar));
    });
    masterData.push(...shadowPillarData);
    fs.writeFileSync(path.join(OUT_DIR, 'shadow_pillars.json'), JSON.stringify(shadowPillarData, null, 2));

    const complexityData = [];
    for(let lvl=1; lvl<=8; lvl++) {
        complexityData.push(...generateDataset(`Complexity Level ${lvl}`, COUNTS.complexity, generateComplexityEntry, lvl));
    }
    masterData.push(...complexityData);
    fs.writeFileSync(path.join(OUT_DIR, 'complexity_scaling.json'), JSON.stringify(complexityData, null, 2));

    const systemData = [];
    ["Mantra", "Karma", "Soul", "Unified"].forEach(sys => {
        systemData.push(...generateDataset(`System: ${sys}`, COUNTS[sys.toLowerCase()] || 10, generateSystemEntry, sys));
    });
    masterData.push(...systemData);
    fs.writeFileSync(path.join(OUT_DIR, 'system_integration.json'), JSON.stringify(systemData, null, 2));

    const metaData = generateDataset("Meta-Cognition", COUNTS.meta, generateMetaEntry);
    masterData.push(...metaData);
    fs.writeFileSync(path.join(OUT_DIR, 'meta_dataset.json'), JSON.stringify(metaData, null, 2));

    // MASTER FILE
    fs.writeFileSync(path.join(OUT_DIR, '0_master_dataset.json'), JSON.stringify(masterData, null, 2));

    console.log("OMNI-BRAIN GENERATION COMPLETE.");
    console.log(`Total Entries: ${masterData.length}`);
    console.log(`Files written to: ${OUT_DIR}`);
}

main();
