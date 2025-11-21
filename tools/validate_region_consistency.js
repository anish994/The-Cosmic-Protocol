// Validate story nodes against region expectations: tone, danger/creature tier, corruption, lore, environment
// Usage: node tools/validate_region_consistency.js "e:\\game1\\World_Bible_folder\\story-nodes.md"

const fs = require('fs');
const path = require('path');

const fileArg = process.argv[2];
const file = fileArg && fs.existsSync(fileArg) ? fileArg : path.join('World_Bible_folder', 'story-nodes.md');
if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`);
  process.exit(1);
}
const md = fs.readFileSync(file, 'utf8');

// Parser: collects bullets and a YAML-ish Node Metadata block per node
const lines = md.split(/\r?\n/);
const nodes = [];
let current = null;
let inMeta = false;

function finalizeCurrent() {
  if (!current) return;
  // Fallback extraction from raw text for robustness
  try {
    const blob = Array.isArray(current.raw) ? current.raw.join('\n') : '';
    if (blob) {
      if (!current.meta.region_id) {
        const m1 = blob.match(/\bregion_id:\s*([^\r\n]+)/i);
        if (m1) current.meta.region_id = m1[1].trim();
      }
      if (!current.fields['Region Tag'] && !current.meta.region_id) {
        const m2 = blob.match(/-\s*\*\*Region Tag\*\*:\s*([^\r\n]+)/i);
        if (m2) current.fields['Region Tag'] = m2[1].trim();
      }
      if (!current.meta.tone_tags) {
        const t1 = blob.match(/\btone_tags:\s*\[([^\]]+)\]/i);
        if (t1) current.meta.tone_tags = `[${t1[1].trim()}]`;
      }
      if (!current.fields['Tone Tag'] && !current.meta.tone_tags) {
        const t2 = blob.match(/-\s*\*\*Tone Tag\*\*:\s*([^\r\n]+)/i);
        if (t2) current.fields['Tone Tag'] = t2[1].trim();
      }
      if (!current.meta.resonance) {
        const r1 = blob.match(/\bresonance:\s*\[([^\]]+)\]/i);
        if (r1) current.meta.resonance = `[${r1[1].trim()}]`;
      }
      if (!current.fields['Resonance Tag'] && !current.meta.resonance) {
        const r2 = blob.match(/-\s*\*\*Resonance Tag\*\*:\s*([^\r\n]+)/i);
        if (r2) current.fields['Resonance Tag'] = r2[1].trim();
      }
    }
  } catch (_) {}

  nodes.push(current);
  current = null;
  inMeta = false;
}

for (let i = 0; i < lines.length; i++) {
  const raw = lines[i];
  const line = raw.replace(/^\uFEFF/, '');
  const header = line.match(/^###\s+Node\s+(\d+):\s+(.+)$/);
  if (header) {
    finalizeCurrent();
    current = {
      id: parseInt(header[1], 10),
      title: header[2].trim(),
      fields: {},
      meta: {},
      raw: [],
    };
    continue;
  }
  if (!current) continue;

  // Accumulate raw for fallbacks/heuristics
  current.raw.push(raw);

  // Metadata block boundaries
  if (/^####\s+Node\s+Metadata/i.test(line)) {
    inMeta = true;
    continue;
  }
  if (inMeta && /^#####\s+Consequence\s+Index/i.test(line)) {
    inMeta = false;
  }

  // Bulleted field: - **Key:** Value
  const t = line.trimStart();
  if (t.startsWith('- **')) {
    const m = t.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
    if (m) {
      current.fields[m[1].trim()] = m[2].trim();
      continue;
    }
  }

  // Metadata key: value within Node Metadata section
  if (inMeta) {
    const mm = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (mm) {
      const k = mm[1].trim();
      const v = (mm[2] || '').trim();
      current.meta[k] = v;
      continue;
    }
  }
}
finalizeCurrent();

// Region expectations (keyword-based)
const regionExpectations = [
  {
    key: /architect|architect’s chamber|architects? chamber/i,
    name: 'Architect Domain',
    tones: ['solemn', 'mysterious', 'revelatory', 'tense', 'intense'],
    resonance: ['Fate', 'Echoes', 'FinalJudgment'],
    corruptionLikely: false,
    allowedTiers: ['Low'],
  },
  {
    key: /nexus outer ring|outer ring/i,
    name: 'Nexus Outer Ring',
    tones: ['foreboding', 'enigmatic', 'mysterious'],
    resonance: ['Paradox', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium'],
  },
  {
    key: /convergence nexus|convergence/i,
    name: 'Convergence Nexus',
    tones: ['epic', 'climactic', 'tense'],
    resonance: ['Unity', 'FinalJudgment', 'Pulse'],
    corruptionLikely: true,
    allowedTiers: ['High'],
  },
  {
    key: /memory loop chamber|memory loop/i,
    name: 'Memory Loop Chamber',
    tones: ['challenging', 'introspective', 'philosophical', 'tense'],
    resonance: ['Paradox', 'Echoes', 'Eternity'],
    corruptionLikely: true,
    allowedTiers: ['Medium'],
  },
  {
    key: /loop|nexus/i,
    name: 'Recursion/Loop',
    tones: ['surreal', 'infinite', 'philosophical', 'tense', 'chaotic', 'mysterious', 'awe'],
    resonance: ['Paradox', 'Eternity', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium'],
  },
  {
    key: /resonance core|resonance chamber/i,
    name: 'Resonance Core/Chamber',
    tones: ['climactic', 'intense', 'uncertain', 'epic', 'scientific', 'wonder'],
    resonance: ['Pulse', 'FinalJudgment', 'Unity'],
    corruptionLikely: true,
    allowedTiers: ['High'],
  },
  {
    key: /fusion/i,
    name: 'Fusion Chamber',
    tones: ['risky', 'transformative', 'tense'],
    resonance: ['Unity', 'Pulse'],
    corruptionLikely: true,
    allowedTiers: ['High'],
  },
  {
    key: /skill chamber/i,
    name: 'Skill Chamber',
    tones: ['ritualistic', 'hopeful', 'calm'],
    resonance: ['Renewal', 'Echoes'],
    corruptionLikely: false,
    allowedTiers: ['Low'],
  },
  {
    key: /pantheon/i,
    name: 'Pantheon Hall',
    tones: ['judgmental', 'dramatic', 'political', 'reflective', 'epic'],
    resonance: ['FinalJudgment', 'Fate', 'Unity'],
    corruptionLikely: false,
    allowedTiers: ['Low'],
  },
  {
    key: /ledger vault|ledger/i,
    name: 'Ledger Vault',
    tones: ['judgmental', 'reflective', 'solemn'],
    resonance: ['Karma', 'Fate'],
    corruptionLikely: false,
    allowedTiers: ['Low'],
  },
  {
    key: /glyph vault|glyph/i,
    name: 'Hidden Glyph Regions',
    tones: ['adventurous', 'mysterious', 'dangerous'],
    resonance: ['ForbiddenKnowledge', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium', 'High'],
  },
  {
    key: /pilgrimage|karmic/i,
    name: 'Pilgrimage Path',
    tones: ['spiritual', 'challenging'],
    resonance: ['Karma', 'Renewal'],
    corruptionLikely: false,
    allowedTiers: ['Medium'],
  },
];

function findExpectation(regionTag) {
  if (!regionTag) return null;
  const norm = String(regionTag).toLowerCase().replace(/_/g, ' ');
  return regionExpectations.find(e => e.key.test(norm)) || null;
}

function tokenize(str) {
  return (str || '').toLowerCase().split(/[^a-z]+/).filter(Boolean);
}

// Alias normalization
const resonanceAlias = new Map([
  ['first contact', 'Echoes'],
  ['awakening', 'Renewal'],
  ['truth', 'Fate'],
  ['reckoning', 'FinalJudgment'],
  ['fusion', 'Unity'],
  ['finalpulse', 'Pulse'],
  ['final pulse', 'Pulse'],
  ['infinity', 'Eternity'],
  ['legacy', 'Fate'],
  ['discovery', 'ForbiddenKnowledge'],
  ['balance', 'Karma'],
  ['recursion', 'Paradox'],
  ['mystery', 'ForbiddenKnowledge'],
  ['instability', 'Collapse'],
]);

function normalizeResonance(val) {
  if (!val) return val;
  const key = String(val).trim().toLowerCase();
  return resonanceAlias.get(key) || val;
}

const toneAlias = new Map([
  ['mystery', 'mysterious'],
  ['revelation', 'revelatory'],
  ['tension', 'tense'],
  ['drama', 'dramatic'],
  ['politics', 'political'],
  ['spirituality', 'spiritual'],
  ['introspective', 'philosophical'],
  ['challenging', 'tense'],
]);

function mapToneTokens(tokens) {
  return tokens.map(t => toneAlias.get(t) || t);
}

const results = [];

for (const n of nodes) {
  const id = n.id;
  const region = n.meta.region_id || n.fields['Region Tag'] || '';
  let tone = '';
  if (n.meta.tone_tags) {
    tone = n.meta.tone_tags.replace(/[\[\]]/g, '').replace(/,/g, ' ').trim();
  } else {
    tone = n.fields['Tone Tag'] || '';
  }
  const resonance = (n.meta.resonance ? n.meta.resonance.replace(/[\[\]]/g, '').trim() : '') || n.fields['Resonance Tag'] || '';
  const dangerTier = (n.meta.danger_tier || '').trim();
  const eci = (n.fields['Enemy/Corruption Interactions'] || '').toLowerCase();
  const textBlob = `${eci} ${Array.isArray(n.raw) ? n.raw.join(' ') : ''}`;

  const exp = findExpectation(region);
  const issues = [];
  const fixes = [];

  if (!exp) {
    issues.push(`No expectation mapping for region '${region}'.`);
    fixes.push('Add region mapping in tools/validate_region_consistency.js regionExpectations.',
               `Create a Region Index with canonical ids mapping '${region}' -> group.`,
               'Document region tones/resonance in regions.md for this subregion.');
  } else {
    // Tone check
    const toneTokens = mapToneTokens(tokenize(tone));
    const toneOk = exp.tones.some(t => toneTokens.includes(t));
    if (!toneOk) {
      issues.push(`Tone '${tone}' does not match expected for ${exp.name}: [${exp.tones.join(', ')}].`);
      fixes.push(`Update Tone Tag to include one of: ${exp.tones.join(', ')}.`,
                 'Or extend exp.tones with this subregion-specific tone.',
                 'Align node tone_tags in metadata to match Tone Tag.',
                 'Surface tone_map alias in narrative-rules (Appendix A).');
    }

    // Resonance check
    const resOk = exp.resonance.includes(normalizeResonance(resonance));
    if (!resOk) {
      issues.push(`Resonance '${resonance}' atypical for ${exp.name}; expected one of [${exp.resonance.join(', ')}].`);
      fixes.push('Switch to canonical resonance aligned with region, adding resonance_alias to preserve prose.',
                 `If intentional, add region→resonance exception in a lore note in regions.md for '${region}'.`,
                 'Ensure dialogue templates gate on canonical resonance, not the alias only.');
    }

    // Danger tier
    if (!dangerTier) {
      issues.push('Missing danger_tier in Node Metadata.');
      fixes.push('Add danger_tier to Node Metadata (Low|Medium|High|Boss).');
    } else if (exp.allowedTiers && !exp.allowedTiers.includes(dangerTier)) {
      issues.push(`danger_tier '${dangerTier}' not typical for ${exp.name}; expected one of [${(exp.allowedTiers||[]).join(', ')}].`);
      fixes.push(`Adjust danger_tier to one of: ${(exp.allowedTiers||[]).join(', ')}.`,
                 'Or document an exception in regions.md for this subregion.');
    }

    // Corruption presence
    const mentionsCorruption = /(corrupt|corruption|mutate|mutation|sabotage|taint|blight|infect|infection|decay|entropy|void|corruption_delta\s*:\s*[1-9]\d*)/i.test(textBlob);
    if (exp.corruptionLikely && !mentionsCorruption) {
      issues.push(`Region ${exp.name} typically has corruption pressure; node lacks corruption interactions.`);
      fixes.push('Add a corruption interaction line and/or set region_state to Corrupted/Resonant where applicable.',
                 'Introduce a minor corruption event or risk in choices.onChoose (corruption_delta > 0).',
                 'Hook corruption thresholds to event-driven links in metadata.');
    }
    if (!exp.corruptionLikely && mentionsCorruption) {
      const gated = /(only|gated|restricted)[^\n]{0,60}(surge|secret|hidden|branch|conditional)/i.test(textBlob);
      if (!gated) {
        issues.push(`Region ${exp.name} is usually low-corruption; node includes corruption interactions.`);
        fixes.push('Gate corruption events behind surge/secret flags.',
                   'Reduce corruption references or move them to a hidden branch.');
      }
    }
  }

  // Creature tier reminder
  if (!issues.some(s => s.includes('danger_tier'))) {
    fixes.push('Define creature_tier per region in regions.md and cross-link to nodes.');
  }

  results.push({ id, title: n.title, region, tone, resonance, issues, fixes, dangerTier });
}

// Emit markdown report
let out = '# Region Consistency Report\n\n';
for (const r of results) {
  out += `## Node ${r.id}: ${r.title}\n`;
  out += `Region: ${r.region} | Tone: ${r.tone} | Resonance: ${r.resonance} | danger_tier: ${r.dangerTier||''}\n\n`;
  if (r.issues.length === 0) {
    out += '- Status: PASS\n\n';
  } else {
    out += '- Status: CHECK\n';
    out += 'Issues:\n';
    for (const i of r.issues) out += `- ${i}\n`;
    out += 'Suggested fixes:\n';
    for (const f of r.fixes.slice(0,5)) out += `- ${f}\n`;
    out += '\n';
  }
}

