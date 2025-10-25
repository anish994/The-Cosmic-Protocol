// === FUSION NAMING ENGINE - LOCAL SEMANTIC SYSTEM ===
// Generates unique, thematic names for fused skills without external APIs

// === WORD ROOT DATABASE ===
const WORD_ROOTS = {
    // Foundational concepts
    structure: ["Lattice", "Framework", "Matrix", "Grid", "Scaffold", "Foundation", "Pillar", "Anchor"],
    foundation: ["Core", "Base", "Root", "Bedrock", "Cornerstone"],
    support: ["Aid", "Bolster", "Sustain", "Uphold", "Reinforce"],
    
    // Consciousness concepts
    mind: ["Psyche", "Thought", "Mental", "Consciousness", "Awareness", "Intellect"],
    field: ["Aura", "Domain", "Sphere", "Zone", "Influence", "Presence"],
    awareness: ["Insight", "Vision", "Perception", "Clarity"],
    
    // Singularity concepts
    threshold: ["Edge", "Limit", "Apex", "Breaking", "Critical", "Peak", "Cusp"],
    finisher: ["Finale", "Closure", "Culmination", "Terminus", "Omega"],
    chain: ["Cascade", "Domino", "Ripple", "Chain", "Sequence"],
    
    // Therapeutic concepts
    heal: ["Renewal", "Restoration", "Vitality", "Life", "Regeneration", "Recovery"],
    sanctuary: ["Haven", "Refuge", "Sanctum", "Shelter", "Bastion"],
    cleanse: ["Purify", "Cleanse", "Absolve", "Remedy", "Cure"],
    
    // Tantra concepts
    flow: ["Current", "Stream", "Flux", "Wave", "Tide", "Pulse"],
    energy: ["Force", "Power", "Essence", "Vigor", "Dynamism"],
    weave: ["Weave", "Braid", "Interlace", "Tapestry", "Pattern"],
    
    // Divination concepts
    foresight: ["Vision", "Oracle", "Prophecy", "Augury", "Omen"],
    insight: ["Revelation", "Epiphany", "Glimpse", "Intuition"],
    fate: ["Destiny", "Fortune", "Kismet", "Wyrd"],
    
    // Character Analysis concepts
    analyze: ["Study", "Scan", "Read", "Discern", "Probe"],
    adapt: ["Shift", "Morph", "Transform", "Adjust", "Evolve"],
    persona: ["Mask", "Face", "Guise", "Aspect", "Identity"],
    
    // Invocation concepts
    divine: ["Sacred", "Holy", "Blessed", "Hallowed", "Divine"],
    invoke: ["Summon", "Call", "Channel", "Manifest", "Evoke"],
    blessing: ["Boon", "Grace", "Favor", "Gift", "Benediction"]
};

// === CONCEPT COMBINATIONS ===
const BLEND_PATTERNS = {
    // Same concept amplification
    "structure-structure": ["Mega", "Super", "Hyper", "Ultra"],
    "mind-mind": ["Deep", "True", "Pure", "Perfect"],
    "heal-heal": ["Greater", "Master", "Supreme", "Ultimate"],
    
    // Cross-concept blending
    "structure-mind": ["Thoughtform", "Psychic Framework", "Mental Lattice", "Consciousness Grid"],
    "structure-field": ["Domain Anchor", "Zonal Matrix", "Sphere Framework", "Aura Lattice"],
    "threshold-heal": ["Renewal Edge", "Life Limit", "Vital Breaking", "Restoration Peak"],
    "threshold-flow": ["Cascade Edge", "Surge Limit", "Torrent Peak", "Critical Stream"],
    "mind-field": ["Psychic Domain", "Thought Sphere", "Mental Aura", "Consciousness Zone"],
    "heal-flow": ["Vital Current", "Life Stream", "Renewal Wave", "Restoration Tide"],
    "analyze-adapt": ["Morphic Study", "Shifting Insight", "Evolutionary Scan", "Adaptive Discernment"],
    "divine-blessing": ["Sacred Grace", "Holy Boon", "Blessed Gift", "Hallowed Favor"],
    "energy-weave": ["Force Pattern", "Power Tapestry", "Essence Braid", "Dynamic Weave"]
};

// === STYLE MODIFIERS ===
const STYLE_MODIFIERS = {
    high_synergy: ["Resonant", "Harmonic", "Perfect", "True", "Pure", "Unified"],
    mid_synergy: ["Balanced", "Tempered", "Measured", "Calibrated"],
    low_synergy: ["Hybrid", "Merged", "Fused", "Combined"],
    same_engine: ["Advanced", "Enhanced", "Evolved", "Refined", "Ascended"],
    cross_engine: ["Convergent", "Synthesis", "Union", "Amalgam"]
};

