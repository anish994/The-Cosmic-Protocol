# TURN STRUCTURE & ACTION SYSTEM
## The Cosmic Protocol - Narrative-Driven Combat & Interaction

**Design Philosophy:** Every action is a story beat. Every choice reverberates through the narrative.

---

## CORE TURN STRUCTURE: STORY-BEAT SYSTEM

### What is a "Turn"?

In The Cosmic Protocol, a **turn** is not a traditional game turn—it's a **narrative moment** where the player makes a meaningful choice that advances both the story and combat state.

**Turn = Story Beat + Player Choice + Consequence**

### Turn Types

#### 1. **COMBAT TURN** (Active Conflict)
When engaged in direct confrontation with hostile entities.

**Structure:**
```
SITUATION ASSESSMENT (Auto-displayed)
↓
PLAYER CHOICE PHASE (1 Major + 1 Minor Action)
↓
RESOLUTION PHASE (All actions resolve simultaneously)
↓
CONSEQUENCE PHASE (Story updates, NPC reactions, world changes)
↓
NEXT SITUATION ASSESSMENT
```

**Example:**
```
═══════════════════════════════════════════════════════════
COMBAT TURN 3 - The Void Wraith advances

SITUATION:
• Void Wraith (65% HP) - charging ENTROPY BLAST (next turn)
• Marcus (25% HP, BLEEDING) - "I can't hold much longer!"
• Elena (80% HP, SHIELDED) - covering Marcus
• You (90% HP, 85 BANDWIDTH, 3 KP)

THREAT ANALYSIS:
⚠️ Entropy Blast will deal ~80 damage to all allies (TEAM WIPE RISK)
⚠️ Marcus will die from bleed next turn without healing

YOUR ACTIONS:
═══════════════════════════════════════════════════════════

[MAJOR ACTION - Choose 1]
→ INTERRUPT WRAITH - Use "Disruptor Spike" (Costs: 35 Gnosis, 2 KP)
   Effect: Cancel Entropy Blast, apply Silence (1 turn)
   Risk: Wraith may adapt to interrupts if overused (3rd time)
   
→ EMERGENCY HEAL - Use "Bloom Burst" on Marcus
   Effect: Restore Marcus to 80% HP, remove Bleed
   Risk: Wraith's attack goes through, may still wipe team
   
→ VOID STEP ESCAPE - Phase entire team out of blast radius
   Effect: Dodge Entropy Blast completely
   Risk: Opens void rift (corruption +1), Marcus still bleeding

[MINOR ACTION - Choose 1]
→ Shield Elena - 20 Shield (she can tank the blast)
→ Analyze Wraith - Gain insight into weakness (costs 10 Bandwidth)
→ Rally Marcus - "Hold on!" (boost morale, +15% resist)
→ Tactical Reposition - Move to cover (reduce AOE damage by 30%)

[SPECIAL OPTIONS - Unlocked by skills/choices]
★ VOID+SHADOW FUSION - "Umbral Drift" (RARE SKILL)
   Effect: Phase-walk through Wraith, backstab for critical damage
   Cost: 60 Bandwidth, 3 KP, Corruption +2
   Risk: May attract void entities, shadow faction takes notice
   
★ SACRIFICE PLAY - Take the blast yourself
   Effect: Absorb full damage, save team
   Cost: You drop to critical HP, gain "Martyr's Resolve" buff
   Consequence: Marcus swears loyalty, Elena questions your tactics

[WAIT/OBSERVE]
→ Do nothing - See what happens (dangerous but informative)

═══════════════════════════════════════════════════════════
```

**Turn Resolution:**
All actions resolve **simultaneously**, creating dynamic interactions:
- If you interrupt + Elena shields Marcus → Both happen, team survives easily
- If you heal Marcus but don't interrupt → Heal completes, then blast hits (Marcus survives barely)
- If you Umbral Drift → Wraith interrupted by backstab, blast never fires, but void rift opens

