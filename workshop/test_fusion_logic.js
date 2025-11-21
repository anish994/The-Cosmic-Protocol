
// Mock NARRATIVE_ENGINE
const NARRATIVE_ENGINE = {
    lexicon: {
        VOID: {
            adj: ["Abyssal", "Null", "Empty", "Hollow", "Eldritch", "Forbidden", "Dark", "Silent"],
            noun: ["Singularity", "Rift", "Collapse", "Whisper", "Entropy", "Vortex", "Omen", "Horror"],
            verb: ["erases", "consumes", "unmakes", "silences", "devours", "warps", "shatters"]
        },
        SOLAR: {
            adj: ["Blazing", "Infernal", "Scorching", "Radiant", "Luminous", "Divine", "Searing"],
            noun: ["Nova", "Inferno", "Cataclysm", "Pyre", "Dawn", "Flare", "Judgment", "Star"],
            verb: ["incinerates", "cauterizes", "engulfs", "illuminates", "purifies", "melts"]
        },
        NATURE: {
            adj: ["Primal", "Overgrown", "Feral", "Blooming", "Toxic", "Wild", "Ancient"],
            noun: ["Root", "Bloom", "Thorn", "Grove", "Venom", "Swarm", "Canopy", "Wrath"],
            verb: ["entangles", "overgrows", "poisons", "crushes", "reclaims", "sprouts"]
        },
        ICE: {
            adj: ["Glacial", "Frozen", "Crystalline", "Absolute", "Shattered", "Numbing"],
            noun: ["Blizzard", "Glacier", "Shard", "Stasis", "Frost", "Winter", "Zero"],
            verb: ["freezes", "shatters", "preserves", "halts", "crystallizes", "numbs"]
        },
        BLOOD: {
            adj: ["Crimson", "Sanguine", "Vital", "Cursed", "Weeping", "Visceral"],
            noun: ["Pact", "Sacrifice", "Hemorrhage", "Vessel", "Rite", "Carnage"],
            verb: ["drains", "corrupts", "spills", "transmutes", "boils"]
        },
        GENERIC: {
            noun: ["Strike", "Blast", "Wave", "Form", "Technique", "Art", "Method"],
            connector: ["of", "from", "beneath", "within"]
        }
    },
    lore_templates: [
        "\"[A] is merely the precursor to [B].\"",
        "\"They thought [A] was the end. [B] is the truth.\"",
        "\"Born from the union of [A] and [B].\"",
        "\"The [TAG1] energies twist the [TAG2] into something new.\"",
        "\"A technique forbidden in three realms.\"",
        "\"It hums with the song of [A].\"",
        "\"Perfection is not singular. It is [A] fused with [B].\""
    ],
    tactics: {
        nuke: ["High burst potential."],
        poke: ["Low commitment, consistent damage."],
        cc: ["Controls the battlefield."],
        utility: ["Situational but powerful."],
        VOID: "Void damage ignores a portion of enemy resistance.",
        SOLAR: "The lingering burn prevents enemies from entering stealth.",
        NATURE: "Rooted enemies take bonus damage from Fire sources.",
        ICE: "Shatter frozen targets with heavy physical attacks.",
        BLOOD: "The health cost is risky."
    },
    env_templates: [
        "The ground [VERB1] and [VERB2].",
        "Leaves a lingering aura of [TAG1] energy."
    ],
    getWord: function(tag, type) {
        const pool = this.lexicon[tag] || this.lexicon.VOID;
        const words = pool[type] || this.lexicon.GENERIC.noun;
        return words[Math.floor(Math.random() * words.length)];
    },
    generateName: function(s1, s2) {
        const t1 = s1.tags[0];
        const t2 = s2.tags[0];
        if (t1 === t2) {
            const adj = this.getWord(t1, 'adj');
            const noun = this.getWord(t1, 'noun');
            return `True ${adj} ${noun}`;
        }
        const roll = Math.random();
        if (roll < 0.4) return `${this.getWord(t1, 'adj')} ${this.getWord(t2, 'noun')}`;
        else if (roll < 0.7) return `${this.getWord(t2, 'noun')} of ${this.getWord(t1, 'noun')}`;
        else return `${this.getWord(t2, 'adj')} ${this.getWord(t1, 'noun')}`;
    },
    generateDescription: function(s1, s2, newName) {
        return `Manifests a ${newName} that combines ${s1.name} and ${s2.name}.`;
    },
    generateLore: function(s1, s2) {
        return `A fusion of ${s1.name} and ${s2.name}.`;
    },
    generateTactics: function(name, stats, tags) {
        return "Use wisely.";
    },
    generateEnv: function(tags) {
        return "The environment shifts.";
    },
    generateSocial: function(tags) {
        return "People are amazed.";
    }
};

