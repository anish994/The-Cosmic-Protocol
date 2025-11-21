// Story Node Graph Validator
// Usage: node tools/validate_story_graph.js <path-to-story-nodes-md>

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const yaml = require('js-yaml');
const schema = require('../schemas/story-node-graph.schema.json');
const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

function extractNodeBlocks(mdContent) {
  // Extract YAML blocks following '#### Node Metadata' until next section header
  const blocks = [];
  const lines = mdContent.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    if (lines[i].trim().startsWith('#### Node Metadata')) {
      let buf = [];
      i++;
      while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith('### Node') || line.startsWith('#### Node Metadata') || line.startsWith('## Act') || line.startsWith('##### Consequence Index')) {
          break;
        }
        buf.push(line);
        i++;
      }
      const yamlText = buf.join('\n').trim();
      if (!yamlText) continue;
      try {
        const nodeObj = yaml.load(yamlText);
        if (nodeObj && typeof nodeObj === 'object') {
          blocks.push(nodeObj);
        }
      } catch (e) {
        // ignore parse errors for this block; continue
      }
      continue;
    }
    i++;
  }
  return blocks;
}

function main() {
  const argPath = process.argv[2];
  const mdPath = argPath ? path.resolve(process.cwd(), argPath) : path.join(__dirname, '../World Bible folder/story-nodes.md');
  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const nodes = extractNodeBlocks(mdContent);
  let validCount = 0;
  let errors = [];
  nodes.forEach((node, idx) => {
    const valid = validate(node);
    if (!valid) {
      errors.push({ node: node.id || idx, errors: validate.errors });
    } else {
      validCount++;
    }
  });
  if (errors.length) {
    console.log('Validation errors found:');
    errors.forEach(e => {
      console.log(`Node ${e.node}:`);
      e.errors.forEach(err => console.log('  ', err.instancePath || '', err.message));
    });
    process.exit(1);
  } else {
    console.log(`All nodes valid! (${validCount} checked)`);
    process.exit(0);
  }
}

main();
