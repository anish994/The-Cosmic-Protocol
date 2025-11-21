// Clean reimplementation of region consistency validator
// Usage: node tools/validate_region_consistency.new.js "e:\\game1\\World_Bible_folder\\story-nodes.md"

const fs = require('fs');
const path = require('path');

// Args: [2]=file path, remaining are flags like --min-id=, --max-id=, --range=a-b
const fileArg = process.argv[2];
const flags = (process.argv.slice(3) || []);
const file = fileArg && fs.existsSync(fileArg) ? fileArg : path.join('World_Bible_folder', 'story-nodes.md');
if (!fs.existsSync(file)) {
  console.error(`File not found: ${file}`);
  process.exit(1);
}
const md = fs.readFileSync(file, 'utf8');

const lines = md.split(/\r?\n/);
const nodes = [];
let current = null;
let inMeta = false;

function finalize() {
  if (!current) return;
  try {
    const blob = current.raw.join('\n');
    // Fallback extraction
    function grab(regex) {
      const m = blob.match(regex);
      return m ? m[1].trim() : '';
    }
    if (!current.meta.region_id) current.meta.region_id = grab(/\bregion_id:\s*([^\r\n]+)/i);
    if (!current.fields['Region Tag'] && !current.meta.region_id) current.fields['Region Tag'] = grab(/-\s*\*\*Region Tag\*\*:\s*([^\r\n]+)/i);
    if (!current.meta.tone_tags) {
      const tones = grab(/\btone_tags:\s*\[([^\]]+)\]/i);
      if (tones) current.meta.tone_tags = `[${tones}]`;
    }
    if (!current.fields['Tone Tag'] && !current.meta.tone_tags) current.fields['Tone Tag'] = grab(/-\s*\*\*Tone Tag\*\*:\s*([^\r\n]+)/i);
    if (!current.meta.resonance) {
      const res = grab(/\bresonance:\s*\[([^\]]+)\]/i);
      if (res) current.meta.resonance = `[${res}]`;
    }
    if (!current.fields['Resonance Tag'] && !current.meta.resonance) current.fields['Resonance Tag'] = grab(/-\s*\*\*Resonance Tag\*\*:\s*([^\r\n]+)/i);
  } catch (_) {}
  nodes.push(current);
  current = null;
  inMeta = false;
}