// Mock generateSmartFusion
function generateSmartFusion(s1, s2) {
    const isLegendary = (s1.tags.includes('VOID') && s2.tags.includes('SOLAR')) || (s2.tags.includes('VOID') && s1.tags.includes('SOLAR'));
    
    if (isLegendary) {
        return {
            id: `fusion_${Date.now()}`,
            name: "Solar Void Singularity",
            tier: "LEGENDARY",
            type: "ULTIMATE",
            tags: ["COSMIC", "DESTRUCTIVE", "VOID", "SOLAR"],
            stats: { damage: 50, cooldown: 10, cost: 20 },
            description: "Collapses a star into a void rift.",
            lore_quote: "\"When light and dark collide...\"",
            tactical_brief: "The ultimate area denial tool.",
            mastery_perk: "Mastery Lvl 10: Radius increases by 50%.",
            gameplay_info: {
                usage: ["Target: Area (10m)"],
                features: ["Instantly kills non-bosses"]
            },
            deep_data: {
                environment: "Permanently alters the biome.",
                narrative: "Triggers 'Cosmic Attention'.",
                evolution: null
            }
        };
    }

    let newName = NARRATIVE_ENGINE.generateName(s1, s2);
    const sameTag = s1.tags[0] === s2.tags[0];
    let newDmg = Math.floor(((s1.stats.damage || 0) + (s2.stats.damage || 0)) * 0.85);
    let newCost = Math.floor(Math.max(s1.stats.cost || 0, s2.stats.cost || 0) * 1.2);
    let newCooldown = Math.floor((s1.stats.cooldown + s2.stats.cooldown) / 1.8);

    if (sameTag) {
        newDmg = Math.floor(newDmg * 1.2);
        newName = `Greater ${newName}`;
    } else {
        newCost = Math.floor(newCost * 0.9);
    }

    const mergedTags = [...new Set([...s1.tags, ...s2.tags])].slice(0, 4);
    const lore = NARRATIVE_ENGINE.generateLore(s1, s2);
    const desc = NARRATIVE_ENGINE.generateDescription(s1, s2, newName);
    const tactics = NARRATIVE_ENGINE.generateTactics(newName, {damage: newDmg, cooldown: newCooldown, cost: newCost}, mergedTags);
    const env = NARRATIVE_ENGINE.generateEnv(mergedTags);
    const social = NARRATIVE_ENGINE.generateSocial(mergedTags);

    let evolution = null;
    if (newDmg > 40) evolution = "Ascended " + newName;
    else if (mergedTags.includes('VOID')) evolution = "Void " + newName;
    else evolution = "Perfected " + newName;

    const synergies = mergedTags.map(t => `${t} Resonance`).slice(0, 2);

    return {
        id: `fusion_${Date.now()}`,
        name: newName,
        tier: "RARE",
        type: sameTag ? "SPECIALIZED" : "HYBRID",
        tags: mergedTags,
        stats: { damage: newDmg, cost: newCost, cooldown: newCooldown },
        description: desc,
        lore_quote: lore,
        tactical_brief: tactics,
        mastery_perk: "Mastery Lvl 1: Unlocks 'Instability' modifier.",
        gameplay_info: {
            usage: s1.gameplay_info.usage, 
            features: [...new Set([...s1.gameplay_info.features, ...s2.gameplay_info.features])].slice(0, 3)
        },
        deep_data: {
            environment: env,
            narrative: social,
            evolution: evolution,
            synergies: synergies
        }
    };
}

// Test Cases
const skill1 = {
    id: "s1",
    name: "Void Blast",
    tags: ["VOID"],
    stats: { damage: 20, cost: 10, cooldown: 2 },
    gameplay_info: { usage: ["Cast"], features: ["Blast"] }
};

const skill2 = {
    id: "s2",
    name: "Solar Flare",
    tags: ["SOLAR"],
    stats: { damage: 15, cost: 12, cooldown: 3 },
    gameplay_info: { usage: ["Cast"], features: ["Burn"] }
};

const skill3 = {
    id: "s3",
    name: "Void Shield",
    tags: ["VOID"],
    stats: { damage: 5, cost: 15, cooldown: 5 },
    gameplay_info: { usage: ["Cast"], features: ["Shield"] }
};

console.log("--- Test 1: Legendary Fusion (Void + Solar) ---");
const fusion1 = generateSmartFusion(skill1, skill2);
console.log("Name:", fusion1.name);
console.log("Tier:", fusion1.tier);
console.log("Tags:", fusion1.tags);
if (fusion1.tier === "LEGENDARY") console.log("PASS"); else console.log("FAIL");

console.log("\n--- Test 2: Same Tag Fusion (Void + Void) ---");
const fusion2 = generateSmartFusion(skill1, skill3);
console.log("Name:", fusion2.name);
console.log("Type:", fusion2.type);
console.log("Damage:", fusion2.stats.damage);
if (fusion2.type === "SPECIALIZED") console.log("PASS"); else console.log("FAIL");

console.log("\n--- Test 3: Hybrid Fusion (Void + Solar - Non-Legendary check if tags were different) ---");
// Note: Void + Solar is hardcoded to Legendary, so let's try Void + Nature
const skill4 = {
    id: "s4",
    name: "Nature Grasp",
    tags: ["NATURE"],
    stats: { damage: 10, cost: 8, cooldown: 4 },
    gameplay_info: { usage: ["Cast"], features: ["Root"] }
};
const fusion3 = generateSmartFusion(skill1, skill4);
console.log("Name:", fusion3.name);
console.log("Type:", fusion3.type);
if (fusion3.type === "HYBRID") console.log("PASS"); else console.log("FAIL");
