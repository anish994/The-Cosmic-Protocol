/**
 * WORKSHOP CONTROLLER v4.0
 * Complete interaction logic for card crafting
 * 
 * Handles:
 * - Drag-and-drop glyph placement
 * - Real-time card calculations
 * - Filter system
 * - Card preview updates
 * - Jyotish modifier display
 * - Save/load functionality
 */

class WorkshopController {
    constructor() {
        this.currentCard = {
            name: 'Unnamed Card',
            glyphs: new Array(12).fill(null), // 12 slots for Vedic chart
            jyotishModifiers: {}
        };
        
        this.draggedGlyph = null;
        this.initialized = false;
    }
    
    /**
     * Initialize the Workshop
     */
    async init() {
        if (this.initialized) return;
        
        console.log('🏭️ Initializing Workshop Controller...');
        
        // Wait for SkillDatabase to load
        if (!window.skillDB) {
            console.error('❌ SkillDatabase not found');
            return;
        }
        
        try {
            await window.skillDB.load();
        } catch (error) {
            console.warn('⚠️ SkillDatabase load failed, will use SkillSystem only');
        }
        
        // Setup UI
        this.setupFilters();
        this.setupDragAndDrop();
        this.setupButtons();
        this.loadGlyphLibrary();
        this.updateCardPreview();
        
        this.initialized = true;
        console.log('✅ Workshop Controller initialized');
    }
    