#### 2. **DIALOGUE TURN** (Social Encounter)
When engaged in conversation, negotiation, or social conflict.

**Structure:**
```
NPC STATEMENT/DEMAND
↓
PLAYER RESPONSE OPTIONS (shaped by skills, reputation, past choices)
↓
NPC REACTION + CONSEQUENCE
↓
NEXT DIALOGUE BEAT OR TRANSITION
```

**Example:**
```
═══════════════════════════════════════════════════════════
DIALOGUE TURN 2 - Negotiating with the Underveil Broker

THE BROKER:
"You want passage through the Shadow Gate? That's... expensive.
Especially for someone with YOUR reputation among the Wardens."

[She eyes your equipment, specifically the Void Crystal pulsing at your belt]

"But I might be persuaded. What's it worth to you?"

YOUR SKILLS UNLOCK OPTIONS:
═══════════════════════════════════════════════════════════

[SOCIAL APPROACH]
→ PERSUADE (Requires: Social skill, Trust≥2 with Underveil)
   "We have a common enemy. The Warden's corruption threatens us all."
   Success: She helps for free, future ally
   Failure: She laughs, demands double payment
   
→ INTIMIDATE (Requires: Combat skill, Fear≥3)
   [Activate "Shadow Bind"] "The gate opens. Or you do."
   Success: She opens gate, spreads fear of you (Heat +2)
   Failure: She calls guards, combat encounter

[SKILL-BASED APPROACH]
→ ECHO PULSE - Read her memories (Requires: Echo skill)
   Effect: Discover she lost family to Warden corruption
   Unlock: Compassion dialogue, automatic success
   Cost: 25 Bandwidth
   
→ VOID BRIBE - Offer the Void Crystal
   Effect: Instant success, she's stunned by the offer
   Consequence: Lose powerful item, but gain legendary reputation with Underveil

[KNOWLEDGE APPROACH]
→ REVEAL SECRET (Requires: Knowledge skill, Lore: Shadow Gates)
   "I know about the Recursion Protocol. The gate doesn't need opening."
   Effect: She's impressed, offers alliance
   Unlock: Secret shadow route, bypass gate entirely

[STEALTH APPROACH]
→ SLIP PAST - Use "Shadow Veil" (Requires: Stealth skill)
   Effect: Sneak past while she's distracted
   Risk: If caught (30% chance), permanent enemy
   Success: Save resources, but miss alliance opportunity

[HONEST APPROACH]
→ "I can't pay. But I'm trying to stop something terrible."
   Effect: She evaluates you based on alignment and reputation
   If Light-aligned: She sympathizes, helps for promise of future favor
   If Corrupt: She sees opportunity for blackmail
   
[ATTACK]
→ Combat Turn begins (permanent enemy, Heat +3, Underveil faction hostile)

═══════════════════════════════════════════════════════════
```

#### 3. **EXPLORATION TURN** (World Navigation)
When exploring regions, solving puzzles, or discovering secrets.

**Structure:**
```
ENVIRONMENT DESCRIPTION
↓
AVAILABLE INTERACTIONS (based on skills, tools, state)
↓
PLAYER ACTION
↓
ENVIRONMENTAL RESPONSE + DISCOVERY
```

