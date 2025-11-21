// Simple MD -> JSON extractor for story-nodes.md
// Usage: node tools/parse_story_nodes.js "World Bible folder/story-nodes.md" > 03-data/story-nodes.json

const fs = require('fs');
const path = require('path');

const file = process.argv[2] || path.join('World Bible folder', 'story-nodes.md');
const md = fs.readFileSync(file, 'utf8');

const lines = md.split(/\r?\n/);
const nodes = [];
let current = null;

function pushCurrent() {
  if (!current) return;
  // Validate required fields
  const required = [
    'Short Description',
    'Tone Tag',
    'Region Tag',
    'Resonance Tag',
    'Narrative Purpose',
    'Choice Variations',
    'Triggers',
    'Consequences',
    'Recursion Variant',
    'Hidden Conditions',
    'Enemy/Corruption Interactions',
  ];
  const missing = required.filter(k => !(k in current.fields) || (k === 'Choice Variations' && current.choices.length < 4));
  current.missing = missing;
  nodes.push({
    id: current.id,
    name: current.title,
    shortDescription: current.fields['Short Description'] || '',
    toneTag: current.fields['Tone Tag'] || '',
    regionTag: current.fields['Region Tag'] || '',
    resonanceTag: current.fields['Resonance Tag'] || '',
    narrativePurpose: current.fields['Narrative Purpose'] || '',
    choiceVariations: current.choices,
    triggers: current.fields['Triggers'] || '',
    consequences: current.fields['Consequences'] || '',
    recursionVariant: current.fields['Recursion Variant'] || '',
    hiddenConditions: current.fields['Hidden Conditions'] || '',
    enemyCorruptionInteractions: current.fields['Enemy/Corruption Interactions'] || '',
  });
  current = null;
}

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const header = line.match(/^### Node\s+(\d+):\s+(.+)$/);
  if (header) {
    pushCurrent();
    current = {
      id: parseInt(header[1], 10),
      title: header[2].trim(),
      fields: {},
      choices: [],
    };
    continue;
  }
  if (!current) continue;
  const field = line.match(/^\- \*\*(.+)\*\*:\s*(.+)$/);
  if (field) {
    current.fields[field[1].trim()] = field[2].trim();
    continue;
  }
  const choice = line.match(/^\s{2}(\d+)\.\s+(.+)$/);
  if (choice) {
    current.choices.push(choice[2].trim());
  }
}
pushCurrent();

console.error(`Parsed ${nodes.length} nodes`);

// Output JSON array
process.stdout.write(JSON.stringify(nodes, null, 2));
