// 🔧 Additional Pantheons Generator V1.0
// Generates Greek, Chinese, Japanese, and African pantheon entities
// Based on Invocation Pantheon SUPREME v4.0 design

const fs = require('fs');

// Greek Pantheon (Olympians + Titans) - 30 entities
const greekPantheon = [
    // The 12 Olympians
    {id: "GRK_001", name: "Zeus", domain: "Sky & Thunder", cost: {devotion: 3, mana: 6}, keywords: ["Lightning", "Authority", "Storm"], effect: "Deal 6 damage to any target. Create three 2/2 Lightning tokens. You gain control of target creature until end of turn.", themes: ["divine", "offense", "control"]},
    {id: "GRK_002", name: "Poseidon", domain: "Sea & Earthquakes", cost: {devotion: 3, mana: 5}, keywords: ["Tsunami", "Shake", "Flood"], effect: "Return all nonland permanents to owners' hands. Create a 5/5 Kraken token.", themes: ["divine", "control", "tempo"]},
    {id: "GRK_003", name: "Hades", domain: "Underworld & Death", cost: {devotion: 3, mana: 6}, keywords: ["Death", "Exile", "Souls"], effect: "Destroy all creatures. Exile them instead of putting them in graveyards. Create X 2/2 Shade tokens where X is creatures destroyed.", themes: ["divine", "control", "execute"]},
    {id: "GRK_004", name: "Hera", domain: "Marriage & Family", cost: {devotion: 2, mana: 4}, keywords: ["Bond", "Unity", "Jealousy"], effect: "All your creatures get +2/+2 and gain Lifelink. Destroy target enchantment.", themes: ["divine", "support", "buff"]},
    {id: "GRK_005", name: "Athena", domain: "Wisdom & War", cost: {devotion: 3, mana: 5}, keywords: ["Strategy", "Aegis", "Wisdom"], effect: "Counter target spell. Create two 3/3 Soldier tokens with Vigilance. Draw 2 cards.", themes: ["divine", "control", "support"]},
    {id: "GRK_006", name: "Apollo", domain: "Sun & Prophecy", cost: {devotion: 2, mana: 4}, keywords: ["Light", "Oracle", "Music"], effect: "Deal 4 damage divided among any targets. Scry 4, then draw 2 cards. Heal 4 damage to any target.", themes: ["divine", "offense", "support"]},
    {id: "GRK_007", name: "Artemis", domain: "Hunt & Moon", cost: {devotion: 2, mana: 3}, keywords: ["Hunt", "Precision", "Wild"], effect: "Destroy target creature with flying. Create three 2/2 Wolf tokens. Gain 3 life.", themes: ["divine", "offense", "wild"]},
    {id: "GRK_008", name: "Ares", domain: "War & Bloodlust", cost: {devotion: 3, mana: 5}, keywords: ["Rage", "Battle", "Slaughter"], effect: "All creatures get +3/+0 and gain First Strike and Menace until end of turn. Deal 3 damage to each player.", themes: ["divine", "aggro", "offense"]},
    {id: "GRK_009", name: "Aphrodite", domain: "Love & Beauty", cost: {devotion: 2, mana: 4}, keywords: ["Charm", "Allure", "Passion"], effect: "Gain control of up to three target creatures until end of turn. They gain Haste. Draw a card for each.", themes: ["divine", "control", "tempo"]},
    {id: "GRK_010", name: "Hephaestus", domain: "Forge & Craft", cost: {devotion: 2, mana: 4}, keywords: ["Forge", "Craft", "Automation"], effect: "Create three 3/3 Artifact Creature tokens with Haste. Search library for an artifact and put it onto battlefield.", themes: ["divine", "infrastructure", "support"]},
    {id: "GRK_011", name: "Hermes", domain: "Speed & Thieves", cost: {devotion: 2, mana: 3}, keywords: ["Haste", "Steal", "Swift"], effect: "Target creature gains +2/+0, Flying, Haste, and 'When this attacks, draw a card.' Take an extra turn after this one.", themes: ["divine", "tempo", "offense"]},
    {id: "GRK_012", name: "Dionysus", domain: "Wine & Madness", cost: {devotion: 2, mana: 4}, keywords: ["Frenzy", "Chaos", "Revel"], effect: "Each player discards their hand, then draws 7 cards. All creatures attack this turn if able, chosen randomly.", themes: ["divine", "chaos", "control"]},
    
    // Major Titans
    {id: "GRK_013", name: "Kronos", domain: "Time", cost: {devotion: 3, mana: 7}, keywords: ["Time", "Devour", "Ages"], effect: "Take two extra turns after this one. Exile all graveyards. Deal 10 damage divided among any targets.", themes: ["ancient", "ultimate", "control"]},
    {id: "GRK_014", name: "Rhea", domain: "Motherhood", cost: {devotion: 2, mana: 5}, keywords: ["Birth", "Protect", "Nurture"], effect: "Return all creature cards from your graveyard to battlefield. They gain Haste. You gain 10 life.", themes: ["ancient", "support", "healing"]},
    {id: "GRK_015", name: "Prometheus", domain: "Fire & Foresight", cost: {devotion: 2, mana: 4}, keywords: ["Fire", "Gift", "Sacrifice"], effect: "Sacrifice a permanent: Draw 3 cards and create three Treasure tokens. Repeat this twice.", themes: ["ancient", "economy", "infrastructure"]},
    {id: "GRK_016", name: "Atlas", domain: "Strength & Endurance", cost: {devotion: 3, mana: 5}, keywords: ["Burden", "Strength", "Endure"], effect: "All your permanents gain Indestructible until your next turn. You can't lose the game and opponents can't win this turn.", themes: ["ancient", "defense", "survival"]},
    
    // Other Major Deities
    {id: "GRK_017", name: "Hecate", domain: "Magic & Crossroads", cost: {devotion: 2, mana: 5}, keywords: ["Witchcraft", "Choice", "Night"], effect: "Copy target instant or sorcery three times. You may choose new targets for the copies.", themes: ["divine", "offense", "support"]},
    {id: "GRK_018", name: "Nike", domain: "Victory", cost: {devotion: 2, mana: 3}, keywords: ["Victory", "Triumph", "Glory"], effect: "All your creatures gain +2/+2, Flying, and Double Strike until end of turn. You can't lose this turn.", themes: ["divine", "offense", "buff"]},
    {id: "GRK_019", name: "Nemesis", domain: "Revenge", cost: {devotion: 2, mana: 4}, keywords: ["Vengeance", "Justice", "Balance"], effect: "Destroy target permanent that dealt damage to you this turn. Deal damage equal to your life lost this turn to any target.", themes: ["divine", "revenge", "offense"]},
    {id: "GRK_020", name: "Pan", domain: "Nature & Wild", cost: {devotion: 2, mana: 3}, keywords: ["Wild", "Panic", "Nature"], effect: "Create five 1/1 Satyr tokens with Haste. All creatures you control gain Trample. Opponents discard a card.", themes: ["divine", "wild", "offense"]},
    {id: "GRK_021", name: "Persephone", domain: "Spring & Underworld", cost: {devotion: 2, mana: 4}, keywords: ["Rebirth", "Seasons", "Death"], effect: "Return target creature from any graveyard to battlefield under your control. Create three Food tokens. Heal 5 damage.", themes: ["divine", "resurrection", "healing"]},
    {id: "GRK_022", name: "Demeter", domain: "Harvest", cost: {devotion: 2, mana: 4}, keywords: ["Growth", "Abundance", "Harvest"], effect: "Search library for up to three lands and put them onto battlefield. Create five Food tokens. Draw 2 cards.", themes: ["divine", "infrastructure", "economy"]},
    {id: "GRK_023", name: "Helios", domain: "Sun Chariot", cost: {devotion: 2, mana: 5}, keywords: ["Light", "Burn", "Reveal"], effect: "Deal 5 damage to each creature and each opponent. Reveal all face-down cards. Draw a card for each revealed.", themes: ["divine", "offense", "information"]},
    {id: "GRK_024", name: "Nyx", domain: "Night", cost: {devotion: 2, mana: 3}, keywords: ["Darkness", "Dreams", "Hide"], effect: "All your permanents gain Hexproof and Shroud until your next turn. Opponents skip their next combat phase.", themes: ["ancient", "defense", "control"]},
    {id: "GRK_025", name: "Gaia", domain: "Earth Mother", cost: {devotion: 3, mana: 6}, keywords: ["Earth", "Creation", "Life"], effect: "Create three 5/5 Elemental tokens. All your lands become 3/3 creatures until end of turn. They're still lands. Gain 15 life.", themes: ["ancient", "ultimate", "offense"]},
    {id: "GRK_026", name: "Eros", domain: "Desire", cost: {devotion: 1, mana: 2}, keywords: ["Love", "Control", "Charm"], effect: "Gain control of target creature until end of turn. Untap it and it gains Haste. Create a copy of it.", themes: ["divine", "control", "tempo"]},
    {id: "GRK_027", name: "Thanatos", domain: "Death", cost: {devotion: 2, mana: 5}, keywords: ["Death", "Peaceful", "End"], effect: "Exile all creatures with power 3 or less. Opponents can't cast creature spells this turn. Gain life equal to creatures exiled.", themes: ["divine", "control", "execute"]},
    {id: "GRK_028", name: "Hypnos", domain: "Sleep", cost: {devotion: 2, mana: 3}, keywords: ["Sleep", "Dreams", "Rest"], effect: "Tap all creatures opponents control. They don't untap during their next untap step. Draw 2 cards.", themes: ["divine", "control", "tempo"]},
    {id: "GRK_029", name: "Eris", domain: "Discord", cost: {devotion: 2, mana: 4}, keywords: ["Chaos", "Strife", "Discord"], effect: "Each player sacrifices half their permanents rounded up. Each player discards their hand. Chaos reigns.", themes: ["divine", "chaos", "anarchy"]},
    {id: "GRK_030", name: "Tyche", domain: "Fortune", cost: {devotion: 2, mana: 3}, keywords: ["Luck", "Chance", "Fate"], effect: "Flip five coins. For each heads, draw 2 cards and create a Treasure. For each tails, deal 3 damage to any target.", themes: ["divine", "chaos", "tempo"]}
];