    /**
     * Setup filter dropdowns
     */
    setupFilters() {
        try {
            // Try to populate engine filter from SkillDatabase
            const engineSelect = document.getElementById('filter-engine');
            const engines = window.skillDB.getEngineNames();
            engines.forEach(engineName => {
                const meta = window.skillDB.getEngineMetadata(engineName);
                const option = document.createElement('option');
                option.value = engineName;
                option.textContent = `${meta.icon} ${meta.name}`;
                engineSelect.appendChild(option);
            });
            
            // Populate keyword filter
            const keywordSelect = document.getElementById('filter-keyword');
            const keywords = window.skillDB.getAllKeywords();
            keywords.forEach(keyword => {
                const option = document.createElement('option');
                option.value = keyword;
                option.textContent = keyword;
                keywordSelect.appendChild(option);
            });
        } catch (error) {
            console.log('⚠️ Filter population skipped - using basic mode');
        }
        
        // Add filter event listeners
        ['filter-engine', 'filter-tier', 'filter-keyword', 'filter-search'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => this.loadGlyphLibrary());
                if (id === 'filter-search') {
                    element.addEventListener('input', () => this.loadGlyphLibrary());
                }
            }
        });
    }
    
    /**
     * Load and display glyph library with current filters
     */
    loadGlyphLibrary() {
        const container = document.getElementById('glyph-list');
        
        // Get filter values
        const engineFilter = document.getElementById('filter-engine').value;
        const tierFilter = document.getElementById('filter-tier').value;
        const keywordFilter = document.getElementById('filter-keyword').value;
        const searchFilter = document.getElementById('filter-search').value;
        
        let skills = [];
        
        // Try to get skills from SkillDatabase (JSON files)
        try {
            const criteria = {};
            if (engineFilter) criteria.engine = engineFilter;
            if (tierFilter !== '') criteria.tier = parseInt(tierFilter);
            if (keywordFilter) criteria.keyword = keywordFilter;
            if (searchFilter) criteria.search = searchFilter;
            
            skills = window.skillDB.filterSkills(criteria);
        } catch (error) {
            // Fallback: Load directly from SkillSystem
            if (window.SkillSystem) {
                console.log('🔗 Loading skills from SkillSystem...');
                skills = SkillSystem.getAllSkills();
                
                // Apply filters manually
                if (engineFilter) {
                    skills = skills.filter(s => s.school === engineFilter || s.engine === engineFilter);
                }
                if (tierFilter !== '') {
                    skills = skills.filter(s => s.tier === parseInt(tierFilter));
                }
                if (searchFilter) {
                    const q = searchFilter.toLowerCase();
                    skills = skills.filter(s => 
                        (s.name && s.name.toLowerCase().includes(q)) ||
                        (s.description && s.description.toLowerCase().includes(q)) ||
                        (s.effect && s.effect.toLowerCase().includes(q))
                    );
                }
            }
        }
        
        // TESTING MODE: Mark all skills as unlocked
        skills = skills.map(s => ({ ...s, unlocked: true }));
        
        // Display skills
        container.innerHTML = '';
        
        if (skills.length === 0) {
            container.innerHTML = '<div class="loading">No glyphs found - try creating fusions in the Fusion System!</div>';
            return;
        }
        
        // Show skill count
        console.log(`📚 Displaying ${skills.length} skills in library`);
        
        skills.forEach(skill => {
            const card = this.createGlyphCard(skill);
            container.appendChild(card);
        });
    }
    
    /**
     * Create glyph card element - BADASS DESIGN
     */
    createGlyphCard(skill) {
        const card = document.createElement('div');
        card.className = 'glyph-card';
        card.draggable = true;
        card.dataset.skillId = skill.id;
        
        // Check if fused skill
        const isFused = skill.isFused || skill.fusionIngredients;
        
        // Card HTML with badass styling
        card.innerHTML = `
            <div class="glyph-header">
                <div class="glyph-name">${skill.name}${isFused ? ' ✨' : ''}</div>
                <div class="glyph-status">${skill.unlocked ? '🔓' : '🔒'}</div>
            </div>
            
            ${isFused ? `<div class="glyph-fusion-tag">⚡ Fused Skill</div>` : ''}
            
            <div class="glyph-meta">
                <span class="glyph-tier" style="background: ${this.getTierColor(skill.tier)}">
                    T${skill.tier}
                </span>
                <span class="glyph-engine">
                    ${skill.engine || 'Unknown'}
                </span>
            </div>
            
            <div class="glyph-stats">
                <span>⚡ ${skill.powerScore || skill.power || 0}</span>
                <span>🕐 ${skill.cooldown || 1}s</span>
                <span>💰 ${skill.cost?.kp || 0} KP</span>
            </div>
            
            <div class="glyph-description">
                ${skill.description || skill.effect || 'No description'}
            </div>
            
            ${skill.keywords && skill.keywords.length > 0 ? `
                <div class="glyph-keywords">
                    ${skill.keywords.slice(0, 3).map(kw => `
                        <span class="keyword-tag">${kw}</span>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        return card;
    }
    
    /**
     * Get color for tier
     */
    getTierColor(tier) {
        const colors = {
            0: '#95a5a6', // Basic - Gray
            1: '#3498db', // Standard - Blue
            2: '#9b59b6', // Advanced - Purple
            3: '#e67e22', // Ultimate - Orange
            4: '#e74c3c'  // Apocalypse - Red
        };
        return colors[tier] || '#95a5a6';
    }
    
    /**
     * Setup drag-and-drop functionality
     */
    setupDragAndDrop() {
        // Drag start on glyph cards
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('glyph-card')) {
                this.draggedGlyph = e.target.dataset.skillId;
                e.target.style.opacity = '0.5';
            }
        });
        
        // Drag end
        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('glyph-card')) {
                e.target.style.opacity = '1';
            }
        });
        
        // Drag over slots
        const slots = document.querySelectorAll('.glyph-slot');
        slots.forEach(slot => {
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                slot.classList.add('drag-over');
            });
            
            slot.addEventListener('dragleave', () => {
                slot.classList.remove('drag-over');
            });
            
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                slot.classList.remove('drag-over');
                
                if (this.draggedGlyph) {
                    const slotIndex = parseInt(slot.dataset.slot) - 1;
                    this.placeGlyph(slotIndex, this.draggedGlyph);
                    this.draggedGlyph = null;
                }
            });
            
            // Right-click to remove glyph
            slot.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                const slotIndex = parseInt(slot.dataset.slot) - 1;
                this.removeGlyph(slotIndex);
            });
        });
    }
    
    /**
     * Place glyph in slot
     */
    placeGlyph(slotIndex, skillId) {
        const skill = window.skillDB.getSkill(skillId);
        if (!skill) return;
        
        // Update card data
        this.currentCard.glyphs[slotIndex] = skillId;
        
        // Update visual
        const slot = document.querySelector(`[data-slot="${slotIndex + 1}"]`);
        slot.innerHTML = `
            <div style="text-align: center; font-size: 0.8rem; color: var(--text-primary);">
                <div style="font-weight: 600;">${skill.name}</div>
                <div style="font-size: 0.7rem; opacity: 0.8;">T${skill.tier}</div>
            </div>
        `;
        slot.classList.add('filled');
        slot.classList.remove('empty');
        
        // Update card preview
        this.updateCardPreview();
    }
    
    /**
     * Remove glyph from slot
     */
    removeGlyph(slotIndex) {
        this.currentCard.glyphs[slotIndex] = null;
        
        const slot = document.querySelector(`[data-slot="${slotIndex + 1}"]`);
        slot.innerHTML = '';
        slot.classList.add('empty');
        slot.classList.remove('filled');
        
        this.updateCardPreview();
    }
    
    /**
     * Update card preview with calculations
     */
    updateCardPreview() {
        const glyphs = this.currentCard.glyphs.filter(g => g !== null);
        
        // Update slot count
        document.getElementById('slots-filled').textContent = `${glyphs.length}/12 Slots`;
        
        if (glyphs.length === 0) {
            this.displayEmptyCard();
            return;
        }
        
        // Calculate card stats using CardCalculator
        if (window.CardCalculator) {
            const analysis = window.CardCalculator.analyzeCard(glyphs, this.currentCard.jyotishModifiers);
            this.displayCardStats(analysis);
        }
        
        // Update KP budget display
        this.updateKPDisplay(glyphs);
    }
    
    /**
     * Display empty card state
     */
    displayEmptyCard() {
        document.getElementById('stat-hp').textContent = '100';
        document.getElementById('stat-attack').textContent = '10';
        document.getElementById('stat-defense').textContent = '10';
        document.getElementById('stat-speed').textContent = '50';
        document.getElementById('budget-value').textContent = '0/30';
        document.getElementById('budget-status').textContent = 'Empty';
        document.getElementById('active-synergies').innerHTML = '<p class="placeholder">No synergies yet</p>';
        document.getElementById('active-yogas').innerHTML = '<p class="placeholder">No yogas detected</p>';
        document.getElementById('active-doshas').innerHTML = '<p class="placeholder">No doshas detected</p>';
    }
    
    /**
     * Display calculated card stats
     */
    displayCardStats(analysis) {
        // HP & Stats
        document.getElementById('stat-hp').textContent = analysis.hp.finalHP;
        document.getElementById('stat-attack').textContent = analysis.stats.attack;
        document.getElementById('stat-defense').textContent = analysis.stats.defense;
        document.getElementById('stat-speed').textContent = analysis.stats.speed;
        
        // Budget
        const budgetEl = document.getElementById('budget-value');
        const statusEl = document.getElementById('budget-status');
        budgetEl.textContent = `${analysis.budget.totalKP}/${analysis.budget.recommendedMax}`;
        statusEl.textContent = analysis.budget.status.toUpperCase();
        statusEl.className = 'budget-status';
        if (analysis.budget.status === 'high') {
            statusEl.classList.add('warning');
        }
        
        // Synergies
        const synergiesEl = document.getElementById('active-synergies');
        if (analysis.synergies.length > 0) {
            synergiesEl.innerHTML = analysis.synergies.map(syn => `
                <div style="margin-bottom: 0.5rem;">
                    <strong>${syn.name}</strong><br>
                    <small>${syn.bonus}</small>
                </div>
            `).join('');
        } else {
            synergiesEl.innerHTML = '<p class="placeholder">No synergies detected</p>';
        }
        
        // Yogas
        const yogasEl = document.getElementById('active-yogas');
        if (analysis.yogas.length > 0) {
            yogasEl.innerHTML = analysis.yogas.map(yoga => `
                <div style="margin-bottom: 0.5rem;">
                    <strong>${yoga.name}</strong><br>
                    <small>${yoga.effect}</small>
                </div>
            `).join('');
        } else {
            yogasEl.innerHTML = '<p class="placeholder">No yogas detected</p>';
        }
        
        // Doshas
        const doshasEl = document.getElementById('active-doshas');
        if (analysis.doshas.length > 0) {
            doshasEl.innerHTML = analysis.doshas.map(dosha => `
                <div style="margin-bottom: 0.5rem;">
                    <strong>${dosha.name}</strong> <span style="color: var(--accent-fire);">[${dosha.severity}]</span><br>
                    <small>${dosha.effect}</small>
                </div>
            `).join('');
        } else {
            doshasEl.innerHTML = '<p class="placeholder">No doshas detected</p>';
        }
    }
    
    /**
     * Update KP display
     */
    updateKPDisplay(glyphs) {
        const totalKP = glyphs.reduce((sum, glyphId) => {
            const skill = window.skillDB.getSkill(glyphId);
            return sum + (skill?.cost?.kp || 0);
        }, 0);
        
        document.getElementById('current-kp').textContent = totalKP;
    }
    
    /**
     * Setup button handlers
     */
    setupButtons() {
        // Save button
        document.getElementById('btn-save').addEventListener('click', () => {
            this.saveCard();
        });
        
        // Load button
        document.getElementById('btn-load').addEventListener('click', () => {
            this.loadCard();
        });
        
        // Jyotish toggle
        document.getElementById('jyotish-toggle').addEventListener('click', () => {
            const panel = document.getElementById('jyotish-panel');
            panel.classList.toggle('collapsed');
        });
    }
    
    /**
     * Save card to localStorage
     */
    saveCard() {
        const cardData = {
            name: this.currentCard.name,
            glyphs: this.currentCard.glyphs,
            jyotishModifiers: this.currentCard.jyotishModifiers,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('workshop_current_card', JSON.stringify(cardData));
        document.getElementById('card-status').textContent = 'Card saved!';
        
        setTimeout(() => {
            document.getElementById('card-status').textContent = 'Ready';
        }, 2000);
    }
    
    /**
     * Load card from localStorage
     */
    loadCard() {
        const savedData = localStorage.getItem('workshop_current_card');
        if (!savedData) {
            alert('No saved card found');
            return;
        }
        
        const cardData = JSON.parse(savedData);
        this.currentCard = cardData;
        
        // Rebuild visual state
        this.currentCard.glyphs.forEach((glyphId, index) => {
            if (glyphId) {
                this.placeGlyph(index, glyphId);
            }
        });
        
        document.getElementById('card-status').textContent = 'Card loaded!';
        setTimeout(() => {
            document.getElementById('card-status').textContent = 'Ready';
        }, 2000);
    }
}

// Initialize when DOM ready
const controller = new WorkshopController();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => controller.init());
} else {
    controller.init();
}

// Make available globally
window.WorkshopController = WorkshopController;
window.workshopController = controller;