**Example:**
```
═══════════════════════════════════════════════════════════
EXPLORATION TURN - The Collapsed Archive

LOCATION: Ancient Archive (State: COLLAPSED, Corruption: Moderate)

ENVIRONMENT:
You stand before the shattered remains of the Great Archive. 
Crystalline pillars lie broken, their echo-light flickering weakly.
Void rifts tear through the foundations, spreading corruption.

Marcus: "The Codex we need is buried in there somewhere..."
Elena: "Those void rifts are unstable. One wrong move..."

SKILL-BASED INTERACTIONS:
═══════════════════════════════════════════════════════════

[ECHO SKILLS]
★ ECHO PULSE - Reveal hidden echo nodes
   Cost: 20 Bandwidth
   Effect: Discover 3 salvage points, 1 hidden sanctum, memory fragment
   Unlocks: Lore about the Archive's fall, shortcut to Codex chamber
   
→ ECHO REPAIR - Stabilize echo-light pillars
   Cost: 35 Bandwidth, 2 KP
   Effect: Restore partial structure, safer passage
   Consequence: Attracts echo-sensitive entities (potential ally or threat)

[VOID SKILLS]
★ VOID STEP - Phase through collapsed sections
   Cost: 25 Bandwidth, 1 KP
   Effect: Bypass debris, reach Codex quickly
   Risk: Each void step widens corruption rifts (Corruption +1 per use)
   Warning: Use 3+ times here and the Archive may collapse entirely
   
→ VOID SEAL - Close the corruption rifts
   Cost: 50 Bandwidth, 3 KP
   Effect: Stabilize region (Collapsed → Unstable)
   Benefit: Safer for allies, prevents total collapse
   Risk: Drains you significantly

[BLOOM SKILLS]
★ BLOOM HEAL (Region) - Heal the Archive itself
   Cost: 60 Bandwidth, 3 KP, 10 minutes
   Effect: Collapsed → Stable, corruption reduced by 50%
   Unlock: Restoration Festival event, grateful NPCs, new quests
   Consequence: Word spreads of your power (Fame +2, Heat +1)

[LIGHT SKILLS]
→ LIGHT ASCEND - Purify corruption fronts
   Cost: 40 Bandwidth, 2 KP
   Effect: Create safe paths through corruption
   Benefit: Marcus and Elena can assist more safely
   Unlock: Light-aligned entities may appear to help

[COMBAT SKILLS]
→ STRUCTURAL COLLAPSE - Bring down unstable sections deliberately
   Cost: 30 Bandwidth, 2 KP
   Effect: Clear path by controlled demolition
   Risk: Destroy potential salvage, noise attracts enemies
   Benefit: Fast, direct route

[CRAFTING SKILLS]
★ REPAIR BRIDGE - Rebuild a crossing
   Cost: Stone x3, Metal x2, 5 minutes
   Effect: Create stable path, no resource cost
   Benefit: Safe passage for entire party
   Unlock: Elena teaches you advanced crafting

[KNOWLEDGE SKILLS]
→ ANALYZE STRUCTURE - Understand the architecture
   Cost: 15 Bandwidth
   Effect: Reveal optimal path, hidden mechanisms, trap locations
   Benefit: Avoid all hazards, find secret treasures
   Unlock: Lore about Archive builders, puzzle solutions

[STEALTH SKILLS]
→ SHADOW VEIL - Sneak through quietly
   Cost: 20 Bandwidth
   Effect: Avoid attention, slip past lurking entities
   Risk: Miss opportunities for discovery
   Benefit: Fastest, safest route (if you just need the Codex)

[SOCIAL SKILLS]
→ RALLY TEAM - Coordinate group effort
   Effect: Marcus uses strength to move debris
           Elena uses tech to stabilize structure
           You focus skills more efficiently
   Benefit: Reduced skill costs (−20%), faster progress

[DO NOTHING / OBSERVE]
→ Careful examination (no skill use)
   Effect: Discover subtle details others might miss
   Possible: Find easier path, ancient warning, or hidden danger
   Time: Takes longer, but conserves resources

═══════════════════════════════════════════════════════════

[UNCONVENTIONAL ACTIONS]
→ Attack the Archive (Why? But you can...)
   Effect: Accelerate collapse, enemies investigate the noise
   Consequence: Region becomes Collapsed (terminal state)
   
→ Communicate with Void Rifts (Requires: Void affinity)
   Effect: Negotiate with void entities
   Possible: Void ally, knowledge of deeper mysteries
   Risk: Corruption +3, sanity test

→ Meditate in the Archive
   Effect: Time passes, but you gain insight (random Discovery)
   Possible: Vision of past, prophecy, skill evolution unlock

═══════════════════════════════════════════════════════════
```

