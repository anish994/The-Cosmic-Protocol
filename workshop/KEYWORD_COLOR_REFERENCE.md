# 🎨 KEYWORD TAG COLOR REFERENCE

## Project: ShivaKali Ashram - Card Workshop
**Purpose**: Ensure consistent keyword tag colors across all UI elements

---

## 🏷️ **TAG COLOR SYSTEM**

### **How It Works**:
```javascript
// Get tag data if available, otherwise use default colors
const tagData = TAG_DATA[keyword.toLowerCase()];
const color = tagData ? tagData.color : (keywordColors[keyword] || '#8b5cf6');

// Apply to badge styling
background: ${color}33;  // 20% opacity
border: 1px solid ${color}80;  // 50% opacity
color: ${color};  // Full color for text
```

---

## 🎨 **DEFAULT KEYWORD COLORS**

### **Elemental Tags**:
```javascript
fire: '#ff6464'       // Red
ice: '#64b4ff'        // Blue
lightning: '#ffeb64'  // Yellow
water: '#64c8ff'      // Cyan
earth: '#96c864'      // Green
dark: '#9664c8'       // Purple
light: '#ffe664'      // Gold
```

### **Role Tags**:
```javascript
heal: '#64ff96'       // Bright Green
damage: '#ff6496'     // Pink/Red
buff: '#c896ff'       // Lavender
debuff: '#ff9664'     // Orange
support: '#96ffeb'    // Aqua
```

### **Default Fallback**:
```javascript
default: '#8b5cf6'    // Purple (if no match found)
```

---

## 📋 **TAG_DATA SYSTEM** (Preferred Source)

The `TAG_DATA` object contains rich metadata for each tag including:
- **Color**: Hex color code
- **Icon**: Emoji/symbol
- **Description**: Full tag explanation
- **Category**: Element, Role, Special, etc.

**Example**:
```javascript
TAG_DATA = {
    fire: {
        color: '#ff6464',
        icon: '🔥',
        description: 'Fire element damage',
        category: 'element'
    },
    heal: {
        color: '#64ff96',
        icon: '💚',
        description: 'Restores health',
        category: 'role'
    }
};
```

---

## ✨ **WHERE KEYWORD COLORS APPEAR**

### 1. **Card Preview Keywords List** (lines 3544-3572)
```javascript
keywordContainer.innerHTML = Array.from(allKeywords).map(kw => {
    const tagData = TAG_DATA[kw.toLowerCase()];
    const color = tagData ? tagData.color : (keywordColors[kw] || '#8b5cf6');
    
    return `<span class="tag-badge" 
                  style="background: ${color}33; border: 1px solid ${color}80; color: ${color};" 
                  data-tag="${kw.toLowerCase()}"
                  onclick="showTagInfo('${kw.toLowerCase()}'); event.stopPropagation();">
        ${kw.toUpperCase()}
        <span class="tag-info-icon">ⓘ</span>
    </span>`;
}).join('');
```

### 2. **Fusion Abilities Display** (lines 3585-3607)
```javascript
const tierColor = {
    Common: '#8b5cf6',
    Uncommon: '#64b4ff',
    Rare: '#ffe664',
    Epic: '#ff6496',
    Legendary: '#ff8800'
}[ability.tier] || '#8b5cf6';

// Applied to ability card borders, text, and badges
```

### 3. **Skill Preview Cards** (existing system)
- Active skills: Use keyword colors for tags
- Passive skills: Use keyword colors for tags
- Hover tooltips: Show full tag descriptions from TAG_DATA

---

## 🎯 **COLOR USAGE PATTERN**

### **Badge Styling**:
```css
background: ${color}33;      /* 20% opacity for subtle fill */
border: 1px solid ${color}80; /* 50% opacity for visible edge */
color: ${color};              /* Full color for text readability */
```

### **Ability Cards**:
```css
background: ${tierColor}11;   /* 7% opacity for very subtle fill */
border-left: 3px solid ${tierColor}; /* Full color accent bar */
color: ${tierColor};          /* Full color for headers */
```

### **Tier Badges**:
```css
background: ${tierColor}33;   /* 20% opacity for badge fill */
border: 1px solid ${tierColor}80; /* 50% opacity border */
color: ${tierColor};          /* Full color text */
```

---

## 🔄 **CONSISTENCY RULES**

1. **Always check TAG_DATA first** before falling back to keywordColors
2. **Use lowercase** when accessing TAG_DATA keys
3. **Apply same opacity levels** across all UI elements:
   - Badge background: `33` (20%)
   - Border: `80` (50%)
   - Text: Full color
4. **Maintain hex format** for all color codes
5. **Provide fallback** to purple (`#8b5cf6`) if no match found

---

## 🎨 **VISUAL CONSISTENCY CHECKLIST**

✅ Keywords in card preview use TAG_DATA colors  
✅ Fusion abilities use tier-based colors  
✅ Active/passive skill lists show keyword tags  
✅ Skill preview tooltips match TAG_DATA styling  
✅ All badge elements use same opacity pattern  
✅ Hover states maintain color consistency  

---

## 📝 **DEVELOPER NOTES**

### **Adding New Keywords**:
1. Add to `TAG_DATA` object with color, icon, description
2. Color will automatically apply to all UI elements
3. No need to update `keywordColors` fallback (unless TAG_DATA unavailable)

### **Changing Colors**:
1. Update in `TAG_DATA` (preferred) or `keywordColors` (fallback)
2. Changes apply globally to all keyword displays
3. Test in: card preview, skill lists, fusion abilities, tooltips

### **Testing Color Consistency**:
```javascript
// Check if keyword has TAG_DATA entry
console.log(TAG_DATA['fire']?.color); // '#ff6464'

// Test fallback chain
const kw = 'newkeyword';
const color = TAG_DATA[kw]?.color || keywordColors[kw] || '#8b5cf6';
```

---

## 🌟 **FINAL NOTES**

The keyword color system ensures **visual consistency** across the entire card workshop UI, creating a cohesive design language where:
- **Elements** feel thematic (fire = red, ice = blue)
- **Roles** have distinct identities (heal = green, damage = pink)
- **Rarity tiers** follow a clear progression (common → legendary)

Every color choice reinforces the **gameplay identity** of skills and fusion abilities, making the meta system instantly readable at a glance. 🎴✨
