// === COMPREHENSIVE KEYWORD DATABASE ===
// 100+ keywords with 3-layer information system
// Short → Medium → Detailed (description, strengths, weaknesses, combos)
// Source: mini-test.html TAG_DATA

const TAG_DATA = {
    // Placeholder - will be populated from mini-test.html
    // For now, using the simple definitions as fallback
    burn: { name: '🔥 Burn', category: 'damage', color: '#ff6464', short: 'Damage over time', medium: 'DoT effect that ticks over multiple turns', detailed: { description: 'Burn deals fire damage over time', strengths: ['Persistent damage', 'Ignores shields'], weaknesses: ['Can be cleansed'], combos: ['Burn + DoT stacking'] } }
};

console.log('📦 tag-data.js loaded -', Object.keys(TAG_DATA).length, 'keywords');
