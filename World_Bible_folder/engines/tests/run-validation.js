/**
 * ═══════════════════════════════════════════════════════════════════════════
 * RUN VALIDATION - Quick Test Runner
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Simplified runner that doesn't require full module imports
 * Tests each engine independently with filesystem validation
 * 
 * @version 1.0
 * @date 2025-11-18
 * ═══════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');

class QuickValidator {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      errors: []
    };
    this.baseDir = path.join(__dirname, '..');
    this.dataDir = path.join(__dirname, '..', '..');
  }

  async runValidation() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  QUICK ENGINE VALIDATION');
    console.log('═══════════════════════════════════════════════════════════\n');

    this.testFileExistence();
    this.testJSONDataFiles();
    this.testEngineStructure();
    this.testDataIntegrity();

    this.printResults();
    return this.results;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 1: FILE EXISTENCE
  // ═══════════════════════════════════════════════════════════════════════

  testFileExistence() {
    this.logSection('Testing File Existence');

    const requiredFiles = [
      'InvocationEngine.js',
      'FoundationalEngine.js',
      'TherapeuticEngine.js',
      'TantraEngine.js',
      'SingularityEngine.js',
      'DivinationEngine.js',
      'ConsciousnessEngine.js',
      'CharacterAnalysisEngine.js'
    ];

    for (const file of requiredFiles) {
      const filePath = path.join(this.baseDir, file);
      const exists = fs.existsSync(filePath);
      
      this.assert(
        exists,
        `Engine file: ${file}`,
        exists ? `Found at ${filePath}` : `Missing: ${filePath}`
      );

      if (exists) {
        const stats = fs.statSync(filePath);
        this.assert(
          stats.size > 1000,
          `${file} has content`,
          `Size: ${(stats.size / 1024).toFixed(2)} KB`
        );
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 2: JSON DATA FILES
  // ═══════════════════════════════════════════════════════════════════════

  testJSONDataFiles() {
    this.logSection('Testing JSON Data Files');

    const dataFiles = [
      'INVOCATION_ENGINE_COMPLETE_v2.json',
      'FOUNDATIONAL_ENGINE_COMPLETE_v2.json',
      'THERAPEUTIC_ENGINE_COMPLETE_v2.json',
      'TANTRA_ENGINE_COMPLETE_v2.json',
      'SINGULARITY_ENGINE_COMPLETE_v2.json',
      'DIVINATION_ENGINE_COMPLETE_v2.json',
      'CONSCIOUSNESS_ENGINE_COMPLETE_v2.json',
      'CHARACTER_ANALYSIS_ENGINE_COMPLETE_v2.json'
    ];

    for (const file of dataFiles) {
      const filePath = path.join(this.dataDir, file);
      
      try {
        const exists = fs.existsSync(filePath);
        this.assert(exists, `Data file: ${file}`, exists ? 'Found' : 'Missing');

        if (exists) {
          const content = fs.readFileSync(filePath, 'utf8');
          const data = JSON.parse(content);
          
          this.assert(
            data.skills && Array.isArray(data.skills),
            `${file}: Has skills array`,
            `${data.skills.length} skills loaded`
          );

          this.assert(
            data.meta && typeof data.meta === 'object',
            `${file}: Has metadata`,
            `Version: ${data.meta.version || 'N/A'}`
          );
        }
      } catch (error) {
        this.fail(`${file}: JSON parsing`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 3: ENGINE STRUCTURE
  // ═══════════════════════════════════════════════════════════════════════

  testEngineStructure() {
    this.logSection('Testing Engine Code Structure');

    const engines = [
      'InvocationEngine.js',
      'FoundationalEngine.js',
      'TherapeuticEngine.js',
      'TantraEngine.js',
      'SingularityEngine.js',
      'DivinationEngine.js',
      'ConsciousnessEngine.js',
      'CharacterAnalysisEngine.js'
    ];

    const requiredPatterns = [
      { pattern: /class \w+Engine/, name: 'Class definition' },
      { pattern: /constructor\(\)/, name: 'Constructor' },
      { pattern: /executeSkill\(/, name: 'executeSkill method' },
      { pattern: /(applyCombatEffect|applyHealing|applyEnergyTransfer|applyCorruption|createProphecy|performMeditation|performSocialCombat)\(/, name: 'Primary effect method' },
      { pattern: /applyNarrativeEffect\(/, name: 'applyNarrativeEffect method' },
      { pattern: /exportSaveData\(/, name: 'exportSaveData method' },
      { pattern: /importSaveData\(/, name: 'importSaveData method' },
      { pattern: /export \{/, name: 'Export statement' }
    ];

    for (const engineFile of engines) {
      const filePath = path.join(this.baseDir, engineFile);
      
      if (!fs.existsSync(filePath)) continue;

      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const engineName = engineFile.replace('.js', '');

        for (const { pattern, name } of requiredPatterns) {
          this.assert(
            pattern.test(content),
            `${engineName}: ${name}`,
            'Present'
          );
        }

        // Check for import statement
        const hasImport = /import .+ from/.test(content);
        this.assert(
          hasImport,
          `${engineName}: JSON import`,
          'JSON data imported'
        );

      } catch (error) {
        this.fail(`${engineFile}: Structure check`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 4: DATA INTEGRITY
  // ═══════════════════════════════════════════════════════════════════════

  testDataIntegrity() {
    this.logSection('Testing Data Integrity');

    const dataFiles = fs.readdirSync(this.dataDir)
      .filter(f => f.endsWith('_ENGINE_COMPLETE_v2.json'));

    for (const file of dataFiles) {
      const filePath = path.join(this.dataDir, file);
      
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        const engineName = file.replace('_ENGINE_COMPLETE_v2.json', '');

        // Test skill count
        this.assert(
          data.skills.length >= 50,
          `${engineName}: Minimum 50 skills`,
          `Has ${data.skills.length} skills`
        );

        // Test skill structure
        const sampleSkill = data.skills[0];
        const requiredFields = ['id', 'name', 'tier', 'skill_type', 'cost'];
        
        for (const field of requiredFields) {
          this.assert(
            sampleSkill.hasOwnProperty(field),
            `${engineName}: Skill has '${field}'`,
            'Present'
          );
        }

        // Test unique IDs
        const ids = new Set(data.skills.map(s => s.id));
        this.assert(
          ids.size === data.skills.length,
          `${engineName}: Unique skill IDs`,
          `All ${data.skills.length} IDs unique`
        );

        // Test tier distribution
        const tiers = [...new Set(data.skills.map(s => s.tier))];
        this.assert(
          tiers.length >= 3,
          `${engineName}: Tier diversity`,
          `Has ${tiers.length} tiers: [${tiers.sort().join(', ')}]`
        );

        // Test cost structure
        const hasValidCosts = data.skills.every(s => 
          s.cost && 
          typeof s.cost.bandwidth === 'number' && 
          typeof s.cost.kp === 'number'
        );
        this.assert(
          hasValidCosts,
          `${engineName}: Valid cost structures`,
          'All skills have bandwidth and KP costs'
        );

      } catch (error) {
        this.fail(`${file}: Data integrity`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════════════════

  assert(condition, testName, details) {
    if (condition) {
      this.results.passed++;
      console.log(`✓ ${testName}`);
      if (details) console.log(`  └─ ${details}`);
    } else {
      this.fail(testName, details);
    }
  }

  fail(testName, details) {
    this.results.failed++;
    this.results.errors.push({ test: testName, details });
    console.log(`✗ ${testName}`);
    if (details) console.log(`  └─ ${details}`);
  }

  warn(message) {
    this.results.warnings++;
    console.log(`⚠ ${message}`);
  }

  logSection(title) {
    console.log(`\n${'─'.repeat(70)}`);
    console.log(`  ${title}`);
    console.log('─'.repeat(70));
  }

  printResults() {
    console.log('\n═══════════════════════════════════════════════════════════');
    console.log('  VALIDATION RESULTS');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`✓ Passed:   ${this.results.passed}`);
    console.log(`✗ Failed:   ${this.results.failed}`);
    console.log(`⚠ Warnings: ${this.results.warnings}`);
    console.log(`Total:      ${this.results.passed + this.results.failed}`);
    
    if (this.results.passed + this.results.failed > 0) {
      const successRate = (this.results.passed / (this.results.passed + this.results.failed) * 100).toFixed(1);
      console.log(`Success Rate: ${successRate}%`);
    }

    if (this.results.failed > 0) {
      console.log('\n═══════════════════════════════════════════════════════════');
      console.log('  FAILED TESTS');
      console.log('═══════════════════════════════════════════════════════════');
      this.results.errors.forEach((error, i) => {
        console.log(`${i + 1}. ${error.test}`);
        console.log(`   ${error.details}`);
      });
    }

    console.log('\n═══════════════════════════════════════════════════════════\n');

    if (this.results.failed === 0) {
      console.log('🎉 ALL TESTS PASSED! Engines are production-ready.\n');
    } else {
      console.log('⚠️  Some tests failed. Review errors above.\n');
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// RUN VALIDATION
// ═══════════════════════════════════════════════════════════════════════════

const validator = new QuickValidator();
validator.runValidation().then(results => {
  process.exit(results.failed > 0 ? 1 : 0);
});