// Chinese Pantheon (Jade Emperor + Celestial Bureaucracy) - 25 entities
const chinesePantheon = [
    {id: "CHN_001", name: "Jade Emperor", domain: "Heaven & Order", cost: {devotion: 3, mana: 7}, keywords: ["Authority", "Heaven", "Decree"], effect: "You become the Monarch. Draw 3 cards. Create three 4/4 Celestial tokens. Your life total becomes 50.", themes: ["divine", "ultimate", "support"]},
    {id: "CHN_002", name: "Sun Wukong", domain: "Rebellion & Trickery", cost: {devotion: 3, mana: 5}, keywords: ["Immortal", "Clone", "Chaos"], effect: "Create five copies of target creature you control. They gain Haste and 'When this dies, deal 3 damage to any target.'", themes: ["divine", "offense", "tempo"]},
    {id: "CHN_003", name: "Guan Yu", domain: "War & Loyalty", cost: {devotion: 2, mana: 4}, keywords: ["Honor", "Valor", "Strike"], effect: "Deal 5 damage to target creature. If it dies, create two 3/3 Warrior tokens. All Warriors you control gain +2/+2.", themes: ["divine", "offense", "support"]},
    {id: "CHN_004", name: "Nezha", domain: "Youth & Fire", cost: {devotion: 2, mana: 4}, keywords: ["Fire", "Youth", "Wheels"], effect: "Deal 4 damage to each opponent. Create two 2/2 Fire Spirit tokens with Haste and Flying.", themes: ["divine", "aggro", "offense"]},
    {id: "CHN_005", name: "Erlang Shen", domain: "Truth & Justice", cost: {devotion: 2, mana: 5}, keywords: ["Third Eye", "Truth", "Hunt"], effect: "Destroy target creature or enchantment. Look at target opponent's hand and exile a card from it. Draw 2 cards.", themes: ["divine", "control", "information"]},
    {id: "CHN_006", name: "Chang'e", domain: "Moon", cost: {devotion: 2, mana: 3}, keywords: ["Moon", "Immortality", "Beauty"], effect: "All your creatures gain Flying and Lifelink until end of turn. Gain 5 life. Draw a card.", themes: ["divine", "support", "healing"]},
    {id: "CHN_007", name: "Dragon King", domain: "Seas & Weather", cost: {devotion: 3, mana: 6}, keywords: ["Storm", "Flood", "Dragon"], effect: "Return all nonland permanents to owners' hands. Create a 7/7 Dragon token with Flying. Draw 3 cards.", themes: ["divine", "control", "ultimate"]},
    {id: "CHN_008", name: "Nüwa", domain: "Creation & Humanity", cost: {devotion: 2, mana: 5}, keywords: ["Create", "Repair", "Mother"], effect: "Return all creature cards from your graveyard to hand. Create three 2/2 Human tokens. Gain 10 life.", themes: ["divine", "resurrection", "support"]},
    {id: "CHN_009", name: "Fuxi", domain: "Wisdom & Hunting", cost: {devotion: 2, mana: 4}, keywords: ["Hunt", "Knowledge", "Trap"], effect: "Destroy target creature with power 4 or greater. Scry 4, then draw 2 cards. Create a Food token.", themes: ["divine", "control", "support"]},
    {id: "CHN_010", name: "Shennong", domain: "Agriculture & Medicine", cost: {devotion: 2, mana: 4}, keywords: ["Heal", "Growth", "Herbs"], effect: "Search library for three lands and put them onto battlefield. Heal all damage from all creatures. Gain 8 life.", themes: ["divine", "infrastructure", "healing"]},
    {id: "CHN_011", name: "Xuanwu", domain: "North & Protection", cost: {devotion: 2, mana: 5}, keywords: ["Shield", "Turtle", "Snake"], effect: "All your permanents gain Indestructible and Hexproof until your next turn. Create a 5/5 Tortoise token.", themes: ["divine", "defense", "survival"]},
    {id: "CHN_012", name: "Zhurong", domain: "Fire God", cost: {devotion: 2, mana: 5}, keywords: ["Fire", "Burn", "Rage"], effect: "Deal 7 damage divided among any targets. All your creatures gain +3/+0 and First Strike until end of turn.", themes: ["divine", "aggro", "offense"]},
    {id: "CHN_013", name: "Gonggong", domain: "Water & Flood", cost: {devotion: 2, mana: 4}, keywords: ["Flood", "Chaos", "Destruction"], effect: "Return three target nonland permanents to owners' hands. Draw 2 cards. Opponents discard a card.", themes: ["divine", "control", "tempo"]},
    {id: "CHN_014", name: "Caishen", domain: "Wealth", cost: {devotion: 2, mana: 3}, keywords: ["Wealth", "Fortune", "Gold"], effect: "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life.", themes: ["divine", "economy", "infrastructure"]},
    {id: "CHN_015", name: "Mazu", domain: "Sea Protection", cost: {devotion: 2, mana: 4}, keywords: ["Protection", "Safe", "Guide"], effect: "All your creatures gain Indestructible until end of turn. Counter target spell. Draw 2 cards.", themes: ["divine", "defense", "control"]},
    {id: "CHN_016", name: "Guanyin", domain: "Mercy & Compassion", cost: {devotion: 2, mana: 4}, keywords: ["Mercy", "Heal", "Peace"], effect: "Heal all damage from all permanents. Remove all poison counters. All players gain 10 life. Draw a card.", themes: ["divine", "healing", "support"]},
    {id: "CHN_017", name: "Pangu", domain: "Creation", cost: {devotion: 3, mana: 8}, keywords: ["Creation", "Separation", "Giant"], effect: "Exile all permanents, then return all lands to battlefield. Each player draws 7 cards. Reset all life totals to 40.", themes: ["ancient", "ultimate", "broken"]},
    {id: "CHN_018", name: "Lei Gong", domain: "Thunder", cost: {devotion: 2, mana: 4}, keywords: ["Thunder", "Justice", "Drum"], effect: "Deal 4 damage to each creature. If a creature dealt damage this way would die, exile it instead.", themes: ["divine", "control", "offense"]},
    {id: "CHN_019", name: "Dian Mu", domain: "Lightning", cost: {devotion: 2, mana: 3}, keywords: ["Lightning", "Flash", "Strike"], effect: "Deal 5 damage to target creature or planeswalker. If it dies, you may cast this again without paying mana cost.", themes: ["divine", "aggro", "offense"]},
    {id: "CHN_020", name: "Zao Jun", domain: "Hearth & Kitchen", cost: {devotion: 1, mana: 2}, keywords: ["Food", "Home", "Report"], effect: "Create three Food tokens. Draw a card for each Food you control. Gain 3 life.", themes: ["divine", "support", "economy"]},
    {id: "CHN_021", name: "Wen Chang", domain: "Literature", cost: {devotion: 2, mana: 3}, keywords: ["Knowledge", "Study", "Wisdom"], effect: "Draw 4 cards. You have no maximum hand size this turn. Scry 3.", themes: ["divine", "information", "support"]},
    {id: "CHN_022", name: "Bixia Yuanjun", domain: "Dawn & Birth", cost: {devotion: 2, mana: 4}, keywords: ["Dawn", "Life", "Protection"], effect: "Return target creature from graveyard to battlefield. Create two 2/2 Spirit tokens. Gain 7 life.", themes: ["divine", "resurrection", "healing"]},
    {id: "CHN_023", name: "Tu Di Gong", domain: "Earth & Soil", cost: {devotion: 1, mana: 3}, keywords: ["Earth", "Growth", "Local"], effect: "Search library for up to two basic lands and put them onto battlefield tapped. Create two Treasure tokens.", themes: ["divine", "infrastructure", "economy"]},
    {id: "CHN_024", name: "Yan Wang", domain: "Underworld Judge", cost: {devotion: 2, mana: 5}, keywords: ["Judge", "Death", "Karma"], effect: "Destroy all creatures with power 4 or greater. Exile all graveyards. Each opponent loses 5 life.", themes: ["divine", "control", "execute"]},
    {id: "CHN_025", name: "Bai Hu", domain: "White Tiger", cost: {devotion: 2, mana: 4}, keywords: ["Tiger", "West", "Metal"], effect: "Create a 5/5 White Tiger token with First Strike and Vigilance. All creatures you control gain +1/+1 and Vigilance.", themes: ["divine", "offense", "support"]}
];

