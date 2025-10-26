# 🌟 JYOTISH ENGINE - MODULAR ARCHITECTURE

## Overview

The Jyotish Foundation system has been refactored into a **clean, modular architecture** that separates data, logic, and presentation. This makes the system easy to debug, expand, and maintain.

---

## 📁 File Structure

```
E:\game1\
├── src/
│   ├── engines/
│   │   └── JyotishEngine.js          # Core data and logic
│   └── components/
│       └── JyotishFoundationUI.js    # UI rendering component
├── prototypes/
│   └── sanctum-builder-enhanced.html # Main game interface
└── docs/
    └── JYOTISH_MODULAR_ARCHITECTURE.md
```

---

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **Data Layer** (`JyotishEngine.js`): Pure data and calculations
- **UI Layer** (`JyotishFoundationUI.js`): Rendering and interactions
- **Integration**: HTML files import both and connect them

### 2. **Easy to Debug**
- Each module has single responsibility
- Console.log at specific points
- Clear function names and structure

### 3. **Easy to Expand**
- Add new Ascendants: Edit `JyotishEngine.js` ascendants array
- Add new Nakshatras: Edit nakshatras array
- Add new UI sections: Add render function in UI component

---

## 🔧 Module Details

### JyotishEngine.js - The Data Brain

**Purpose**: Store all Jyotish data and provide utility functions

**Contains**:
- 12 Ascendants with passive abilities
- 9 Planets with house modifiers
- 12 Houses with contextual influences
- 27 Nakshatras with micro-buffs
- Yogas (beneficial combinations)
- Doshas (malefic patterns)
- Dasha system (planetary periods)

**Key Functions**:
```javascript
JyotishEngine.getAscendant(id)           // Get specific ascendant
JyotishEngine.getPlanet(id)              // Get specific planet
JyotishEngine.getHouse(number)           // Get specific house
JyotishEngine.getNakshatra(id)           // Get specific nakshatra
JyotishEngine.checkYogas(chartData)      // Calculate active yogas
JyotishEngine.checkDoshas(chartData)     // Calculate active doshas
JyotishEngine.calculatePlanetaryPositions(ascendantId) // Calculate positions
```

**Adding New Data**:
```javascript
// To add a new Ascendant:
ascendants: [
    // ... existing ascendants
    {
        id: 'new_sign',
        name: 'New Sign',
        symbol: '♈',
        element: 'Fire',
        ruler: 'Mars',
        kpCost: 10,
        passive: {
            name: 'Ability Name',
            effect: 'What it does mechanically',
            description: 'Flavorful description'
        }
    }
]
```

---

### JyotishFoundationUI.js - The Display System

**Purpose**: Render Jyotish data in beautiful, collapsible UI

**Contains**:
- Header with summary stats
- 6 collapsible sections:
  - 🏛️ Ascendant
  - 🌟 Planets
  - 🔮 Nakshatras
  - ✨ Yogas
  - ⚠️ Doshas
  - ⏳ Dasha System

**Key Features**:
- Integrated below chart (not isolated)
- Touch-optimized (44px minimum targets)
- Smooth expand/collapse animations
- Haptic feedback on mobile
- Mobile-first responsive design

**Rendering Functions**:
```javascript
renderAscendantSection(ascendant)  // Renders ascendant details
renderPlanetsSection(positions)    // Renders planet grid
renderNakshatrasSection()          // Renders nakshatra cards
renderYogasSection()               // Renders yoga list
renderDoshasSection()              // Renders dosha warnings
renderDashaSection()               // Renders dasha timeline
```

**Adding New Sections**:
```javascript
// 1. Add to expanded state in constructor
this.expanded = {
    // ... existing
    newSection: false
};

// 2. Create render function
renderNewSection() {
    return `
        <div class="foundation-section" data-section="newSection">
            <div class="section-header" onclick="jyotishUI.toggleSection('newSection')">
                <!-- Header content -->
            </div>
            <div class="section-content">
                <!-- Section content -->
            </div>
        </div>
    `;
}

// 3. Add to main render function
render() {
    // ... existing code
    ${this.renderNewSection()}
}
```

---

## 🎨 CSS Styling Structure

**Foundation Styles** (to be added to sanctum-builder HTML):

```css
/* Jyotish Foundation Container */
.jyotish-foundation {
    background: linear-gradient(135deg, rgba(15, 10, 30, 0.9), rgba(25, 15, 35, 0.85));
    border: 2px solid rgba(180, 120, 255, 0.3);
    border-radius: 10px;
    padding: 15px;
    margin-top: 15px;
}

/* Header */
.foundation-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 12px;
    border-bottom: 2px solid rgba(180, 120, 255, 0.3);
}

/* Collapsible Sections */
.foundation-section {
    margin-bottom: 12px;
    border: 2px solid rgba(180, 120, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s;
}

.foundation-section.expanded {
    border-color: rgba(180, 120, 255, 0.4);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: rgba(180, 120, 255, 0.1);
    cursor: pointer;
    min-height: 44px; /* Touch target */
}

.section-header:active {
    background: rgba(180, 120, 255, 0.2);
}

.section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    padding: 0 12px;
}

.foundation-section.expanded .section-content {
    max-height: 2000px; /* Large enough for content */
    padding: 12px;
    transition: max-height 0.5s ease-in;
}
```