// === INTENSITY SUFFIXES ===
const INTENSITY_SUFFIXES = {
    tier_0_1: ["Touch", "Whisper", "Glimmer", "Spark"],
    tier_2_3: ["Force", "Power", "Might", "Strike"],
    tier_4_5: ["Supremacy", "Mastery", "Dominion", "Apocalypse"]
};

// === HELPER FUNCTIONS ===

function extractKeywordRoots(keywords) {
    const roots = [];
    keywords.forEach(keyword => {
        const key = keyword.toLowerCase();
        if (WORD_ROOTS[key]) {
            roots.push(key);
        }
    });
    return roots;
}

function findThematicConcept(skill) {
    // Extract primary concept from skill
    const keywords = skill.keywords.map(k => k.toLowerCase());
    
    // Check for known concepts
    for (const concept in WORD_ROOTS) {
        if (keywords.includes(concept)) {
            return concept;
        }
    }
    
    // Fallback to first keyword
    return keywords[0] || "essence";
}

function pickRandomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getEngineStyle(engine) {
    const styles = {
        foundational: ["Anchored", "Rooted", "Grounded", "Solid"],
        consciousness: ["Ethereal", "Astral", "Mental", "Psychic"],
        singularity: ["Critical", "Explosive", "Decisive", "Fatal"],
        therapeutic: ["Gentle", "Flowing", "Soothing", "Nurturing"],
        tantra: ["Cosmic", "Primal", "Vital", "Energetic"],
        divination: ["Prophetic", "Mystic", "Arcane", "Fated"],
        character_analysis: ["Adaptive", "Shifting", "Morphic", "Dynamic"],
        invocation: ["Sacred", "Divine", "Blessed", "Holy"]
    };
    
    return styles[engine] || ["Mystical"];
}

// === MAIN NAMING FUNCTION ===

function generateFusionName(skill1, skill2, synergy) {
    // Extract concepts
    const concept1 = findThematicConcept(skill1);
    const concept2 = findThematicConcept(skill2);
    
    // Check for blend patterns
    const blendKey1 = `${concept1}-${concept2}`;
    const blendKey2 = `${concept2}-${concept1}`;
    
    let baseName = "";
    
    // Try pattern matching
    if (BLEND_PATTERNS[blendKey1]) {
        baseName = pickRandomFrom(BLEND_PATTERNS[blendKey1]);
    } else if (BLEND_PATTERNS[blendKey2]) {
        baseName = pickRandomFrom(BLEND_PATTERNS[blendKey2]);
    } else {
        // Generate from word roots
        const root1 = WORD_ROOTS[concept1] ? pickRandomFrom(WORD_ROOTS[concept1]) : skill1.name.split(' ')[0];
        const root2 = WORD_ROOTS[concept2] ? pickRandomFrom(WORD_ROOTS[concept2]) : skill2.name.split(' ')[0];
        
        // Combine intelligently
        if (Math.random() > 0.5) {
            baseName = `${root1} ${root2}`;
        } else {
            baseName = `${root2} ${root1}`;
        }
    }
    
    // Add style modifier based on synergy and engines
    let modifier = "";
    
    if (synergy >= 80) {
        modifier = pickRandomFrom(STYLE_MODIFIERS.high_synergy);
    } else if (synergy >= 60) {
        modifier = pickRandomFrom(STYLE_MODIFIERS.mid_synergy);
    } else {
        modifier = pickRandomFrom(STYLE_MODIFIERS.low_synergy);
    }
    
    // Check if same engine
    if (skill1.engine === skill2.engine) {
        const engineModifier = pickRandomFrom(STYLE_MODIFIERS.same_engine);
        modifier = Math.random() > 0.5 ? modifier : engineModifier;
    }
    
    // Add intensity suffix for high tier skills
    const avgTier = (skill1.tier + skill2.tier) / 2;
    let suffix = "";
    
    if (avgTier >= 4 && Math.random() > 0.7) {
        suffix = pickRandomFrom(INTENSITY_SUFFIXES.tier_4_5);
        return `${baseName} ${suffix}`;
    }
    
    // Final name
    return `${modifier} ${baseName}`;
}

// === FALLBACK NAMING ===

function generateSimpleName(skill1, skill2) {
    // Ultra-simple fallback
    const word1 = skill1.name.split(' ')[0];
    const word2 = skill2.name.split(' ')[0];
    return `${word1}-${word2} Fusion`;
}

// === EXPORT ===

function createFusionName(skill1, skill2, synergy) {
    try {
        const name = generateFusionName(skill1, skill2, synergy);
        // Ensure we got a valid name
        if (name && name.length > 3) {
            return name;
        }
        return generateSimpleName(skill1, skill2);
    } catch (error) {
        console.error('Fusion naming error:', error);
        return generateSimpleName(skill1, skill2);
    }
}