// Japanese Pantheon (Kami & Yokai) - 25 entities
const japanesePantheon = [
    {id: "JPN_001", name: "Amaterasu", domain: "Sun Goddess", cost: {devotion: 3, mana: 6}, keywords: ["Sun", "Light", "Divine"], effect: "Deal 6 damage to each opponent. All your creatures gain +3/+3 and Lifelink. You gain 15 life.", themes: ["divine", "offense", "healing"]},
    {id: "JPN_002", name: "Susanoo", domain: "Storm God", cost: {devotion: 3, mana: 5}, keywords: ["Storm", "Sword", "Chaos"], effect: "Destroy all artifacts and enchantments. Deal 5 damage divided among any targets. Create a 6/6 Dragon token with Flying.", themes: ["divine", "control", "offense"]},
    {id: "JPN_003", name: "Tsukuyomi", domain: "Moon God", cost: {devotion: 2, mana: 4}, keywords: ["Moon", "Night", "Time"], effect: "Tap all creatures. They don't untap during their next untap step. Take an extra turn after this one.", themes: ["divine", "control", "tempo"]},
    {id: "JPN_004", name: "Inari", domain: "Rice & Foxes", cost: {devotion: 2, mana: 3}, keywords: ["Fox", "Prosperity", "Shape"], effect: "Create five 2/2 Fox Spirit tokens. Create three Food tokens. Draw 2 cards.", themes: ["divine", "support", "economy"]},
    {id: "JPN_005", name: "Raijin", domain: "Thunder", cost: {devotion: 2, mana: 4}, keywords: ["Thunder", "Drums", "Storm"], effect: "Deal 4 damage to each creature. Create three 2/2 Lightning Spirit tokens with Haste.", themes: ["divine", "aggro", "offense"]},
    {id: "JPN_006", name: "Fujin", domain: "Wind", cost: {devotion: 2, mana: 3}, keywords: ["Wind", "Bag", "Storm"], effect: "Return three target nonland permanents to owners' hands. All your creatures gain Flying until end of turn.", themes: ["divine", "control", "tempo"]},
    {id: "JPN_007", name: "Hachiman", domain: "War God", cost: {devotion: 2, mana: 5}, keywords: ["War", "Victory", "Archery"], effect: "Deal 5 damage to any target. Create three 3/3 Samurai tokens with First Strike. Draw a card.", themes: ["divine", "offense", "support"]},
    {id: "JPN_008", name: "Benzaiten", domain: "Music & Arts", cost: {devotion: 2, mana: 3}, keywords: ["Music", "Flow", "Beauty"], effect: "Draw 3 cards. You may play an additional land this turn. All your spells cost 1 less this turn.", themes: ["divine", "support", "economy"]},
    {id: "JPN_009", name: "Izanagi", domain: "Creation", cost: {devotion: 3, mana: 6}, keywords: ["Creation", "Life", "Father"], effect: "Create five 3/3 Spirit tokens. Return all creatures from your graveyard to hand. Gain 10 life.", themes: ["divine", "resurrection", "support"]},
    {id: "JPN_010", name: "Izanami", domain: "Death", cost: {devotion: 2, mana: 5}, keywords: ["Death", "Underworld", "Mother"], effect: "Destroy all creatures. Exile them. Create X 2/2 Spirit tokens where X is creatures destroyed.", themes: ["divine", "control", "execute"]},
    {id: "JPN_011", name: "Ryujin", domain: "Dragon King", cost: {devotion: 3, mana: 6}, keywords: ["Dragon", "Sea", "Storm"], effect: "Return all nonland permanents to owners' hands. Create a 8/8 Dragon token with Flying. Draw 4 cards.", themes: ["divine", "ultimate", "control"]},
    {id: "JPN_012", name: "Tengu", domain: "Mountain Spirits", cost: {devotion: 2, mana: 4}, keywords: ["Flight", "Martial", "Trick"], effect: "Create three 3/3 Tengu tokens with Flying and First Strike. Draw a card for each.", themes: ["divine", "offense", "tempo"]},
    {id: "JPN_013", name: "Kitsune", domain: "Fox Spirits", cost: {devotion: 2, mana: 3}, keywords: ["Fox", "Illusion", "Nine Tails"], effect: "Create a copy of target creature you control. It gains Haste. At end of turn, create another copy.", themes: ["divine", "tempo", "support"]},
    {id: "JPN_014", name: "Oni", domain: "Demons", cost: {devotion: 2, mana: 5}, keywords: ["Demon", "Rage", "Club"], effect: "Create two 5/5 Demon tokens with Menace. Deal 5 damage divided among any targets.", themes: ["demonic", "aggro", "offense"]},
    {id: "JPN_015", name: "Yuki-Onna", domain: "Snow Woman", cost: {devotion: 2, mana: 4}, keywords: ["Ice", "Cold", "Freeze"], effect: "Tap all creatures opponents control. They don't untap during their next two untap steps. Gain 5 life.", themes: ["divine", "control", "tempo"]},
    {id: "JPN_016", name: "Tanuki", domain: "Raccoon Dog", cost: {devotion: 1, mana: 2}, keywords: ["Shape", "Trick", "Leaf"], effect: "Create a copy of target artifact or enchantment you control. Draw a card.", themes: ["divine", "support", "tempo"]},
    {id: "JPN_017", name: "Gashadokuro", domain: "Giant Skeleton", cost: {devotion: 2, mana: 5}, keywords: ["Undead", "Giant", "Hunger"], effect: "Create a 10/10 Skeleton token. Each opponent sacrifices three permanents.", themes: ["ancient", "control", "offense"]},
    {id: "JPN_018", name: "Kappa", domain: "Water Imp", cost: {devotion: 1, mana: 3}, keywords: ["Water", "Trick", "Cucumber"], effect: "Return target permanent to owner's hand. Draw 2 cards. Create a Food token.", themes: ["divine", "tempo", "support"]},
    {id: "JPN_019", name: "Jorōgumo", domain: "Spider Woman", cost: {devotion: 2, mana: 4}, keywords: ["Spider", "Web", "Deceit"], effect: "Destroy target creature with Flying. Create three 2/2 Spider tokens with Reach. Draw a card.", themes: ["divine", "control", "offense"]},
    {id: "JPN_020", name: "Yamata no Orochi", domain: "Eight-Headed Dragon", cost: {devotion: 3, mana: 7}, keywords: ["Dragon", "Hydra", "Heads"], effect: "Create an 8/8 Dragon Hydra token with 'When this enters, deal 8 damage divided among any targets.' Draw 4 cards.", themes: ["divine", "ultimate", "offense"]},
    {id: "JPN_021", name: "Ame-no-Uzume", domain: "Dawn & Mirth", cost: {devotion: 2, mana: 3}, keywords: ["Dance", "Joy", "Light"], effect: "All your creatures gain +2/+2 and Haste until end of turn. Draw 2 cards. Gain 5 life.", themes: ["divine", "support", "tempo"]},
    {id: "JPN_022", name: "Takemikazuchi", domain: "Thunder & Sword", cost: {devotion: 2, mana: 4}, keywords: ["Thunder", "Blade", "Victory"], effect: "Deal 5 damage to target creature. If it dies, create a 4/4 Samurai token. Draw a card.", themes: ["divine", "offense", "support"]},
    {id: "JPN_023", name: "Okuninushi", domain: "Nation-Building", cost: {devotion: 2, mana: 5}, keywords: ["Medicine", "Magic", "Build"], effect: "Search library for up to three lands and put them onto battlefield. Heal 10 damage divided. Draw 2 cards.", themes: ["divine", "infrastructure", "healing"]},
    {id: "JPN_024", name: "Bishamon", domain: "Fortune & War", cost: {devotion: 2, mana: 4}, keywords: ["Fortune", "Warrior", "Treasure"], effect: "Create four Treasure tokens. Create two 3/3 Warrior tokens. Draw a card for each treasure.", themes: ["divine", "economy", "support"]},
    {id: "JPN_025", name: "Fudo Myoo", domain: "Immovable Wisdom", cost: {devotion: 3, mana: 6}, keywords: ["Immovable", "Fire", "Sword"], effect: "All your permanents gain Indestructible until your next turn. Deal 6 damage divided. You can't lose this turn.", themes: ["divine", "defense", "ultimate"]}
];