// Write report and debug info
const reportPath = path.join(path.dirname(file), 'region-consistency-report.md');
fs.writeFileSync(reportPath, out, 'utf8');
const debugPath = path.join(path.dirname(file), 'region-consistency-debug.json');
const sampleA = nodes.slice(0, 3).map(x => ({ id: x.id, title: x.title, region: (x.fields['Region Tag']||x.meta.region_id||''), tone: (x.fields['Tone Tag']||x.meta.tone_tags||''), resonance: (x.fields['Resonance Tag']||x.meta.resonance||'') }));
const sampleB = nodes.slice(6, 10).map(x => ({ id: x.id, title: x.title, region: (x.fields['Region Tag']||x.meta.region_id||''), tone: (x.fields['Tone Tag']||x.meta.tone_tags||''), resonance: (x.fields['Resonance Tag']||x.meta.resonance||'') }));
fs.writeFileSync(debugPath, JSON.stringify({ count: nodes.length, sampleA, sampleB }, null, 2), 'utf8');
console.error(`Analyzed ${results.length} nodes -> ${reportPath} (debug: ${debugPath})`);
process.stdout.write(out);

// Validate story nodes against region expectations: tone, danger/creature tier, corruption, lore, environment
// Usage: node tools/validate_region_consistency.js "e:\\game1\\World_Bible_folder\\story-nodes.md"