for (const raw of lines) {
  const line = raw.replace(/^\uFEFF/, '');
  const header = line.match(/^###\s+Node\s+(\d+):\s+(.+)$/);
  if (header) {
    finalize();
    current = { id: parseInt(header[1], 10), title: header[2].trim(), fields: {}, meta: {}, raw: [] };
    continue;
  }
  if (!current) continue;
  current.raw.push(raw);
  if (/^####\s+Node\s+Metadata/i.test(line)) { inMeta = true; continue; }
  if (inMeta && /^#####\s+Consequence\s+Index/i.test(line)) { inMeta = false; }
  if (inMeta) {
    const mm = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (mm) { current.meta[mm[1].trim()] = (mm[2]||'').trim(); continue; }
  }
  const t = line.trimStart();
  if (t.startsWith('- **')) {
    const m = t.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
    if (m) { current.fields[m[1].trim()] = m[2].trim(); continue; }
  }
}
finalize();

const regionExpectations = [
  { key: /nexus_gate|nexus gate|central hub/i, name: 'Nexus Gate', tones: ['awe','mysterious','harmonic'], resonance: ['Echoes','Pulse'], corruptionLikely: false, allowedTiers: ['Low'] },
  // Specific region mappings should appear before generic patterns to avoid false matches
  { key: /architect graves|sepulcher of echoes|divine ossuary|shamanic ruins|chamber of lost architects/i, name: 'Architect Graves', tones: ['solemn','mystical','mournful','atmospheric'], resonance: ['Echoes','Karma','Renewal','Fate','Memory'], corruptionLikely: false, allowedTiers: ['Medium'] },
  { key: /cps memory zones|archive sanctuaries|protocol vaults|mnemonic chambers|chamber of lost protocols/i, name: 'CPS Memory Zones', tones: ['mystic','solemn','enigmatic','atmospheric'], resonance: ['Memory','Data','Protocol','Eternity','Renewal','Echoes'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /corrupted_zones|corrupted zones|corruption zones|corruption lair/i, name: 'Corrupted Zones', tones: ['dark','urgent','oppressive','heroic','intense','solemn','mystic','atmospheric'], resonance: ['Corruption','ForbiddenKnowledge','Paradox','Echoes','Renewal'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /architect|architect’s chamber|architects? chamber/i, name: 'Architect Domain', tones: ['solemn','mysterious','revelatory','tense','intense'], resonance: ['Fate','Echoes','FinalJudgment'], corruptionLikely: false, allowedTiers: ['Low'] },
  { key: /nexus outer ring|outer ring/i, name: 'Nexus Outer Ring', tones: ['foreboding','enigmatic','mysterious'], resonance: ['Paradox','Echoes'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /convergence nexus|convergence/i, name: 'Convergence Nexus', tones: ['epic','climactic','tense'], resonance: ['Unity','FinalJudgment','Pulse'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /memory loop chamber|memory loop/i, name: 'Memory Loop Chamber', tones: ['challenging','introspective','philosophical','tense'], resonance: ['Paradox','Echoes','Eternity'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /recursion|infinite loop|loop nexus/i, name: 'Recursion/Loop', tones: ['surreal','infinite','philosophical','tense','chaotic','mysterious','awe'], resonance: ['Paradox','Eternity','Echoes'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /loop chamber|loop collapse/i, name: 'Loop Chamber', tones: ['urgent','chaotic','tense','surreal'], resonance: ['Collapse','Paradox','Eternity'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /resonance core|resonance chamber/i, name: 'Resonance Core/Chamber', tones: ['climactic','intense','uncertain','epic','scientific','wonder'], resonance: ['Pulse','FinalJudgment','Unity'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /fusion/i, name: 'Fusion Chamber', tones: ['risky','transformative','tense'], resonance: ['Unity','Pulse'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /skill chamber|skill nexus/i, name: 'Skill Chamber', tones: ['ritualistic','hopeful','calm','transformative'], resonance: ['Renewal','Echoes'], corruptionLikely: false, allowedTiers: ['Low'] },
  { key: /hidden pantheon/i, name: 'Hidden Pantheon Hall', tones: ['secretive','revelatory','reflective'], resonance: ['Fate','FinalJudgment','ForbiddenKnowledge'], corruptionLikely: false, allowedTiers: ['Low'] },
  { key: /^(?!.*corrupted).*pantheon/i, name: 'Pantheon Hall', tones: ['judgmental','dramatic','political','reflective','epic','hopeful','constructive'], resonance: ['FinalJudgment','Fate','Unity','Renewal'], corruptionLikely: false, allowedTiers: ['Low'] },
  { key: /ledger vault|ledger/i, name: 'Ledger Vault', tones: ['judgmental','reflective','solemn'], resonance: ['Karma','Fate'], corruptionLikely: false, allowedTiers: ['Low'] },
  { key: /glyph vault|glyph|hidden glyph regions/i, name: 'Hidden Glyph Regions', tones: ['adventurous','mysterious','dangerous'], resonance: ['ForbiddenKnowledge','Echoes'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /pilgrimage|karmic|pilgrimage path/i, name: 'Pilgrimage Path', tones: ['spiritual','challenging'], resonance: ['Karma','Renewal','Balance'], corruptionLikely: false, allowedTiers: ['Medium'] },
  { key: /echo order arena/i, name: 'Echo Order Arena', tones: ['testing','honorable','challenging'], resonance: ['Fate','Echoes','Karma'], corruptionLikely: false, allowedTiers: ['Medium'] },
  { key: /paradox chamber/i, name: 'Paradox Chamber', tones: ['surreal','decisive','philosophical','tense','reflective'], resonance: ['Paradox','Fate','Legacy'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /lorekeeper|lorekeeper’s archive|lorekeeper_archive/i, name: 'Lorekeeper’s Archive', tones: ['intellectual','mysterious'], resonance: ['ForbiddenKnowledge','Echoes','Wisdom'], corruptionLikely: false, allowedTiers: ['Low','Medium'] },
  { key: /merchant|bazaar/i, name: 'Merchant’s Bazaar', tones: ['opportunistic','risky'], resonance: ['Karma','Echoes','Trade'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /corruption zones|corruption lair/i, name: 'Corruption Zone/Lair', tones: ['dark','urgent','tempting','heroic','intense'], resonance: ['Corruption','ForbiddenKnowledge','Temptation','Renewal'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /echo wilds/i, name: 'Echo Wilds', tones: ['adventurous','tense','mysterious'], resonance: ['Echoes','Paradox'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /secret chamber/i, name: 'Secret Chamber', tones: ['suspenseful','revelatory','mysterious'], resonance: ['ForbiddenKnowledge','Echoes','Fate'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /tournament arena/i, name: 'Tournament Arena', tones: ['competitive','epic','dramatic'], resonance: ['Unity','Echoes','Fate'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /duel grounds/i, name: 'Duel Grounds', tones: ['dramatic','personal','honorable'], resonance: ['Fate','Karma'], corruptionLikely: false, allowedTiers: ['Medium'] },
  { key: /forbidden library/i, name: 'Forbidden Library', tones: ['dark','alluring','mysterious'], resonance: ['ForbiddenKnowledge','Echoes'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /echo order hall/i, name: 'Echo Order Hall', tones: ['suspenseful','emotional','reflective'], resonance: ['Echoes','Fate','Karma'], corruptionLikely: false, allowedTiers: ['Low','Medium'] },
  { key: /infinity chamber/i, name: 'Infinity Chamber', tones: ['infinite','philosophical'], resonance: ['Eternity','Echoes'], corruptionLikely: true, allowedTiers: ['Medium'] },
  { key: /destiny vault/i, name: 'Destiny Vault', tones: ['epic','mysterious'], resonance: ['Fate','Echoes','Unity'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /karma nexus/i, name: 'Karma Nexus', tones: ['surreal','transformative','fast','consequential','bittersweet'], resonance: ['Karma','Paradox','Eternity','Cascade'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /rebirth chamber/i, name: 'Rebirth Chamber', tones: ['hopeful','epic'], resonance: ['Renewal','Unity','Pulse'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /infinite archive/i, name: 'Infinite Archive', tones: ['infinite','mysterious'], resonance: ['ForbiddenKnowledge','Echoes','Eternity'], corruptionLikely: true, allowedTiers: ['Medium','High'] },
  { key: /corrupted pantheon/i, name: 'Corrupted Pantheon Hall', tones: ['dark','urgent'], resonance: ['Corruption','FinalJudgment','Fate'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /destiny vault|glyph of destiny/i, name: 'Destiny Vault', tones: ['epic','mysterious'], resonance: ['Fate','Unity','Echoes'], corruptionLikely: true, allowedTiers: ['High'] },
  { key: /eclipse nexus/i, name: 'Eclipse Nexus', tones: ['dramatic','epic','tense'], resonance: ['Unity','Fate','Pulse'], corruptionLikely: true, allowedTiers: ['High'] }
  ,{ key: /dreamscape/i, name: 'Dreamscape', tones: ['surreal','prophetic','mysterious','atmospheric'], resonance: ['Vision','Echoes','Paradox','Eternity','Memory'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /forge of creation|cosmic forge/i, name: 'Forge of Creation', tones: ['powerful','risky','epic','transformative'], resonance: ['Creation','Unity','Pulse','Renewal','Paradox'], corruptionLikely: true, allowedTiers: ['High'] }
  ,{ key: /menagerie of the cosmos|celestial menagerie|menagerie cosmos/i, name: 'Menagerie of the Cosmos', tones: ['wonder','curiosity','mysterious'], resonance: ['Diversity','Echoes','Unity'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /temporal nexus/i, name: 'Temporal Nexus', tones: ['urgent','mysterious','tense'], resonance: ['Time','Paradox','Eternity'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /hall of harmony|cosmic symphony/i, name: 'Hall of Harmony', tones: ['harmonic','enlightening','mysterious'], resonance: ['Music','Echoes','Unity'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /loom of fate/i, name: 'Loom of Fate', tones: ['intricate','fateful','reflective'], resonance: ['Fate','FinalJudgment','Karma'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /echo chamber of sorrow|echo chamber sorrow|mourning echo/i, name: 'Echo Chamber of Sorrow', tones: ['sad','reflective','haunting'], resonance: ['Grief','Echoes','Memory'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /festival grounds|festival of shadows/i, name: 'Festival Grounds', tones: ['joyful','dark','surreal'], resonance: ['Duality','Echoes','Catharsis'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /void path/i, name: 'Void Path', tones: ['sad','hopeful','tense'], resonance: ['Innocence','Echoes','Paradox'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /remembrance hall|feast of remembrance/i, name: 'Remembrance Hall', tones: ['sad','joyful','reflective'], resonance: ['Memory','Echoes','Renewal'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /sanctuary of light/i, name: 'Sanctuary of Light', tones: ['dark','graphic','tragic'], resonance: ['Betrayal','Fate','Loss'], corruptionLikely: true, allowedTiers: ['High'] }
  ,{ key: /sorrow garden/i, name: 'Sorrow Garden', tones: ['sad','beautiful','haunting'], resonance: ['Beauty','Memory','Healing'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /despair hall/i, name: 'Despair Hall', tones: ['sad','graphic','cathartic'], resonance: ['Catharsis','Grief','Loss'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /hope sanctuary|dawn of hope/i, name: 'Hope Sanctuary', tones: ['joyful','redemptive','uplifting'], resonance: ['Renewal','Healing','Redemption'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /ruined sanctuary|broken sanctuary/i, name: 'Ruined Sanctuary', tones: ['dark','graphic','tragic'], resonance: ['Loss','Resilience','Betrayal'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /oracle's chamber|sorrowful oracle|oracle chamber/i, name: 'Oracle’s Chamber', tones: ['sad','prophetic','bittersweet'], resonance: ['Fate','Hope','Paradox'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /blood moon fields|blood moon vigil/i, name: 'Blood Moon Fields', tones: ['graphic','tense','tragic'], resonance: ['Sacrifice','Fate','Corruption'], corruptionLikely: true, allowedTiers: ['High'] }
  ,{ key: /reunion grounds|joyful reunion/i, name: 'Reunion Grounds', tones: ['joyful','uplifting','emotional'], resonance: ['Healing','Hope','Renewal'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /madness labyrinth|descent into madness/i, name: 'Madness Labyrinth', tones: ['dark','surreal','tragic'], resonance: ['Insanity','Paradox','Reflection'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /forgiveness sanctuary|light of forgiveness/i, name: 'Forgiveness Sanctuary', tones: ['hopeful','sad','redemptive'], resonance: ['Redemption','Renewal','Healing'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /ashen plains|ashes of hope/i, name: 'Ashen Plains', tones: ['sad','graphic','resilient'], resonance: ['Resilience','Renewal','Loss'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /void choir|song of the lost/i, name: 'Void Choir', tones: ['sad','beautiful','haunting'], resonance: ['Longing','Echoes','Memory'], corruptionLikely: true, allowedTiers: ['Low','Medium'] }
  ,{ key: /grand hall|feast of joy and sorrow/i, name: 'Grand Hall', tones: ['joyful','sad','communal'], resonance: ['Duality','Echoes','Catharsis'], corruptionLikely: false, allowedTiers: ['Low'] }
  ,{ key: /farewell path|final goodbye/i, name: 'Farewell Path', tones: ['sad','beautiful','cathartic'], resonance: ['Parting','Catharsis','Longing'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /mirror chamber|shattered mirror/i, name: 'Mirror Chamber', tones: ['dark','surreal','sad'], resonance: ['Reflection','Paradox','Fate'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /wishing well|orphan’s wish|orphans wish/i, name: 'Wishing Well', tones: ['sad','hopeful','bittersweet'], resonance: ['Hope','Fate','Redemption'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /pact altar|crimson pact/i, name: 'Pact Altar', tones: ['graphic','dark','tense'], resonance: ['Power','Corruption','Fate'], corruptionLikely: true, allowedTiers: ['Medium','High'] }
  ,{ key: /vigil grounds|silent vigil/i, name: 'Vigil Grounds', tones: ['sad','communal','reflective'], resonance: ['Solidarity','Healing','Memory'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /forgiveness hall|joy of forgiveness/i, name: 'Forgiveness Hall', tones: ['joyful','redemptive','uplifting'], resonance: ['Healing','Redemption','Renewal'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /throne room|desolate throne/i, name: 'Throne Room', tones: ['sad','graphic','tragic'], resonance: ['Ambition','Loss','Betrayal'], corruptionLikely: true, allowedTiers: ['Medium','High'] }
  ,{ key: /festival plaza|festival of tears/i, name: 'Festival Plaza', tones: ['sad','joyful','communal'], resonance: ['Catharsis','Duality','Echoes'], corruptionLikely: true, allowedTiers: ['Low','Medium'] }
  ,{ key: /embrace path|last embrace/i, name: 'Embrace Path', tones: ['sad','beautiful','cathartic'], resonance: ['Parting','Catharsis','Longing'], corruptionLikely: false, allowedTiers: ['Low','Medium'] }
  ,{ key: /renewal sanctuary|hope reborn/i, name: 'Renewal Sanctuary', tones: ['joyful','redemptive','uplifting'], resonance: ['Renewal','Healing','Redemption'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /cycle nexus|endless cycle/i, name: 'Cycle Nexus', tones: ['philosophical','sad','hopeful'], resonance: ['Eternity','Paradox','Renewal'], corruptionLikely: true, allowedTiers: ['Medium'] }
  ,{ key: /mythic biomes|mythic_biomes|pantheon wilds|titan gardens|sacred depths|archive of legends/i, name: 'Mythic Biomes', tones: ['mystic','awe','vibrant','atmospheric'], resonance: ['Creation','Pulse','Karma','Echoes','Renewal','Unity'], corruptionLikely: false, allowedTiers: ['Medium','High'] }
  ,{ key: /inverted landmasses|upside-down realms|upside down realms|glitched plateaus|null sanctuaries|chamber of lost dimensions/i, name: 'Inverted Landmasses', tones: ['mystic','disorienting','awe','atmospheric'], resonance: ['Void','Paradox','Collapse','Echoes','Eternity'], corruptionLikely: true, allowedTiers: ['Medium','High'] }

    , { key: /echo fields|reverberant plains|hall of echoes|memory veins|archive of lost voices/i, name: 'Echo Fields', tones: ['mystic', 'reflective', 'haunting', 'atmospheric'], resonance: ['Echoes', 'Memory', 'Pulse', 'Paradox'], corruptionLikely: false, allowedTiers: ['Medium'] }
  ,{ key: /cps memory zones|archive sanctuaries|protocol vaults|mnemonic chambers|chamber of lost protocols/i, name: 'CPS Memory Zones', tones: ['mystic','solemn','enigmatic','atmospheric'], resonance: ['Memory','Data','Protocol','Eternity','Renewal','Echoes'], corruptionLikely: true, allowedTiers: ['Medium','High'] }
];

function findExpectation(regionTag) {
  if (!regionTag) return null;
  const norm = String(regionTag).toLowerCase().replace(/_/g,' ');
  return regionExpectations.find(e => e.key.test(norm)) || null;
}

function tokenize(str){return (str||'').toLowerCase().split(/[^a-z]+/).filter(Boolean);} 
const resonanceAlias = new Map([
  ['first contact','Echoes'],
  ['awakening','Renewal'],
  ['truth','Fate'],
  ['reckoning','FinalJudgment'],
  ['division','FinalJudgment'],
  ['final judgment','FinalJudgment'],
  ['fusion','Unity'],
  ['harmony','Unity'],
  ['glory','Unity'],
  ['finalpulse','Pulse'],
  ['final pulse','Pulse'],
  ['infinity','Eternity'],
  ['legacy','Fate'],
  ['discovery','ForbiddenKnowledge'],
  ['forbidden knowledge','ForbiddenKnowledge'],
  ['knowledge','ForbiddenKnowledge'],
  ['secret','ForbiddenKnowledge'],
  ['balance','Karma'],
  ['recursion','Paradox'],
  ['mystery','ForbiddenKnowledge'],
  ['instability','Collapse'],
  ['revelation','Echoes'],
  ['worthiness','Fate'],
  ['rivalry','Fate'],
  ['wisdom','Echoes'],
  ['trade','Karma'],
  ['purification','Renewal']
  ,['betrayal','Fate']
  ,['restoration','Renewal']
  ,['rebirth','Renewal']
  ,['stasis','Eternity']
  ,['legacy','Fate']
  ,['possibility','Eternity']
  ,['vision','Vision']
  ,['creation','Creation']
  ,['diversity','Diversity']
  ,['time','Time']
  ,['music','Music']
  ,['cascade','Cascade']
  ,['grief','Grief']
  ,['duality','Duality']
  ,['innocence','Innocence']
  ,['memory','Memory']
  ,['beauty','Beauty']
  ,['catharsis','Catharsis']
  ,['loss','Loss']
  ,['healing','Healing']
  ,['insanity','Insanity']
  ,['redemption','Redemption']
  ,['longing','Longing']
  ,['parting','Parting']
  ,['reflection','Reflection']
  ,['power','Power']
  ,['solidarity','Solidarity']
]);
function normalizeResonanceToken(tok){ if(!tok) return tok; const k=String(tok).trim().toLowerCase(); return resonanceAlias.get(k)||tok; }
function canonicalResonance(val){
  if(!val) return '';
  const raw = String(val).replace(/[\[\]]/g,'').trim();
  const first = raw.split(/[\s,|/]+/).filter(Boolean)[0];
  return normalizeResonanceToken(first);
}
const toneAlias = new Map([
  ['mystery','mysterious'],['revelation','revelatory'],['tension','tense'],['drama','dramatic'],['politics','political'],['spirituality','spiritual'],['introspective','philosophical'],['challenging','tense']
]);
function mapToneTokens(toks){return toks.map(t=>toneAlias.get(t)||t);} 

const results = [];
for (const n of nodes){
  const region = n.meta.region_id || n.fields['Region Tag'] || '';
  let tone = '';
  if (n.meta.tone_tags) tone = n.meta.tone_tags.replace(/[\[\]]/g,'').replace(/,/g,' ').trim(); else tone = n.fields['Tone Tag']||'';
  const resonance = canonicalResonance(n.meta.resonance || n.fields['Resonance Tag'] || '');
  const dangerTier = (n.meta.danger_tier||'').trim();
  const eci = (n.fields['Enemy/Corruption Interactions']||'').toLowerCase();
  const textBlob = `${eci} ${n.raw.join(' ')}`;
  const exp = findExpectation(region);
  const issues=[]; const fixes=[];
  if (!exp){
    if (region) issues.push(`No expectation mapping for region '${region}'.`);
    else issues.push('No region specified (region_id or Region Tag missing).');
    fixes.push('Add region_id to Node Metadata.', 'Add mapping in regionExpectations.', 'Document region in regions.md');
  } else {
    const toneTokens = mapToneTokens(tokenize(tone));
    if (!exp.tones.some(t=>toneTokens.includes(t))){
      issues.push(`Tone '${tone}' does not match expected for ${exp.name}: [${exp.tones.join(', ')}].`);
      fixes.push(`Update Tone Tag to include one of: ${exp.tones.join(', ')}`, 'Extend exp.tones if this subregion is special', 'Sync tone_tags list with Tone Tag');
    }
  if (!exp.resonance.includes(resonance)){
      issues.push(`Resonance '${resonance}' atypical for ${exp.name}; expected [${exp.resonance.join(', ')}].`);
      fixes.push('Switch to canonical resonance or add resonance_alias', 'Document exception in regions.md');
    }
    if (!dangerTier){
      issues.push('Missing danger_tier in Node Metadata.');
      fixes.push('Add danger_tier: Low|Medium|High|Boss');
    } else if (exp.allowedTiers && !exp.allowedTiers.includes(dangerTier)){
      issues.push(`danger_tier '${dangerTier}' not typical for ${exp.name}; expected [${exp.allowedTiers.join(', ')}].`);
      fixes.push(`Adjust danger_tier to one of: ${exp.allowedTiers.join(', ')}`, 'Or document exception in regions.md');
    }
    const mentionsCorruption = /(corrupt|corruption|mutate|mutation|sabotage|taint|blight|infect|infection|decay|entropy|void|corruption_delta\s*:\s*[1-9]\d*)/i.test(textBlob);
    if (exp.corruptionLikely && !mentionsCorruption){
      issues.push(`Region ${exp.name} usually has corruption pressure; node lacks corruption interactions.`);
      fixes.push('Add corruption interaction or region_state: Corrupted', 'Add corruption_delta > 0 in a choice');
    }
    if (!exp.corruptionLikely && mentionsCorruption){
      const gated = /(only|gated|restricted)[^\n]{0,60}(surge|secret|hidden|branch|conditional)/i.test(textBlob);
      if (!gated){
        issues.push(`Region ${exp.name} is low-corruption; interactions should be gated.`);
        fixes.push('Gate corruption behind surge/secret flags', 'Move corruption to hidden branch');
      }
    }
  }
  if (!issues.some(i=>/danger_tier/.test(i))) fixes.push('Define creature_tier per region in regions.md');
  results.push({ id: n.id, title: n.title, region, tone, resonance, dangerTier, issues, fixes });
}

// Optional filtering by node id for focused views
let minId = null, maxId = null;
for (const f of flags){
  const m1 = f.match(/^--min-id=(\d+)$/i); if (m1) minId = parseInt(m1[1],10);
  const m2 = f.match(/^--max-id=(\d+)$/i); if (m2) maxId = parseInt(m2[1],10);
  const m3 = f.match(/^--range=(\d+)-(\d+)$/i); if (m3) { minId = parseInt(m3[1],10); maxId = parseInt(m3[2],10); }
}
const inRange = (r)=> (minId==null || (r.id||0)>=minId) && (maxId==null || (r.id||0)<=maxId);

function renderReport(list){
  let s = '# Region Consistency Report\n\n';
  for (const r of list){
    s += `## Node ${r.id}: ${r.title}\n`;
    s += `Region: ${r.region} | Tone: ${r.tone} | Resonance: ${r.resonance} | danger_tier: ${r.dangerTier}\n\n`;
    if (r.issues.length === 0) s += '- Status: PASS\n\n';
    else {
      s += '- Status: CHECK\nIssues:\n';
      for (const i of r.issues) s += `- ${i}\n`;
      s += 'Suggested fixes:\n';
      for (const f of r.fixes.slice(0,5)) s += `- ${f}\n`;
      s += '\n';
    }
  }
  return s;
}

const fullOut = renderReport(results);
const filtered = results.filter(inRange);
const filteredOut = (minId!=null || maxId!=null) ? renderReport(filtered) : '';

let out = fullOut;
for (const r of results){
  out += `## Node ${r.id}: ${r.title}\n`;
  out += `Region: ${r.region} | Tone: ${r.tone} | Resonance: ${r.resonance} | danger_tier: ${r.dangerTier}\n\n`;
  if (r.issues.length === 0) out += '- Status: PASS\n\n';
  else {
    out += '- Status: CHECK\nIssues:\n';
    for (const i of r.issues) out += `- ${i}\n`;
    out += 'Suggested fixes:\n';
    for (const f of r.fixes.slice(0,5)) out += `- ${f}\n`;
    out += '\n';
  }
}

const reportPath = path.join(path.dirname(file), 'region-consistency-report.md');
fs.writeFileSync(reportPath, out, 'utf8');
if (filteredOut){
  const filteredPath = path.join(path.dirname(file), 'region-consistency-report.filtered.md');
  fs.writeFileSync(filteredPath, filteredOut, 'utf8');
}
const debugPath = path.join(path.dirname(file), 'region-consistency-debug.json');
const sampleHead = nodes.slice(0,25).map(n=>({id:n.id,region:n.meta.region_id, tone:n.meta.tone_tags, resonance:n.meta.resonance}));
const sampleTail = nodes.slice(-25).map(n=>({id:n.id,region:n.meta.region_id, tone:n.meta.tone_tags, resonance:n.meta.resonance}));
const summary = {count: nodes.length, minId: Math.min(...nodes.map(n=>n.id||0)), maxId: Math.max(...nodes.map(n=>n.id||0))};
fs.writeFileSync(debugPath, JSON.stringify({ summary, sampleHead, sampleTail }, null, 2));
console.error(`Analyzed ${results.length} nodes -> ${reportPath}`);
if (filteredOut){
  console.error(`Filtered report (${minId||''}-${maxId||''}) -> ${path.join(path.dirname(file), 'region-consistency-report.filtered.md')}`);
}
console.error(`Debug sample written -> ${debugPath}`);
process.stdout.write(out);