// African Pantheon (Yoruba + Egyptian + Various) - 20 entities
const africanPantheon = [
    {id: "AFR_001", name: "Olodumare", domain: "Supreme Creator", cost: {devotion: 3, mana: 7}, keywords: ["Creation", "Supreme", "Wisdom"], effect: "You become the Monarch. Create five 4/4 Spirit tokens. Your life total becomes 60. Draw 5 cards.", themes: ["divine", "ultimate", "support"]},
    {id: "AFR_002", name: "Ogun", domain: "Iron & War", cost: {devotion: 2, mana: 5}, keywords: ["Iron", "War", "Forge"], effect: "Deal 6 damage divided among any targets. Create three 3/3 Warrior tokens with First Strike. All artifacts cost 2 less.", themes: ["divine", "offense", "infrastructure"]},
    {id: "AFR_003", name: "Shango", domain: "Thunder & Fire", cost: {devotion: 3, mana: 5}, keywords: ["Thunder", "Fire", "Dance"], effect: "Deal 7 damage divided among any targets. Create three 2/2 Lightning tokens with Haste.", themes: ["divine", "aggro", "offense"]},
    {id: "AFR_004", name: "Oshun", domain: "Love & Rivers", cost: {devotion: 2, mana: 4}, keywords: ["Love", "River", "Beauty"], effect: "Gain control of target creature. Create three 2/2 River Spirit tokens. Heal 8 damage. Draw 2 cards.", themes: ["divine", "control", "healing"]},
    {id: "AFR_005", name: "Yemoja", domain: "Motherhood & Oceans", cost: {devotion: 2, mana: 5}, keywords: ["Mother", "Ocean", "Life"], effect: "Return all creatures from your graveyard to hand. Create five 2/2 Fish tokens. Gain 15 life.", themes: ["divine", "resurrection", "healing"]},
    {id: "AFR_006", name: "Eshu", domain: "Crossroads & Trickery", cost: {devotion: 2, mana: 3}, keywords: ["Trick", "Chaos", "Choice"], effect: "Each player draws 3 cards, then discards 2 cards. Each player creates two Treasure tokens. Chaos ensues.", themes: ["divine", "chaos", "tempo"]},
    {id: "AFR_007", name: "Oya", domain: "Winds & Change", cost: {devotion: 2, mana: 4}, keywords: ["Wind", "Storm", "Transformation"], effect: "Return three target permanents to owners' hands. Deal 4 damage to any target. Draw 2 cards.", themes: ["divine", "control", "tempo"]},
    {id: "AFR_008", name: "Obatala", domain: "Purity & Creation", cost: {devotion: 2, mana: 5}, keywords: ["Pure", "Create", "White"], effect: "Exile all enchantments. Create five 2/2 Human tokens. All your creatures gain Lifelink. Gain 10 life.", themes: ["divine", "control", "healing"]},
    {id: "AFR_009", name: "Orunmila", domain: "Wisdom & Divination", cost: {devotion: 2, mana: 4}, keywords: ["Wisdom", "Oracle", "Fate"], effect: "Scry 5, then draw 4 cards. Look at top 5 cards of opponent's library. You may rearrange them.", themes: ["divine", "information", "control"]},
    {id: "AFR_010", name: "Elegua", domain: "Paths & Opportunities", cost: {devotion: 1, mana: 2}, keywords: ["Path", "Open", "Key"], effect: "Search library for a land and put it onto battlefield. Draw a card. Create a Treasure token.", themes: ["divine", "infrastructure", "economy"]},
    {id: "AFR_011", name: "Babaluaye", domain: "Healing & Disease", cost: {devotion: 2, mana: 4}, keywords: ["Heal", "Disease", "Transform"], effect: "Destroy all creatures with power 2 or less. Heal all damage from remaining creatures. Gain 10 life.", themes: ["divine", "control", "healing"]},
    {id: "AFR_012", name: "Anansi", domain: "Stories & Spiders", cost: {devotion: 2, mana: 3}, keywords: ["Spider", "Story", "Trick"], effect: "Create three 2/2 Spider tokens with Reach. Draw 3 cards. You may play an additional land this turn.", themes: ["divine", "support", "economy"]},
    {id: "AFR_013", name: "Mami Wata", domain: "Water Spirits", cost: {devotion: 2, mana: 4}, keywords: ["Water", "Beauty", "Wealth"], effect: "Create five Treasure tokens. Draw cards equal to treasures you control. Gain 5 life.", themes: ["divine", "economy", "support"]},
    {id: "AFR_014", name: "Chukwu", domain: "Supreme God", cost: {devotion: 3, mana: 6}, keywords: ["Supreme", "Chi", "Creator"], effect: "Exile all nonland permanents, then return all your permanents from exile. Draw 5 cards. Gain 20 life.", themes: ["divine", "ultimate", "broken"]},
    {id: "AFR_015", name: "Ogun", domain: "War & Hunting", cost: {devotion: 2, mana: 4}, keywords: ["Hunt", "War", "Iron"], effect: "Destroy target creature with flying or power 4+. Create two 3/3 Hunter tokens. Draw a card.", themes: ["divine", "control", "offense"]},
    {id: "AFR_016", name: "Nyame", domain: "Sky Father", cost: {devotion: 3, mana: 6}, keywords: ["Sky", "Father", "Supreme"], effect: "You become the Monarch. All your creatures gain Flying. Deal 5 damage to each opponent. Draw 3 cards.", themes: ["divine", "offense", "support"]},
    {id: "AFR_017", name: "Asase Ya", domain: "Earth Mother", cost: {devotion: 2, mana: 5}, keywords: ["Earth", "Fertility", "Mother"], effect: "Search library for up to four lands and put them onto battlefield. Create four Food tokens. Gain 10 life.", themes: ["divine", "infrastructure", "healing"]},
    {id: "AFR_018", name: "Legba", domain: "Communication", cost: {devotion: 2, mana: 3}, keywords: ["Speak", "Messenger", "Gate"], effect: "Draw 3 cards. You may cast spells from your hand without paying their mana costs until end of turn (max 3).", themes: ["divine", "economy", "support"]},
    {id: "AFR_019", name: "Nana Buluku", domain: "Ancient Creator", cost: {devotion: 3, mana: 7}, keywords: ["Ancient", "Creator", "Primordial"], effect: "Create the universe anew: Reset all graveyards, exile zones, and hands. Each player draws 7 cards. Gain 30 life.", themes: ["ancient", "ultimate", "broken"]},
    {id: "AFR_020", name: "Mawu-Lisa", domain: "Moon & Sun", cost: {devotion: 3, mana: 6}, keywords: ["Dual", "Balance", "Eclipse"], effect: "Deal 5 damage to each creature. Heal 5 damage to each player. Draw 3 cards. Create three 3/3 tokens.", themes: ["divine", "balance", "support"]}
];