#### 4. **CRISIS TURN** (Timed Pressure)
When facing urgent threats requiring immediate action.

**Structure:**
```
URGENT THREAT PRESENTED
↓
COUNTDOWN TIMER / ESCALATION TRACK
↓
RAPID DECISION (may limit options)
↓
IMMEDIATE CONSEQUENCE
```

**Example:**
```
═══════════════════════════════════════════════════════════
⚠️ CRISIS TURN - Corruption Cascade Event ⚠️

The Archive's corruption rifts are CHAIN REACTING!

COUNTDOWN: 3 STORY BEATS until TOTAL COLLAPSE
Current: Unstable → Next: Collapsing → Final: ERASED

Marcus: "We need to move NOW!"
Elena: "The Codex! We can't leave without it!"

SIMULTANEOUS CRISES:
• Void entities pouring through rifts
• Corruption spreading to adjacent regions
• Structural integrity failing (falling debris)
• Codex chamber sealing itself (auto-lock in 2 beats)

YOU HAVE TIME FOR ONE MAJOR ACTION:
═══════════════════════════════════════════════════════════

→ GRAB CODEX & RUN
   Effect: Secure the Codex, escape safely
   Consequence: Archive COLLAPSES, adjacent region corruption spreads
                 Future quests in this area lost forever
                 
→ SEAL THE RIFTS (Requires: Void or Light skill)
   Effect: Stop corruption cascade, save Archive
   Consequence: Codex chamber locks, miss the objective
                 BUT: Save dozens of lives, prevent regional catastrophe
                 Alternative path to Codex unlocked later
                 
→ SPLIT THE PARTY
   Command: Marcus grabs Codex, Elena seals rifts, you hold off entities
   Effect: All objectives met, but all risks maximized
   Risk: 40% chance someone gets hurt or corrupted
          Success: Hero moment, legendary teamwork
          Failure: Loss, guilt, permanent character changes

→ SACRIFICE YOURSELF
   Effect: Use life force to stabilize Archive
   Consequence: You're critically wounded, in coma for 3 chapters
                 Marcus and Elena must continue without you
                 Unlock: Unique "Dreamscape" storyline while unconscious
                 
→ CORRUPT SURGE
   Effect: Embrace corruption, gain massive power surge
   Consequence: You stop the collapse through sheer corrupted force
                Corruption +5 (major alignment shift)
                Unlock: Corruption path, dark powers
                Marcus and Elena: Horrified, trust damaged

→ PRAY / CALL FOR HELP
   Effect: Invoke a deity/entity (if you have Invocation skills)
   Variable: Depends on which entity you call
            Angel: Saves everyone, but you owe divine debt
            Demon: Stops collapse, but corruption spreads differently
            Kami: Nature intervenes, but balance demands future sacrifice

═══════════════════════════════════════════════════════════
```

---

## ACTION ECONOMY

### Major Actions (Choose 1 per Turn)
High-impact, resource-intensive actions:
- **Attack/Offensive Skills** - Direct damage, debuffs
- **Ultimate Abilities** - High-cost, high-reward skills
- **Complex Rituals** - Crafting, region healing, summoning
- **Narrative Decisions** - Choices that branch the story

### Minor Actions (Choose 1 per Turn, or 2 if you skip Major)
Supporting, tactical actions:
- **Buffs/Shields** - Protective skills
- **Movement** - Repositioning, tactical retreats
- **Analysis** - Gather information, scan enemies
- **Item Use** - Consume potions, activate tools
- **Quick Social** - Short dialogue, gestures

### Free Actions (Unlimited, but contextual)
Instantaneous or passive actions:
- **State Shifts** - Change consciousness states
- **Observations** - Notice environmental details
- **Reactions** - Respond to ally/enemy actions
- **Thought** - Internal monologue, planning

### Special Actions (Unlocked by Context)
Unique to specific situations:
- **Combo Skills** - When allies coordinate
- **Environmental Interactions** - Use terrain, objects
- **Interrupt** - React to enemy actions (costs reaction slot)
- **Fusion Activation** - Trigger learned fusion skills