const fs = require('fs');
const path = require('path');

const fileArg = process.argv[2];
const file = fileArg && fs.existsSync(fileArg) ? fileArg : path.join('World_Bible_folder', 'story-nodes.md');
if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`);
  process.exit(1);
    allowedTiers: ['Low']
}
const md = fs.readFileSync(file, 'utf8');

// Lightweight parser reusing the same conventions as tools/parse_story_nodes.js
const lines = md.split(/\r?\n/);
const nodes = [];
    corruptionLikely: true,
    allowedTiers: ['Medium']
let inMeta = false;
  {
    key: /convergence nexus|convergence/i,
    name: 'Convergence Nexus',
    tones: ['epic', 'climactic', 'tense'],
    resonance: ['Unity', 'FinalJudgment', 'Pulse'],
    corruptionLikely: true,
    allowedTiers: ['High']
  {
    key: /glyph vault|glyph/i,
    name: 'Hidden Glyph Regions',
    tones: ['adventurous', 'mysterious', 'dangerous'],
    resonance: ['ForbiddenKnowledge', 'Echoes'],
    corruptionLikely: true,
  },
  {
    key: /memory loop chamber|memory loop/i,
    name: 'Memory Loop Chamber',
    tones: ['challenging', 'introspective', 'philosophical', 'tense'],
    resonance: ['Paradox', 'Echoes', 'Eternity'],
    corruptionLikely: true,
  },
    allowedTiers: ['Medium']
}

for (let i = 0; i < lines.length; i++) {
  const raw = lines[i];
  const line = raw.replace(/^\uFEFF/, ''); // strip BOM if any
  const header = line.match(/^###\s+Node\s+(\d+):\s+(.+)$/);
    corruptionLikely: true,
    allowedTiers: ['High']
    pushCurrent();
    current = {
      id: parseInt(header[1], 10),
      title: header[2].trim(),
      fields: {},
      meta: {},
    corruptionLikely: true,
    allowedTiers: ['High']
    };
    inMeta = false;
    continue;
  }
  if (!current) continue;

    corruptionLikely: false,
    allowedTiers: ['Low']
  current.raw.push(raw);

  // Detect start/end of Node Metadata block
  if (/^####\s+Node\s+Metadata/i.test(line)) {
    inMeta = true;
    continue;
    corruptionLikely: false,
    allowedTiers: ['Low']
  if (inMeta && /^#####\s+Consequence\s+Index/i.test(line)) {
    inMeta = false;
  }

  // Parse bullet fields like '- **Region Tag:** Value'
  const t = line.trimStart();
    corruptionLikely: true,
    allowedTiers: ['Medium', 'High']
    const m = t.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
    if (m) {
      const key = m[1].trim();
      const val = m[2].trim();
      current.fields[key] = val;
      continue;
    corruptionLikely: false,
    allowedTiers: ['Low']
  }

  // Parse Node Metadata simple YAML-ish key: value
  if (inMeta) {
    const mm = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.+)?$/);
    if (mm) {
      const k = mm[1].trim();
      const v = (mm[2] || '').trim();
      current.meta[k] = v;
      continue;
    }
  }
}
pushCurrent();

// Region expectations (keyword-based)
const regionExpectations = [
  {
    key: /architect|architect’s chamber|architects? chamber/i,
    name: 'Architect Domain',
    tones: ['solemn', 'mysterious', 'revelatory', 'tense', 'intense'],
    resonance: ['Fate', 'Echoes', 'FinalJudgment'],
    corruptionLikely: false,
    allowedTiers: ['Low']
  },
  {
    key: /nexus outer ring|outer ring/i,
    name: 'Nexus Outer Ring',
    tones: ['foreboding', 'enigmatic', 'mysterious'],
    resonance: ['Paradox', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium']
  },
  {
    key: /convergence nexus|convergence/i,
    name: 'Convergence Nexus',
    tones: ['epic', 'climactic', 'tense'],
    resonance: ['Unity', 'FinalJudgment', 'Pulse'],
    corruptionLikely: true,
    allowedTiers: ['High']
  },
  {
    key: /loop|nexus/i,
    name: 'Recursion/Loop',
    tones: ['surreal', 'infinite', 'philosophical', 'tense', 'chaotic', 'mysterious', 'awe'],
    resonance: ['Paradox', 'Eternity', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium']
  },
  {
    key: /resonance core|resonance chamber/i,
    name: 'Resonance Core/Chamber',
    tones: ['climactic', 'intense', 'uncertain', 'epic', 'scientific', 'wonder'],
    resonance: ['Pulse', 'FinalJudgment', 'Unity'],
    corruptionLikely: true,
    allowedTiers: ['High']
  },
  {
    key: /fusion/i,
    name: 'Fusion Chamber',
    tones: ['risky', 'transformative', 'tense'],
    resonance: ['Unity', 'Pulse'],
    corruptionLikely: true,
    allowedTiers: ['High']
  },
  {
    key: /skill chamber/i,
    name: 'Skill Chamber',
    tones: ['ritualistic', 'hopeful', 'calm'],
    resonance: ['Renewal', 'Echoes'],
    corruptionLikely: false,
    allowedTiers: ['Low']
  },
  {
    key: /pantheon/i,
    name: 'Pantheon Hall',
    tones: ['judgmental', 'dramatic', 'political', 'reflective', 'epic'],
    resonance: ['FinalJudgment', 'Fate', 'Unity'],
    corruptionLikely: false,
    allowedTiers: ['Low']
  },
  {
    key: /ledger vault|ledger/i,
    name: 'Ledger Vault',
    tones: ['judgmental', 'reflective', 'solemn'],
    resonance: ['Karma', 'Fate'],
    corruptionLikely: false,
    allowedTiers: ['Low']
  },
  {
    key: /glyph vault|glyph/i,
    name: 'Hidden Glyph Regions',
    tones: ['adventurous', 'mysterious', 'dangerous'],
    resonance: ['ForbiddenKnowledge', 'Echoes'],
    corruptionLikely: true,
    allowedTiers: ['Medium', 'High']
  },
  {
    key: /pilgrimage|karmic/i,
    name: 'Pilgrimage Path',
    tones: ['spiritual', 'challenging'],
    resonance: ['Karma', 'Renewal'],
    corruptionLikely: false,
    allowedTiers: ['Medium']
  },
];

function findExpectation(regionTag) {
  if (!regionTag) return null;
  const norm = String(regionTag).toLowerCase().replace(/_/g, ' ');
  return regionExpectations.find(e => e.key.test(norm)) || null;
}

function tokenize(str) {
  return (str || '').toLowerCase().split(/[^a-z]+/).filter(Boolean);
}

// Minimal alias normalization for resonance and tone
const resonanceAlias = new Map([
  ['first contact', 'Echoes'],
  ['awakening', 'Renewal'],
  ['truth', 'Fate'],
  ['reckoning', 'FinalJudgment'],
  ['fusion', 'Unity'],
  ['finalpulse', 'Pulse'],
  ['final pulse', 'Pulse'],
  ['infinity', 'Eternity'],
  ['legacy', 'Fate'],
  ['discovery', 'ForbiddenKnowledge'],
  ['balance', 'Karma'],
  ['recursion', 'Paradox'],
  ['mystery', 'ForbiddenKnowledge'],
  ['instability', 'Collapse'],
]);

function normalizeResonance(val) {
  if (!val) return val;
  const key = String(val).trim().toLowerCase();
  return resonanceAlias.get(key) || val;
}

const toneAlias = new Map([
  ['mystery', 'mysterious'],
  ['revelation', 'revelatory'],
  ['tension', 'tense'],
  ['drama', 'dramatic'],
  ['politics', 'political'],
  ['spirituality', 'spiritual'],
  ['introspective', 'philosophical'],
  ['challenging', 'tense'],
]);

function mapToneTokens(tokens) {
  return tokens.map(t => toneAlias.get(t) || t);
}

const results = [];

for (const n of nodes) {
  const id = n.id;
  // Prefer explicit bullet fields; fallback to metadata
  // Prefer canonical metadata over prose bullets
  const region = n.meta.region_id || n.fields['Region Tag'] || '';
  let tone = '';
  if (n.meta.tone_tags) {
    tone = n.meta.tone_tags.replace(/[\[\]]/g, '').replace(/,/g, ' ').trim();
  } else {
    tone = n.fields['Tone Tag'] || '';
  }
  const resonance = (n.meta.resonance ? n.meta.resonance.replace(/[\[\]]/g, '').trim() : '') || n.fields['Resonance Tag'] || '';
  const dangerTier = (n.meta.danger_tier || '').trim();
  const eci = (n.fields['Enemy/Corruption Interactions'] || '').toLowerCase();

  const exp = findExpectation(region);
  const issues = [];
  const fixes = [];

  if (!exp) {
    issues.push(`No expectation mapping for region '${region}'.`);
    fixes.push('Add region mapping in tools/validate_region_consistency.js regionExpectations.',
               `Create a Region Index with canonical ids mapping '${region}' -> group.`,
               'Document region tones/resonance in regions.md for this subregion.');
  } else {
  // Tone check
  const toneTokens = mapToneTokens(tokenize(tone));
    const toneOk = exp.tones.some(t => toneTokens.includes(t));
    if (!toneOk) {
      issues.push(`Tone '${tone}' does not match expected for ${exp.name}: [${exp.tones.join(', ')}].`);
      fixes.push(`Update Tone Tag to include one of: ${exp.tones.join(', ')}.`,
                 'Or extend exp.tones with this subregion-specific tone.',
                 'Align node tone_tags in metadata to match Tone Tag.',
                 'Surface tone_map alias in narrative-rules (Appendix A).');
    }

  // Resonance-lore check (coarse)
  const resOk = exp.resonance.includes(normalizeResonance(resonance));
    if (!resOk) {
      issues.push(`Resonance '${resonance}' atypical for ${exp.name}; expected one of [${exp.resonance.join(', ')}].`);
      fixes.push('Switch to canonical resonance aligned with region, adding resonance_alias to preserve prose.',
                 `If intentional, add region→resonance exception in a lore note in regions.md for '${region}'.`,
                 'Ensure dialogue templates gate on canonical resonance, not the alias only.');
    }

    // Danger tier vs region creature tier baseline
    if (!dangerTier) {
      issues.push('Missing danger_tier in Node Metadata.');
      fixes.push('Add danger_tier to Node Metadata (Low|Medium|High|Boss).');
    } else if (exp.allowedTiers && !exp.allowedTiers.includes(dangerTier)) {
      issues.push(`danger_tier '${dangerTier}' not typical for ${exp.name}; expected one of [${(exp.allowedTiers||[]).join(', ')}].`);
      fixes.push(`Adjust danger_tier to one of: ${(exp.allowedTiers||[]).join(', ')}.`,
                 'Or document an exception in regions.md for this subregion.');
    }

    // Corruption presence (heuristic)
  const textBlob = `${eci} ${Array.isArray(n.raw) ? n.raw.join(' ') : ''}`;
  const mentionsCorruption = /(corrupt|corruption|mutate|mutation|sabotage|taint|blight|infect|infection|decay|entropy|void|corruption_delta\s*:\s*[1-9]\d*)/i.test(textBlob);
    if (exp.corruptionLikely && !mentionsCorruption) {
      issues.push(`Region ${exp.name} typically has corruption pressure; node lacks corruption interactions.`);
      fixes.push('Add a corruption interaction line and/or set region_state to Corrupted/Resonant where applicable.',
                 'Introduce a minor corruption event or risk in choices.onChoose (corruption_delta > 0).',
                 'Hook corruption thresholds to event-driven links in metadata.');
    }
    if (!exp.corruptionLikely && mentionsCorruption) {
      const gated = /(only|gated|restricted)[^\n]{0,60}(surge|secret|hidden|branch|conditional)/i.test(textBlob);
      if (!gated) {
        issues.push(`Region ${exp.name} is usually low-corruption; node includes corruption interactions.`);
        fixes.push('Gate corruption events behind surge/secret flags.',
                   'Reduce corruption references or move them to a hidden branch.');
      }
    }
  }

  // Creature tier documentation reminder (only if not already flagged)
  if (!issues.some(s => s.includes('danger_tier'))) {
    fixes.push('Define creature_tier per region in regions.md and cross-link to nodes.');
  }

  results.push({ id, title: n.title, region, tone, resonance, issues, fixes });
}

// Emit markdown report
let out = '# Region Consistency Report\n\n';
for (const r of results) {
  out += `## Node ${r.id}: ${r.title}\n`;
  out += `Region: ${r.region} | Tone: ${r.tone} | Resonance: ${r.resonance} | danger_tier: ${nodes.find(n=>n.id===r.id)?.meta?.danger_tier||''}\n\n`;
  if (r.issues.length === 0) {
    out += '- Status: PASS\n\n';
  } else {
    out += '- Status: CHECK\n';
    out += 'Issues:\n';
    for (const i of r.issues) out += `- ${i}\n`;
    out += 'Suggested fixes:\n';
    for (const f of r.fixes.slice(0,5)) out += `- ${f}\n`;
    out += '\n';
  }
}

// Write report alongside source file
const reportPath = path.join(path.dirname(file), 'region-consistency-report.md');
fs.writeFileSync(reportPath, out, 'utf8');
// Debug: persist parsed samples to a file for offline inspection
const sampleA = nodes.slice(0, 3).map(x => ({ id: x.id, title: x.title, region: (x.fields['Region Tag']||x.meta.region_id||''), tone: (x.fields['Tone Tag']||x.meta.tone_tags||''), resonance: (x.fields['Resonance Tag']||x.meta.resonance||'') }));
const sampleB = nodes.slice(6, 10).map(x => ({ id: x.id, title: x.title, region: (x.fields['Region Tag']||x.meta.region_id||''), tone: (x.fields['Tone Tag']||x.meta.tone_tags||''), resonance: (x.fields['Resonance Tag']||x.meta.resonance||'') }));
const debugPath = path.join(path.dirname(file), 'region-consistency-debug.json');
fs.writeFileSync(debugPath, JSON.stringify({ count: nodes.length, sampleA, sampleB }, null, 2), 'utf8');
console.error(`Analyzed ${results.length} nodes -> ${reportPath} (debug: ${debugPath})`);
// Also echo summary for terminal usage
process.stdout.write(out);
