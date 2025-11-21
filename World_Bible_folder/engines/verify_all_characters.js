
import { Suryanatha, Vira, Rajas, Anaya, Prakash, Ishani, Dev, Tara, Arun } from './LivingCharacterSystem.js';
import { Seraph9, Vex, Lira, Null, Sable, Prism, Hex, Cipher } from './PostHumanCults_Batch2.js';
import { FragmentAlpha, BetaNull, GammaVoid, DeltaShade, Epsilon } from './RogueCPSFragments_Batch3.js';
import { Zeta, Theta, Malakar, Veyra, Sorn, Nyx, Kira } from './Mixed_Batch4.js';
import { Janya, Tovin, Sira, Ryn, Vela, Vayun, Lirael, Saran } from './RelicSeekers_Architects_Batch5.js';
import { Miren, Eshan, Dharvin, Anya, Kavan, Mira, Orin, ArchivistVeyra } from './Architects_Karmic_Batch6.js';
import { NullWitness, ScribeOfParity, EchoOfTheUnseen, QuantumAuditor, ParallaxEnvoy, SilentLedger, ObserverPrime } from './Observers_Batch7.js';
import { ParadoxChild, LaxusBloodsage } from './Mythic_Legends_Batch8.js';

const mockMemorySystem = {
  getMemory: () => null,
  saveMemory: () => {},
  getRelationships: () => ({}),
  updateRelationship: () => {}
};

const mockWorldState = {
  resonance: 'Neutral',
  corruptionLevel: 0,
  loopCount: 1,
  activeFactions: []
};

const characters = [
  { name: 'Suryanatha', class: Suryanatha },
  { name: 'Vira', class: Vira },
  { name: 'Rajas', class: Rajas },
  { name: 'Anaya', class: Anaya },
  { name: 'Prakash', class: Prakash },
  { name: 'Ishani', class: Ishani },
  { name: 'Dev', class: Dev },
  { name: 'Tara', class: Tara },
  { name: 'Arun', class: Arun },
  
  { name: 'Seraph9', class: Seraph9 },
  { name: 'Vex', class: Vex },
  { name: 'Lira', class: Lira },
  { name: 'Null', class: Null },
  { name: 'Sable', class: Sable },
  { name: 'Prism', class: Prism },
  { name: 'Hex', class: Hex },
  { name: 'Cipher', class: Cipher },
  
  { name: 'FragmentAlpha', class: FragmentAlpha },
  { name: 'BetaNull', class: BetaNull },
  { name: 'GammaVoid', class: GammaVoid },
  { name: 'DeltaShade', class: DeltaShade },
  { name: 'Epsilon', class: Epsilon },
  
  { name: 'Zeta', class: Zeta },
  { name: 'Theta', class: Theta },
  { name: 'Malakar', class: Malakar },
  { name: 'Veyra', class: Veyra },
  { name: 'Sorn', class: Sorn },
  { name: 'Nyx', class: Nyx },
  { name: 'Kira', class: Kira },
  
  { name: 'Janya', class: Janya },
  { name: 'Tovin', class: Tovin },
  { name: 'Sira', class: Sira },
  { name: 'Ryn', class: Ryn },
  { name: 'Vela', class: Vela },
  { name: 'Vayun', class: Vayun },
  { name: 'Lirael', class: Lirael },
  { name: 'Saran', class: Saran },
  
  { name: 'Miren', class: Miren },
  { name: 'Eshan', class: Eshan },
  { name: 'Dharvin', class: Dharvin },
  { name: 'Anya', class: Anya },
  { name: 'Kavan', class: Kavan },
  { name: 'Mira', class: Mira },
  { name: 'Orin', class: Orin },
  { name: 'ArchivistVeyra', class: ArchivistVeyra },
  
  { name: 'NullWitness', class: NullWitness },
  { name: 'ScribeOfParity', class: ScribeOfParity },
  { name: 'EchoOfTheUnseen', class: EchoOfTheUnseen },
  { name: 'QuantumAuditor', class: QuantumAuditor },
  { name: 'ParallaxEnvoy', class: ParallaxEnvoy },
  { name: 'SilentLedger', class: SilentLedger },
  { name: 'ObserverPrime', class: ObserverPrime },
  
  { name: 'ParadoxChild', class: ParadoxChild },
  { name: 'LaxusBloodsage', class: LaxusBloodsage }
];

console.log('Starting verification of ' + characters.length + ' characters...');

let successCount = 0;
let failCount = 0;

characters.forEach(char => {
  try {
    const instance = new char.class(mockMemorySystem, mockWorldState);
    if (instance.id && instance.name) {
      // console.log(`[OK] ${char.name} initialized successfully.`);
      successCount++;
    } else {
      console.error(`[FAIL] ${char.name} initialized but missing id or name.`);
      failCount++;
    }
  } catch (error) {
    console.error(`[FAIL] ${char.name} threw error during initialization:`, error.message);
    failCount++;
  }
});

console.log('---------------------------------------------------');
console.log(`Verification Complete.`);
console.log(`Success: ${successCount}`);
console.log(`Failed: ${failCount}`);

if (failCount === 0) {
  console.log('ALL CHARACTERS VERIFIED SUCCESSFULLY.');
  process.exit(0);
} else {
  console.log('SOME CHARACTERS FAILED VERIFICATION.');
  process.exit(1);
}
