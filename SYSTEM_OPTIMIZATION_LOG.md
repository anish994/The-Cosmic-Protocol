# System Optimization Log

## Objective
"Systematically deepen, alive and build on what we have... build the game through data optimizations so when we do build the game its smooth as.."

## Implemented Optimizations

### 1. Global Event Bus (`GlobalEventBus.js`)
- **Purpose**: Decouple systems to prevent "Spaghetti Code" and allow instant reaction to game events.
- **Mechanism**: Pub/Sub pattern.
- **Benefit**: `WorldEventSystem` can now emit `CORRUPTION_STORM_STARTED` and `StoryNodeSystem` can listen for it without needing a direct reference to the World Engine.

### 2. Game Registry (`GameRegistry.js`)
- **Purpose**: Centralized "Brain" for the game engine.
- **Mechanism**: Singleton that holds references to all Systems and Data.
- **Benefit**: Provides O(1) access to any system or data asset. Eliminates circular dependency issues.

### 3. Character Data Repository (`CharacterDataRepository.js`)
- **Purpose**: Separate **Data** from **Logic**.
- **Mechanism**: A structured JSON-like repository for character definitions (Suryanatha, Janya, Laxus, Malakar).
- **Benefit**: 
    - `LivingCharacterSystem.js` no longer needs massive switch statements or hardcoded values.
    - Adding a new character is now just adding an entry to the Repository, not writing new code.
    - Supports the "100% Depth" goal by ensuring every character has a defined `dialogue_system` and `memory_system` structure.

### 4. Data Injection Pipeline
- **Update**: `LivingCharacterSystem.js` now imports `Registry` and `CharacterData`.
- **Flow**: 
    1. `Registry` loads `CharacterData` on startup.
    2. `loadCharacterData(id)` queries the Registry.
    3. Returns a deep copy of the template.
    4. Fallback mechanism ensures legacy code still works.

## Next Steps
- **Refactor World Engine**: Update `WorldExplorationEngine` to use the `EventBus` for turn updates.
- **Expand Repository**: Move the remaining 96+ characters from the Markdown into the `CharacterDataRepository`.

## Validation
- **Script**: `test_npc_depth_v2.js`
- **Results**:
    - [x] Neutral State: Returns standard node text.
    - [x] Hostile State (High Fear/Low Trust): Triggers "Rejection" override with unique dialogue.
    - [x] Devoted State (High Trust): Appends unique loyalty dialogue to the node.
    - [x] Data Loading: Verified that `Suryanatha` loads correctly from the new `CharacterDataRepository`.