---

## TARGETING SYSTEM: MEANINGFUL & REALISTIC

### Core Principle: **Every Target is a Story Character**

You can target ANYONE or ANYTHING:
- Allies (Marcus, Elena, NPCs you've met)
- Enemies (Void Wraith, Corrupted Guardian, Bandits)
- Neutral NPCs (Merchants, Civilians, Bystanders)
- Environment (Objects, Structures, Rifts, The ground itself)
- Yourself (Self-buffs, sacrifices, meditation)
- Concepts (In rare cases: Target "The Corruption," "The Prophecy," "Time Itself")

### Targeting UI Flow

```
[SKILL ACTIVATED: Shadow Bind]

WHO DO YOU TARGET?
═══════════════════════════════════════════════════════════

[ENEMIES]
→ Void Wraith (65% HP, charging attack) ⚔️ [THREAT: HIGH]
   Expected: Immobilize, prevent Entropy Blast
   
→ Corrupted Guardian (40% HP, defending Wraith) 🛡️
   Expected: Lock down defender, expose Wraith
   
[ALLIES]
→ Marcus (25% HP, BLEEDING) 💔 [CRITICAL]
   ⚠️ WARNING: Shadow Bind on ally will IMMOBILIZE them
   Why would you do this? (Prevent reckless charge? Treachery?)
   
→ Elena (80% HP, SHIELDED) 
   ⚠️ WARNING: This will freeze Elena in place
   Consequence: She'll question your sanity, trust -2
   
[NEUTRAL/ENVIRONMENT]
→ Collapsing Pillar
   Creative: Bind the pillar to prevent collapse (unconventional!)
   Effect: Structure stabilized, gain time
   
→ Void Rift
   Experimental: Attempt to bind a spatial tear
   Effect: Unknown! (50% seal it, 50% make it worse)
   Risk: Paradox, corruption surge, or discovery
   
[SELF]
→ Yourself
   Effect: Self-immobilize (why?!)
   Possible Use: Resist mind control, prove trust, ritual requirement
   
[CANCEL]
→ Return to action selection

═══════════════════════════════════════════════════════════
```

### Consequences of Mistargeting

#### **Attacking Friendlies**
```
[You use "Void Blast" on Marcus]

Marcus: "What—?! What are you DOING?!"
[Marcus takes 40 damage, drops to critical HP]

Elena: "Have you lost your MIND?!"
[Elena's disposition: Trust -5, Fear +3, Suspicion +5]
[Combat stance shifts: Elena now treats you as hostile]

STORY BRANCHES:
═══════════════════════════════════════════════════════════

IMMEDIATE:
→ Elena attacks you (new combat: You vs Elena vs Enemies)
→ Marcus tries to escape (you lose ally permanently)
→ Enemies capitalize on confusion (they focus Elena while you're distracted)

IF YOU SURVIVE:
→ Explain yourself (Persuade check, very hard)
→ Claim mind control (only works if you have evidence)
→ Own it - "He was compromised" (lie or truth?)
→ Flee the scene (become fugitive)

PERMANENT CONSEQUENCES:
→ Marcus may leave party forever
→ Elena becomes untrusting (all her skills cost +20% to use)
→ Wardens hear of this (Heat +5, wanted for assault)
→ Underveil sees you as ruthless (Fear +2, new opportunities)

ALTERNATE INTERPRETATION:
If Marcus WAS actually compromised (rare case):
→ You were right! Saved everyone from corrupted Marcus
→ Elena apologizes, but is shaken
→ Unlock "Paranoia" storyline
```

#### **Attacking Neutral NPCs**
```
[You use "Shadow Bind" on the Merchant]

The Merchant: "Guards! GUARDS! I'm being attacked!"

[Region Alert: ASSAULT IN PROGRESS]
[Heat +3, Suspicion +5]
[All merchants in this region close shop to you]
[Wardens respond in 2 turns]

STORY IMPACT:
═══════════════════════════════════════════════════════════

LOCAL:
→ This town becomes hostile
→ Prices increase 200% (if anyone will trade at all)
→ Bounty posted on you

REGIONAL:
→ Merchant guild spreads word of your aggression
→ Other towns become wary (Trust -1 globally)
→ Underveil recruits approach (they like rogues)

CHARACTER:
→ Marcus: "That was uncalled for. We don't attack innocents."
→ Elena: Starts questioning your leadership
→ Alignment shifts toward Chaos/Dark

GAMEPLAY:
→ Must use Stealth or Disguise to enter civilized areas
→ Alternative: Embrace outlaw path, new questlines unlock
→ Can't undo this easily (must complete redemption arc)
```

#### **Attacking the Environment**
```
[You use "Structural Collapse" on the friendly town's gate]

[The gate EXPLODES, debris everywhere]

Town Guard: "What have you DONE?! That gate protected us!"

IMMEDIATE EFFECTS:
═══════════════════════════════════════════════════════════

→ Gate destroyed (repair cost: 500 gold, 3 days)
→ Town vulnerable to monster attacks
→ You're arrested on sight (unless you flee)

BRANCHING OUTCOMES:

IF YOU FLEE:
→ Wanted criminal in this region
→ Quest "Redemption" unlocks (rebuild the gate?)

IF YOU STAY AND EXPLAIN:
→ Persuade check (Hard)
→ Success: Town believes accident, you pay for repairs
→ Failure: Jail time or exile

IF IT WAS STRATEGIC:
→ Maybe you WANTED the town vulnerable (dark path)
→ Enemies attack, town falls, you gain something from chaos
→ Major alignment shift, some NPCs follow you into darkness

CREATIVE OUTCOMES:
→ Rebuild gate stronger (Crafting quest)
→ Replace with magical barrier (Invocation quest)
→ Town adopts new defense strategy, you're seen as innovator
```

### Targeting Yourself

**Self-targeting unlocks unique gameplay:**

```
[SKILL: Martyr Complex - Sacrifice HP for power]
[TARGET: Yourself]

You channel your life force into raw power.

EFFECT:
→ Lose 20% max HP (PERMANENT this playthrough)
→ All support skills gain +100% potency
→ Unlock "Sacrificial" skill tree

NPC REACTIONS:
═══════════════════════════════════════════════════════════

Marcus: "No! You're killing yourself for us! Stop!"
→ If you continue: Marcus swears eternal loyalty but carries guilt
→ If you stop: Marcus respects your restraint

Elena: "There has to be another way... but I understand."
→ She'll try to find ways to heal you permanently
→ Unlocks research questline to recover lost HP

STORY CONSEQUENCES:
→ Your deteriorating health becomes a plot point
→ Time-sensitive: Can you save the world before you fade?
→ Allies more protective of you (may override your commands)
→ Enemies see you as weakened (or admire your dedication)

GAMEPLAY:
→ High risk, high reward playstyle
→ New dialogue options about mortality
→ Unlock true ending: "The Martyr's Ascension"
```

---

## SKILL COST & COOLDOWN SYSTEM

### Resource Types (Unified & Clear)

**PRIMARY RESOURCES** (Always visible)
1. **BANDWIDTH** - Mental/Energy capacity (0-100)
   - Regenerates: +15 per story beat
   - Used by: Most active skills
   - Represents: Your focus and mental stamina

2. **KP (Karma Points)** - Action currency (0-10)
   - Regenerates: +1 per story beat, +1 per significant choice
   - Used by: High-impact skills, ultimates
   - Represents: Your ability to affect fate

3. **HP (Ojas)** - Health (0-100%)
   - Regenerates: Via rest, healing skills, or slowly over time
   - Used by: Sacrifice skills, some rituals
   - Represents: Life force

**SECONDARY RESOURCES** (Specialized)
4. **RESONANCE** - Alignment energy (varies by type)
   - Types: Echo, Void, Bloom, Shadow, Light, Corruption, etc.
   - Builds through: Using aligned skills, story choices
   - Used by: Fusion skills, reality-altering abilities

5. **REPUTATION** - Social currency (faction-specific)
   - Types: Warden Trust, Underveil Fear, Scholar Awe, etc.
   - Changes via: Dialogue choices, skill usage, story outcomes
   - Used by: Unlocking factions, NPCs, rare items

### Cooldown System: **Story-Based**

Instead of "3 turns," skills have:

**INSTANT** - Use freely
- Basic attacks, minor buffs
- Example: "Quick Strike," "Minor Shield"

**SHORT** (1-2 story beats)
- Tactical skills, medium impact
- Example: "Shadow Bind," "Bloom Heal"
- Represents: Catching your breath, repositioning

**MEDIUM** (3-5 story beats)
- Powerful skills, significant effects
- Example: "Void Step," "Echo Pulse"
- Represents: Need time to channel energy

**LONG** (1 chapter / major story section)
- Ultimate abilities, game-changers
- Example: "Reality Shift," "Summon Deity"
- Represents: Once-per-arc trump cards

**ONCE PER PLAYTHROUGH**
- World-altering, permanent consequences
- Example: "Unmake Reality," "Sacrifice Ending"
- Represents: Point of no return

**CONTEXTUAL**
- Available only in specific situations
- Example: "Interrupt" (only when enemy is charging)
- Represents: Opportunity-based actions

---

## CONSEQUENCE LAYERS

### Every Action Creates Ripples

**LAYER 1: Immediate Mechanical**
- Damage dealt/healed
- Status effects applied
- Resources spent/gained

**LAYER 2: NPC Reactions**
- Ally dialogue and disposition changes
- Enemy behavioral adaptations
- Witness testimonies

**LAYER 3: Environmental**
- Region state changes
- Corruption spread or reduction
- Structural changes

**LAYER 4: Factional**
- Reputation shifts
- Access to areas/NPCs
- Quest availability

**LAYER 5: Narrative**
- Story branch unlocks
- Character arc progression
- Ending trajectories

**LAYER 6: Meta**
- Skill evolution opportunities
- Future playthrough unlocks
- Achievement/discovery tracking

---

## TURN RESOLUTION EXAMPLES

### Example 1: Combat Turn with Multiple Outcomes

**PLAYER CHOOSES:**
- Major: Void Step (escape blast)
- Minor: Heal Marcus

**RESOLUTION:**
1. Void Step activates → Team phases out
2. Wraith's Entropy Blast hits empty space
3. Void rift opens (corruption +1)
4. Heal completes on Marcus (mid-phase)
5. Team materializes safely, Marcus healthy
6. Void rift attracts entity (new encounter incoming)

**CONSEQUENCES:**
- Immediate: Combat advantage (avoided damage)
- Environmental: Region corruption increased
- Future: Void entity encounter in 2 beats
- NPC: Marcus grateful, Elena worried about corruption
- Story: If corruption hits threshold, unlock Corruption questline

### Example 2: Dialogue Turn with Skill Synergy

**PLAYER CHOOSES:**
- Use Echo Pulse to read Broker's memories
- Then Persuade using discovered information

**RESOLUTION:**
1. Echo Pulse reveals: Broker lost daughter to Wardens
2. Unlock Compassion dialogue option
3. "Your daughter... I'm trying to prevent more loss like that."
4. Broker: [Stunned, then tears up] "Go. Just... stop them."
5. Gain: Free passage, Underveil ally, future quest unlocked
6. Cost: 25 Bandwidth, but massive story payoff

**CONSEQUENCES:**
- Immediate: Gate access granted
- Social: Underveil Trust +3, Broker becomes ally
- Story: Unlock "Lost Daughter" sidequestquest
- Future: Broker provides intel, safe houses, rare items
- Meta: Discovered synergy Echo+Social (unlock combo skill)

### Example 3: Exploration Turn with Creative Solution

**PLAYER CHOOSES:**
- Communicate with Void Rift (unconventional)

**RESOLUTION:**
1. You approach the rift, focus your void affinity
2. Something responds... ancient, curious
3. Dialogue with void entity begins
4. Entity offers: "Pass safely if you carry our message"
5. Accept or Decline?

**IF ACCEPT:**
- Immediate: Safe passage through Archive
- Gain: Void entity as tentative ally
- Cost: Corruption +3, must deliver message (quest)
- Future: Void entity can be summoned in crisis
- Risk: Message may have dark implications

**IF DECLINE:**
- Entity respects honesty, gives hint anyway
- Corruption +1 (just from contact)
- No quest obligation
- Narrower but safer path forward

---

## SPECIAL MECHANICS

### SIMULTANEOUS RESOLUTION

When multiple characters act in same turn:
- All Major Actions resolve at once
- Create emergent interactions
- Example:
  - You heal Marcus
  - Marcus attacks enemy
  - Enemy attacks you
  - All resolve together: Marcus buffed before attacking, your heal completes before damage, creates dynamic narrative

### INTERRUPT SYSTEM

Certain skills can interrupt enemy actions:
- Costs: Reaction slot (1 per turn) + skill cost
- Examples: "Disruptor Spike," "Counter Shield," "Void Seal"
- Creates: High-skill gameplay, clutch moments
- Risk: If you interrupt wrong thing, waste resources

### FUSION CASCADE

When skills combo in unexpected ways:
- Game detects: Echo skill + Light skill used in same encounter
- Unlocks: "Echo+Light fusion skill preview"
- Narrative: "The resonance harmonizes... something new awakens"
- Next turn: Option to attempt fusion appears
- Success: New permanent fusion skill learned
- Failure: Resources lost, but learned what NOT to combine

### ENVIRONMENTAL MULTIPLIERS

Region state affects skill potency:
- Shadow skills in Corrupted regions: +30% power
- Light skills in Stable regions: +20% efficiency
- Bloom skills in Evolving regions: Double growth rate
- Void skills in Collapsed regions: Unpredictable results
- Creates strategic layer: Choose battlefield or adapt tactics

---

## IMPLEMENTATION CHECKLIST

### For Every Skill, Define:
- [ ] Mechanical effect (damage, heal, buff, etc.)
- [ ] Narrative description (what it looks/feels like)
- [ ] NPC reactions (ally, enemy, witness responses)
- [ ] Environmental impact (region changes, if any)
- [ ] Targeting rules (who/what can be targeted)
- [ ] Cost (Bandwidth, KP, HP, Resonance)
- [ ] Cooldown (story-beat based)
- [ ] Unlock conditions (how player discovers it)
- [ ] Fusion potential (what it combines with)
- [ ] Consequence tree (immediate → long-term)

### For Every Turn Type, Ensure:
- [ ] Clear situation assessment displayed
- [ ] All available actions shown with costs
- [ ] Consequences previewed when possible
- [ ] Multiple valid approaches exist
- [ ] Failure states are meaningful, not just "game over"
- [ ] Success creates new opportunities
- [ ] NPC reactions are authentic
- [ ] Player feels agency and impact

---

## DESIGN MANTRAS

1. **"Every choice is a story beat"** - No throwaway decisions
2. **"Consequences ripple"** - Actions affect multiple layers
3. **"Failure forward"** - Setbacks create new narratives
4. **"Skills are verbs"** - They DO things to the world
5. **"NPCs remember"** - Relationships evolve based on actions
6. **"The world reacts"** - Environments and factions are alive
7. **"Freedom with weight"** - Players can do anything, but it matters
8. **"Narrative mechanics"** - Game systems serve the story

---

This turn structure ensures that your narrative-driven game feels **deep, engaging, and responsive** while giving players the **freedom and agency** to shape their own story through meaningful choices.
