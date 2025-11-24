/* Workshop Vedic Data - narrative-focused demo data */
window.Vedic = {
  houses: [
    { id: 1, name: "Self", element: "Fire", planet: "Sun", sign: "Leo", nakshatra: "Magha", lore: "Identity and presence; encourages bold acts." },
    { id: 2, name: "Resources", element: "Earth", planet: "Venus", sign: "Taurus", nakshatra: "Pushya", lore: "Values, resources, and nurture." },
    { id: 3, name: "Communication", element: "Air", planet: "Mercury", sign: "Gemini", nakshatra: "Ashlesha", lore: "Ideas, messages, and storytelling." },
    { id: 4, name: "Home", element: "Earth", planet: "Moon", sign: "Cancer", nakshatra: "Punarvasu", lore: "Roots, shelter, and foundation." },
    { id: 5, name: "Creativity", element: "Fire", planet: "Sun", sign: "Leo", nakshatra: "Pushya", lore: "Play, performance, self-expression." },
    { id: 6, name: "Health", element: "Earth", planet: "Mercury", sign: "Virgo", nakshatra: "Hasta", lore: "Wellness, routine, practical healing." },
    { id: 7, name: "Partnerships", element: "Air", planet: "Venus", sign: "Libra", nakshatra: "Revati", lore: "Relationships and agreements." },
    { id: 8, name: "Transformation", element: "Water", planet: "Mars", sign: "Scorpio", nakshatra: "Bharani", lore: "Rebirth, change, hidden power." },
    { id: 9, name: "Fortune", element: "Fire", planet: "Jupiter", sign: "Sagittarius", nakshatra: "Mula", lore: "Exploration and fortune." },
    { id:10, name: "Career", element: "Earth", planet: "Saturn", sign: "Capricorn", nakshatra: "Shravana", lore: "Public purpose and craft." },
    { id:11, name: "Community", element: "Air", planet: "Jupiter", sign: "Aquarius", nakshatra: "Dhanishta", lore: "Friends, goals, and networks." },
    { id:12, name: "Spirituality", element: "Water", planet: "Ketu", sign: "Pisces", nakshatra: "Revati", lore: "Mysticism, endings, reflection." }
  ],
  planets: {
    Sun: { archetype: "Leader", theme: "Confidence and presence" },
    Moon: { archetype: "Nurturer", theme: "Emotional intelligence" },
    Mars: { archetype: "Warrior", theme: "Momentum and bold action" },
    Mercury: { archetype: "Messenger", theme: "Agility and adaptation" },
    Jupiter: { archetype: "Sage", theme: "Growth and fortune" },
    Venus: { archetype: "Artist", theme: "Beauty and value" },
    Saturn: { archetype: "Juror", theme: "Discipline and structure" },
    Rahu: { archetype: "Maverick", theme: "Disruption and chance" },
    Ketu: { archetype: "Mystic", theme: "Release and detachment" }
  },
  nakshatras: {
    Magha: { trait: "Noble", short: "Royalty and lineage" },
    Pushya: { trait: "Nurturing", short: "Protection and growth" },
    Ashlesha: { trait: "Curious", short: "Mystery and strategy" },
    Bharani: { trait: "Transformative", short: "Birth and sacrifice" },
    Mula: { trait: "Root-seeker", short: "Search and discovery" },
    Punarvasu: { trait: "Restorative", short: "Renewal and return" },
    Hasta: { trait: "Hands-on", short: "Skill & craft" },
    Revati: { trait: "Guide", short: "Safe passage & support" },
    Dhanishta: { trait: "Weaver", short: "Network & alliance" },
    // Add more as-needed
  },
  signs: {
    Aries: { element: "Fire", theme: "Initiative and force" },
    Taurus: { element: "Earth", theme: "Stability and comfort" },
    Gemini: { element: "Air", theme: "Communication and play" },
    Cancer: { element: "Water", theme: "Emotion and shelter" },
    Leo: { element: "Fire", theme: "Presence and pride" },
    Virgo: { element: "Earth", theme: "Details and service" },
    Libra: { element: "Air", theme: "Harmony and partnerships" },
    Scorpio: { element: "Water", theme: "Intimacy and transformation" },
    Sagittarius: { element: "Fire", theme: "Exploration and teaching" },
    Capricorn: { element: "Earth", theme: "Craft and status" },
    Aquarius: { element: "Air", theme: "Community and futurism" },
    Pisces: { element: "Water", theme: "Dreaming and dissolution" }
  },
  narrativeTemplates: [
    { cond: { house: null, planet: "Mars" }, text: "the card throbs with aggressive momentum, urging bold decisive moves." },
    { cond: { house: 8, planet: "Mars" }, text: "the card's transformation aspects are amplified by a warrior’s edge." },
    { cond: { house: 4, planet: "Moon" }, text: "this card offers protective, nurturing flows to allied cards." },
    { cond: { house: 5, planet: "Sun" }, text: "the card shines with confident creative expressions." }
  ]
};