---

## 🔗 Integration Example

**In your HTML file**:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Your existing styles -->
</head>
<body>
    <!-- Your chart display -->
    <div id="chartArea"></div>
    
    <!-- Jyotish Foundation Section -->
    <div id="jyotishFoundation"></div>
    
    <!-- Load modules -->
    <script src="src/engines/JyotishEngine.js"></script>
    <script src="src/components/JyotishFoundationUI.js"></script>
    
    <script>
        // Initialize foundation
        const chartData = {
            ascendantId: 'aries',
            yogaCount: 3,
            doshaCount: 1
        };
        
        // Create UI instance
        jyotishUI = initializeJyotishFoundation('jyotishFoundation', JyotishEngine);
        jyotishUI.init(chartData);
        
        // Update when chart changes
        function onChartChange(newData) {
            jyotishUI.update(newData);
        }
    </script>
</body>
</html>
```

---

## 🚀 Development Workflow

### Adding a New Ascendant

1. **Edit `JyotishEngine.js`**:
```javascript
{
    id: 'new_sign',
    name: 'New Sign',
    symbol: '♑',
    element: 'Earth',
    ruler: 'Saturn',
    kpCost: 10,
    passive: {
        name: 'New Ability',
        effect: 'Description of mechanic',
        description: 'Flavorful text'
    }
}
```

2. **Test immediately**:
```javascript
console.log(JyotishEngine.getAscendant('new_sign'));
```

3. **UI automatically updates** - no changes needed!

### Adding a New Nakshatra

1. **Edit `JyotishEngine.js` nakshatras array**
2. **UI displays it automatically**
3. **Styling inherits from existing cards**

### Debugging Tips

**Check Data**:
```javascript
// In browser console
console.log(JyotishEngine.ascendants);
console.log(JyotishEngine.planets);
```

**Check UI State**:
```javascript
console.log(jyotishUI.expanded);
console.log(jyotishUI.currentData);
```

**Reload Without Full Refresh**:
```javascript
// Re-initialize foundation
jyotishUI.update(chartData);
```

---

## 📱 Mobile Optimization

### Touch Targets
- All interactive elements: **44px minimum**
- Section headers: **Full width, 44px+ height**
- Buttons: **44px × 44px minimum**

### Gestures
- **Tap**: Toggle section
- **Long-press**: (Future) Show tooltip
- **Swipe**: (Future) Navigate between sections

### Performance
- Collapsed sections: **display: none** (no rendering cost)
- Smooth animations: **CSS transitions** (GPU accelerated)
- Lazy loading: Only render visible sections

---

## 🎯 Next Steps

### Short Term
1. ✅ Create modular JyotishEngine.js
2. ✅ Create modular JyotishFoundationUI.js
3. 🔄 Integrate into sanctum-builder-enhanced.html
4. 🔄 Add CSS styling
5. 🔄 Test collapsible behavior

### Medium Term
1. Add "Select Ascendant" UI flow
2. Implement Yoga/Dosha calculation logic
3. Add planet position calculation
4. Create Nakshatra selector
5. Implement Dasha cycle display

### Long Term
1. Add Grand Library integration
2. Implement upgrade system
3. Create gemstone slot UI
4. Add Rudraksha ward system
5. Full planetary degree calculator

---

## 💡 Design Philosophy

### Why Modular?

**Before**:
```
sanctum-builder.html (2000+ lines)
├── Data mixed with HTML
├── Logic scattered throughout
└── Hard to find and edit
```

**After**:
```
JyotishEngine.js (520 lines)
├── Pure data
└── Clear functions

JyotishFoundationUI.js (403 lines)
├── Pure rendering
└── Clear sections

sanctum-builder.html
└── Integration only
```

### Benefits

✅ **Easy to Find**: "Where's Nakshatra data?" → `JyotishEngine.js` line 278  
✅ **Easy to Edit**: Change one ascendant → Edit one object  
✅ **Easy to Debug**: Issue with display? Check UI component. Issue with data? Check Engine  
✅ **Easy to Expand**: Add feature → Add to appropriate module  
✅ **Easy to Test**: Test modules independently  

---

## 🔥 Power of This Architecture

**Example: Adding a Complete New System (Gemstones)**

1. **Data** (JyotishEngine.js):
```javascript
gemstones: [
    { id: 'ruby', planet: 'Sun', effect: '+10% Power', ... }
]
```

2. **UI** (JyotishFoundationUI.js):
```javascript
renderGemstonesSection() { /* ... */ }
```

3. **Integration** (HTML):
```javascript
// It just works!
```

**Time Required**: ~30 minutes instead of ~3 hours of hunting through code!

---

## 📚 Resources

- **Jyotish Engine Data**: `E:\game1\jotish engine.txt`
- **Blueprint**: `E:\game1\game engine.txt`
- **Original Sanctum**: `E:\game1\prototypes\sanctum-builder.html`

---

**Made with 💜 for ASTRA KARMA - The game where Vedic wisdom meets tactical strategy!**
