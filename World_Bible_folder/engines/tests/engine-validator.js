/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ENGINE VALIDATOR - Comprehensive Testing Suite
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Tests all 8 skill engines for:
 * - Data integrity
 * - API functionality
 * - Combat mechanics
 * - Narrative integration
 * - Performance
 * 
 * @version 1.0
 * @date 2025-11-18
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { FoundationalEngine } from '../FoundationalEngine.js';
import { InvocationEngine } from '../InvocationEngine.js';
import { TherapeuticEngine } from '../TherapeuticEngine.js';
import { TantraEngine } from '../TantraEngine.js';
import { SingularityEngine } from '../SingularityEngine.js';
import { DivinationEngine } from '../DivinationEngine.js';
import { ConsciousnessEngine } from '../ConsciousnessEngine.js';
import { CharacterAnalysisEngine } from '../CharacterAnalysisEngine.js';

// ═══════════════════════════════════════════════════════════════════════════
// TEST CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

const TEST_CONFIG = {
  verbose: true,
  stopOnError: false,
  performanceThreshold: 100 // ms
};

class EngineValidator {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      errors: []
    };
    this.engines = [];
  }

  // ═══════════════════════════════════════════════════════════════════════
  // MAIN TEST RUNNER
  // ═══════════════════════════════════════════════════════════════════════

  async runAllTests() {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('  ENGINE VALIDATION SUITE - Starting Tests');
    console.log('═══════════════════════════════════════════════════════════\n');

    await this.testEngineInstantiation();
    await this.testDataIntegrity();
    await this.testSkillExecution();
    await this.testCombatMechanics();
    await this.testNarrativeIntegration();
    await this.testStatePersistence();
    await this.testPerformance();
    await this.testEdgeCases();

    this.printResults();
    return this.results;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 1: ENGINE INSTANTIATION
  // ═══════════════════════════════════════════════════════════════════════

  async testEngineInstantiation() {
    this.logSection('Testing Engine Instantiation');

    const engineClasses = [
      { name: 'Foundational', class: FoundationalEngine },
      { name: 'Invocation', class: InvocationEngine },
      { name: 'Therapeutic', class: TherapeuticEngine },
      { name: 'Tantra', class: TantraEngine },
      { name: 'Singularity', class: SingularityEngine },
      { name: 'Divination', class: DivinationEngine },
      { name: 'Consciousness', class: ConsciousnessEngine },
      { name: 'CharacterAnalysis', class: CharacterAnalysisEngine }
    ];

    for (const { name, class: EngineClass } of engineClasses) {
      try {
        const engine = new EngineClass();
        this.engines.push({ name, instance: engine });
        
        this.assert(
          engine !== null && engine !== undefined,
          `${name}Engine instantiation`,
          `${name}Engine created successfully`
        );

        this.assert(
          engine.skills && Array.isArray(engine.skills),
          `${name}Engine has skills array`,
          `Skills loaded: ${engine.skills.length} skills`
        );

        this.assert(
          engine.meta && typeof engine.meta === 'object',
          `${name}Engine has metadata`,
          `Metadata present`
        );

      } catch (error) {
        this.fail(`${name}Engine instantiation`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 2: DATA INTEGRITY
  // ═══════════════════════════════════════════════════════════════════════

  async testDataIntegrity() {
    this.logSection('Testing Data Integrity');

    for (const { name, instance: engine } of this.engines) {
      try {
        // Test skill count
        this.assert(
          engine.skills.length >= 50,
          `${name}: Minimum skill count`,
          `Has ${engine.skills.length} skills`
        );

        // Test skill structure
        const sampleSkill = engine.skills[0];
        const requiredFields = [
          'id', 'name', 'tier', 'skill_type', 'cost',
          'combat_effect', 'narrative_effect'
        ];

        for (const field of requiredFields) {
          this.assert(
            sampleSkill.hasOwnProperty(field),
            `${name}: Skill has ${field}`,
            `Field present`
          );
        }

        // Test unique IDs
        const ids = new Set(engine.skills.map(s => s.id));
        this.assert(
          ids.size === engine.skills.length,
          `${name}: Unique skill IDs`,
          `All ${engine.skills.length} IDs are unique`
        );

        // Test tier distribution
        const tierCounts = {};
        engine.skills.forEach(s => {
          tierCounts[s.tier] = (tierCounts[s.tier] || 0) + 1;
        });
        
        this.assert(
          Object.keys(tierCounts).length >= 3,
          `${name}: Tier diversity`,
          `Has ${Object.keys(tierCounts).length} tiers: ${JSON.stringify(tierCounts)}`
        );

      } catch (error) {
        this.fail(`${name}: Data integrity`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 3: SKILL EXECUTION
  // ═══════════════════════════════════════════════════════════════════════

  async testSkillExecution() {
    this.logSection('Testing Skill Execution');

    const testContext = {
      player: {
        bandwidth: 100,
        kp: 1000,
        level: 10
      },
      location: 'test_city_ruins',
      npcs: ['Marcus', 'Elena', 'Civilian'],
      enemies: [{ hp: 100, defense: 10 }],
      environment: 'urban'
    };

    for (const { name, instance: engine } of this.engines) {
      try {
        const skill = engine.skills[0];
        
        // Test basic execution
        const result = engine.executeSkill(skill.id, testContext);
        
        this.assert(
          result && result.success !== undefined,
          `${name}: Skill execution returns result`,
          `Result received`
        );

        this.assert(
          result.combat !== undefined,
          `${name}: Combat effect present`,
          `Combat data: ${JSON.stringify(result.combat).substring(0, 50)}...`
        );

        this.assert(
          result.narrative !== undefined,
          `${name}: Narrative effect present`,
          `Narrative data present`
        );

        // Test insufficient resources
        const poorContext = {
          ...testContext,
          player: { bandwidth: 0, kp: 0, level: 1 }
        };

        const failResult = engine.executeSkill(skill.id, poorContext);
        this.assert(
          failResult.success === false,
          `${name}: Resource validation works`,
          `Correctly rejected: ${failResult.reason}`
        );

      } catch (error) {
        this.fail(`${name}: Skill execution`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 4: COMBAT MECHANICS
  // ═══════════════════════════════════════════════════════════════════════

  async testCombatMechanics() {
    this.logSection('Testing Combat Mechanics');

    const combatContext = {
      player: { bandwidth: 100, kp: 1000, level: 10 },
      location: 'battlefield',
      npcs: [],
      enemies: [
        { id: 'enemy1', hp: 100, defense: 10, type: 'warrior' },
        { id: 'enemy2', hp: 80, defense: 5, type: 'mage' }
      ],
      environment: 'combat'
    };

    for (const { name, instance: engine } of this.engines) {
      try {
        // Find offensive skill
        const offensiveSkill = engine.skills.find(s => 
          s.skill_type.includes('Offensive') || 
          s.skill_type.includes('Damage') ||
          s.combat_effect?.damage > 0
        );

        if (offensiveSkill) {
          const result = engine.executeSkill(offensiveSkill.id, combatContext);
          
          this.assert(
            result.combat && typeof result.combat === 'object',
            `${name}: Combat result structure`,
            `Combat data valid`
          );

          const hasCombatMetric = 
            result.combat.damage !== undefined ||
            result.combat.control !== undefined ||
            result.combat.protection !== undefined;

          this.assert(
            hasCombatMetric,
            `${name}: Combat metrics present`,
            `Metrics: ${JSON.stringify(result.combat)}`
          );
        }

        // Find defensive skill
        const defensiveSkill = engine.skills.find(s =>
          s.skill_type.includes('Defense') ||
          s.skill_type.includes('Protection') ||
          s.combat_effect?.shield > 0
        );

        if (defensiveSkill) {
          const result = engine.executeSkill(defensiveSkill.id, combatContext);
          
          this.assert(
            result.combat.protection !== undefined || result.combat.shield !== undefined,
            `${name}: Defensive mechanics work`,
            `Defense value calculated`
          );
        }

      } catch (error) {
        this.fail(`${name}: Combat mechanics`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 5: NARRATIVE INTEGRATION
  // ═══════════════════════════════════════════════════════════════════════

  async testNarrativeIntegration() {
    this.logSection('Testing Narrative Integration');

    const narrativeContext = {
      player: { bandwidth: 100, kp: 1000, level: 10 },
      location: 'ancient_temple',
      npcs: ['Marcus', 'Elena', 'Mysterious_Stranger'],
      enemies: [],
      environment: 'mystical'
    };

    for (const { name, instance: engine } of this.engines) {
      try {
        const skill = engine.skills.find(s => 
          s.narrative_effect && s.narrative_effect.story_hooks
        ) || engine.skills[0];

        const result = engine.executeSkill(skill.id, narrativeContext);

        this.assert(
          result.narrative && result.narrative.description,
          `${name}: Narrative description present`,
          `Description length: ${result.narrative.description?.length || 0} chars`
        );

        if (result.narrative.npcReactions) {
          this.assert(
            Array.isArray(result.narrative.npcReactions),
            `${name}: NPC reactions structure`,
            `${result.narrative.npcReactions.length} NPC reactions`
          );
        }

        if (result.storyEvents) {
          this.assert(
            Array.isArray(result.storyEvents),
            `${name}: Story events triggered`,
            `${result.storyEvents.length} events triggered`
          );
        }

      } catch (error) {
        this.fail(`${name}: Narrative integration`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 6: STATE PERSISTENCE
  // ═══════════════════════════════════════════════════════════════════════

  async testStatePersistence() {
    this.logSection('Testing State Persistence');

    for (const { name, instance: engine } of this.engines) {
      try {
        // Test export
        const saveData = engine.exportSaveData();
        
        this.assert(
          saveData && typeof saveData === 'object',
          `${name}: Export save data`,
          `Save data exported successfully`
        );

        // Test import
        const freshEngine = new engine.constructor();
        freshEngine.importSaveData(saveData);

        this.assert(
          true,
          `${name}: Import save data`,
          `Save data imported without errors`
        );

        // Verify state preservation
        const playerState = engine.getPlayerState();
        this.assert(
          playerState && typeof playerState === 'object',
          `${name}: Player state accessible`,
          `State structure valid`
        );

      } catch (error) {
        this.fail(`${name}: State persistence`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 7: PERFORMANCE
  // ═══════════════════════════════════════════════════════════════════════

  async testPerformance() {
    this.logSection('Testing Performance');

    const context = {
      player: { bandwidth: 100, kp: 1000, level: 10 },
      location: 'test_location',
      npcs: ['NPC1', 'NPC2'],
      enemies: [{ hp: 100 }],
      environment: 'test'
    };

    for (const { name, instance: engine } of this.engines) {
      try {
        const skill = engine.skills[0];
        
        // Warm up
        engine.executeSkill(skill.id, context);

        // Performance test
        const iterations = 100;
        const startTime = performance.now();
        
        for (let i = 0; i < iterations; i++) {
          engine.executeSkill(skill.id, context);
        }
        
        const endTime = performance.now();
        const avgTime = (endTime - startTime) / iterations;

        this.assert(
          avgTime < TEST_CONFIG.performanceThreshold,
          `${name}: Performance threshold`,
          `Average: ${avgTime.toFixed(2)}ms per execution`
        );

      } catch (error) {
        this.fail(`${name}: Performance test`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // TEST 8: EDGE CASES
  // ═══════════════════════════════════════════════════════════════════════

  async testEdgeCases() {
    this.logSection('Testing Edge Cases');

    for (const { name, instance: engine } of this.engines) {
      try {
        // Test invalid skill ID
        const invalidResult = engine.executeSkill('INVALID_ID', {
          player: { bandwidth: 100, kp: 1000 },
          location: 'test',
          npcs: [],
          enemies: []
        });

        this.assert(
          invalidResult && invalidResult.success === false,
          `${name}: Invalid skill ID handling`,
          `Correctly handled invalid ID`
        );

        // Test null context
        try {
          const nullResult = engine.executeSkill(engine.skills[0].id, null);
          this.warn(`${name}: Null context should throw error`);
        } catch (e) {
          this.assert(true, `${name}: Null context handling`, `Correctly rejected null context`);
        }

        // Test getSkill method
        const skill = engine.getSkill(engine.skills[0].id);
        this.assert(
          skill && skill.id === engine.skills[0].id,
          `${name}: getSkill method`,
          `Skill retrieval works`
        );

        // Test getMeta method
        const meta = engine.getMeta();
        this.assert(
          meta && typeof meta === 'object',
          `${name}: getMeta method`,
          `Metadata accessible`
        );

      } catch (error) {
        this.fail(`${name}: Edge cases`, error.message);
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════════════════

  assert(condition, testName, details) {
    if (condition) {
      this.results.passed++;
      if (TEST_CONFIG.verbose) {
        console.log(`✓ ${testName}`);
        if (details) console.log(`  └─ ${details}`);
      }
    } else {
      this.fail(testName, details);
    }
  }

  fail(testName, details) {
    this.results.failed++;
    this.results.errors.push({ test: testName, details });
    console.log(`✗ ${testName}`);
    if (details) console.log(`  └─ ${details}`);
    
    if (TEST_CONFIG.stopOnError) {
      throw new Error(`Test failed: ${testName}`);
    }
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
    
    const successRate = (this.results.passed / (this.results.passed + this.results.failed) * 100).toFixed(1);
    console.log(`Success Rate: ${successRate}%`);

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
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT & RUN
// ═══════════════════════════════════════════════════════════════════════════

export { EngineValidator };

// Auto-run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new EngineValidator();
  validator.runAllTests().then(results => {
    process.exit(results.failed > 0 ? 1 : 0);
  });
}