function generateAllPantheons() {
    const all = [];
    
    // Process Greek
    for (const deity of greekPantheon) {
        all.push({
            id: `SKILL_INVOCATION_GREEK_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Greek Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Olympian',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: deity.themes,
            powerScore: 75 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v4.0 Expansion',
            domain: deity.domain
        });
    }
    
    // Process Chinese
    for (const deity of chinesePantheon) {
        all.push({
            id: `SKILL_INVOCATION_CHINESE_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Chinese Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Celestial',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: deity.themes,
            powerScore: 73 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v4.0 Expansion',
            domain: deity.domain
        });
    }
    
    // Process Japanese
    for (const deity of japanesePantheon) {
        all.push({
            id: `SKILL_INVOCATION_JAPANESE_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'Japanese Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Kami',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: deity.themes,
            powerScore: 71 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v4.0 Expansion',
            domain: deity.domain
        });
    }
    
    // Process African
    for (const deity of africanPantheon) {
        all.push({
            id: `SKILL_INVOCATION_AFRICAN_${deity.id}`,
            number: parseInt(deity.id.split('_')[1]),
            name: deity.name,
            engine: 'Invocation',
            category: 'African Pantheon',
            pillar: 'Divine Pantheon',
            rank: 'Orisha',
            tier: 3,
            tierValue: 3,
            cost: deity.cost,
            cooldown: 7,
            effect: deity.effect,
            keywords: deity.keywords,
            themes: deity.themes,
            powerScore: 74 + (parseInt(deity.id.split('_')[1]) % 10) * 2,
            isFused: false,
            fusionDepth: 0,
            fusionIngredients: [],
            source: 'Invocation v4.0 Expansion',
            domain: deity.domain
        });
    }
    
    return all;
}

// Main execution
console.log("🔧 Starting Additional Pantheons Generator...\n");

const allPantheons = generateAllPantheons();

const breakdown = {};
for (const entity of allPantheons) {
    if (!breakdown[entity.category]) {
        breakdown[entity.category] = 0;
    }
    breakdown[entity.category]++;
}

console.log("✅ Generated Additional Pantheon Entities:\n");
for (const [category, count] of Object.entries(breakdown)) {
    console.log(`   ${category}: ${count} entities`);
}
console.log(`\n   TOTAL: ${allPantheons.length} entities\n`);

// Save output
const output = {
    version: '4.0 EXPANSION',
    totalEntities: allPantheons.length,
    categories: breakdown,
    entities: allPantheons
};

const outputPath = '../03-data/additional_pantheons_v4.json';
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`💾 Saved ${allPantheons.length} additional pantheon entities to:`);
console.log(`   ${outputPath}\n`);
console.log("✅ Additional Pantheons Ready for Merge!");
console.log(`\n🎉 With these, total Invocation entities = 237 + ${allPantheons.length} = ${237 + allPantheons.length}!`);
