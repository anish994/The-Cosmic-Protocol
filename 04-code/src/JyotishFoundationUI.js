/**
 * ⭐ JYOTISH FOUNDATION UI COMPONENT
 * Elegant, collapsible display integrated into Sanctum Builder
 * 
 * Features:
 * - Displays below the chart, not isolated
 * - Collapsible sections for each category
 * - Mobile-first, touch-optimized
 * - Smooth animations and transitions
 */

class JyotishFoundationUI {
    constructor(containerId, jyotishEngine) {
        this.container = document.getElementById(containerId);
        this.engine = jyotishEngine;
        this.expanded = {
            ascendant: true,
            planets: false,
            nakshatras: false,
            yogas: false,
            doshas: false,
            dasha: false
        };
        this.currentData = null;
    }

    /**
     * Initialize the foundation UI with chart data
     */
    init(chartData) {
        this.currentData = chartData;
        this.render();
        this.attachEventListeners();
        // Enhance keyword tooltips if helper present
        if (window.KeywordTooltip) {
            window.KeywordTooltip.init(this.container, '/ui/keywords_tooltips.json');
        }
    }

    /**
     * Render the complete foundation UI
     */
    render() {
        if (!this.container) return;

        const ascendant = this.engine.getAscendant(this.currentData.ascendantId || 'aries');
        const planetPositions = this.engine.calculatePlanetaryPositions(ascendant.id);

        this.container.innerHTML = `
            <div class="jyotish-foundation">
                <!-- Header Section -->
                <div class="foundation-header">
                    <div class="foundation-title">
                        <span class="title-icon">⚡</span>
                        <span class="title-text">Jyotish Foundation</span>
                        <span class="title-badge">${ascendant.symbol} ${ascendant.name}</span>
                    </div>
                    <div class="foundation-summary">
                        <span class="summary-item">
                            <span class="summary-icon">✨</span>
                            <span class="summary-value">${this.currentData.yogaCount || 3}</span>
                            <span class="summary-label">Yogas</span>
                        </span>
                        <span class="summary-item warning">
                            <span class="summary-icon">⚠️</span>
                            <span class="summary-value">${this.currentData.doshaCount || 1}</span>
                            <span class="summary-label">Doshas</span>
                        </span>
                    </div>
                </div>

                <!-- Collapsible Sections -->
                <div class="foundation-sections">
                    ${this.renderAscendantSection(ascendant)}
                    ${this.renderPlanetsSection(planetPositions)}
                    ${this.renderGravitySection()}
                    ${this.renderNakshatrasSection()}
                    ${this.renderYogasSection()}
                    ${this.renderDoshasSection()}
                    ${this.renderDashaSection()}
                </div>
            </div>
        `;
    }

    /**
     * Render Ascendant Section
     */
    renderAscendantSection(ascendant) {
        return `
            <div class="foundation-section ${this.expanded.ascendant ? 'expanded' : ''}" data-section="ascendant">
                <div class="section-header" onclick="jyotishUI.toggleSection('ascendant')">
                    <div class="section-title">
                        <span class="section-icon">🏛️</span>
                        <span class="section-name">Ascendant: ${ascendant.symbol} ${ascendant.name}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.ascendant ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="ascendant-details">
                        <div class="detail-card primary">
                            <div class="card-label">Element</div>
                            <div class="card-value">${this.getElementIcon(ascendant.element)} ${ascendant.element}</div>
                        </div>
                        <div class="detail-card">
                            <div class="card-label">Ruler</div>
                            <div class="card-value">${this.getPlanetSymbol(ascendant.ruler)} ${ascendant.ruler}</div>
                        </div>
                        <div class="detail-card">
                            <div class="card-label">KP Cost</div>
                            <div class="card-value cost">${ascendant.kpCost} KP</div>
                        </div>
                    </div>
                    <div class="passive-ability">
                        <div class="ability-name">${ascendant.passive.name}</div>
                        <div class="ability-effect">${ascendant.passive.effect}</div>
                        <div class="ability-description">${ascendant.passive.description}</div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Planets Section
     */
    renderPlanetsSection(positions) {
        const planets = this.engine.planets;
        
        return `
            <div class="foundation-section ${this.expanded.planets ? 'expanded' : ''}" data-section="planets">
                <div class="section-header" onclick="jyotishUI.toggleSection('planets')">
                    <div class="section-title">
                        <span class="section-icon">🌟</span>
                        <span class="section-name">Planetary Positions</span>
                        <span class="section-count">${planets.length}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.planets ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="planets-grid">
                        ${planets.map(planet => `
                            <div class="planet-card">
                                <div class="planet-header">
                                    <span class="planet-symbol">${planet.symbol}</span>
                                    <span class="planet-name">${planet.name}</span>
                                </div>
                                <div class="planet-house">House ${positions[planet.id]}</div>
                                <div class="planet-modifier">${planet.modifier}</div>
                                <div class="planet-effect">${planet.effect}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Gravity Influence Section
     */
    renderGravitySection() {
        const mods = this.engine.getGravityModifiers(this.currentData || {});
        if (!mods || mods.length === 0) {
            return `
            <div class="foundation-section" data-section="gravity">
                <div class="section-header" onclick="jyotishUI.toggleSection('gravity')">
                    <div class="section-title">
                        <span class="section-icon">🜂</span>
                        <span class="section-name">Gravity Influence</span>
                        <span class="section-count">0</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.gravity ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content"><div class="empty">No active planetary/house modifiers</div></div>
            </div>`;
        }
        return `
            <div class="foundation-section ${this.expanded.gravity ? 'expanded' : ''}" data-section="gravity">
                <div class="section-header" onclick="jyotishUI.toggleSection('gravity')">
                    <div class="section-title">
                        <span class="section-icon">🜂</span>
                        <span class="section-name">Gravity Influence</span>
                        <span class="section-count">${mods.length}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.gravity ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="gravity-list">
                        ${mods.map(m => `
                            <div class="gravity-card">
                                <div class="gravity-source">${m.source}</div>
                                <div class="gravity-effects">${Object.entries(m.effects).map(([k,v])=>`${k}: ${v}`).join(', ')}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Nakshatras Section
     */
    renderNakshatrasSection() {
        const nakshatras = this.engine.nakshatras.slice(0, 6); // Show first 6
        
        return `
            <div class="foundation-section ${this.expanded.nakshatras ? 'expanded' : ''}" data-section="nakshatras">
                <div class="section-header" onclick="jyotishUI.toggleSection('nakshatras')">
                    <div class="section-title">
                        <span class="section-icon">🔮</span>
                        <span class="section-name">Nakshatras (Lunar Mansions)</span>
                        <span class="section-count">27</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.nakshatras ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="nakshatras-list">
                        ${nakshatras.map(nak => `
                            <div class="nakshatra-card ${nak.guna.toLowerCase()}">
                                <div class="nakshatra-header">
                                    <span class="nakshatra-name">${nak.name}</span>
                                    <span class="nakshatra-guna">${this.getGunaIcon(nak.guna)} ${nak.guna}</span>
                                </div>
                                <div class="nakshatra-lord">${this.getPlanetSymbol(nak.lord)} ${nak.lord}</div>
                                <div class="nakshatra-effect">${nak.effect}</div>
                            </div>
                        `).join('')}
                        <div class="see-all-link" onclick="jyotishUI.showAllNakshatras()">
                            View all 27 Nakshatras →
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Yogas Section
     */
    renderYogasSection() {
        const yogas = this.engine.yogas;
        
        return `
            <div class="foundation-section ${this.expanded.yogas ? 'expanded' : ''}" data-section="yogas">
                <div class="section-header" onclick="jyotishUI.toggleSection('yogas')">
                    <div class="section-title">
                        <span class="section-icon">✨</span>
                        <span class="section-name">Yogas (Beneficial Combinations)</span>
                        <span class="section-count">${yogas.length}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.yogas ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="yogas-list">
                        ${yogas.map(yoga => `
                            <div class="yoga-card ${yoga.type.toLowerCase()}">
                                <div class="yoga-header">
                                    <span class="yoga-name">${yoga.name}</span>
                                    <span class="yoga-power">${yoga.power}%</span>
                                </div>
                                <div class="yoga-type">${yoga.type}</div>
                                <div class="yoga-condition">${yoga.condition}</div>
                                <div class="yoga-effect">${yoga.effect}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Doshas Section
     */
    renderDoshasSection() {
        const doshas = this.engine.doshas;
        
        return `
            <div class="foundation-section ${this.expanded.doshas ? 'expanded' : ''}" data-section="doshas">
                <div class="section-header" onclick="jyotishUI.toggleSection('doshas')">
                    <div class="section-title">
                        <span class="section-icon">⚠️</span>
                        <span class="section-name">Doshas (Malefic Patterns)</span>
                        <span class="section-count">${doshas.length}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.doshas ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="doshas-list">
                        ${doshas.map(dosha => `
                            <div class="dosha-card severity-${dosha.severity.toLowerCase()}">
                                <div class="dosha-header">
                                    <span class="dosha-name">${dosha.name}</span>
                                    <span class="dosha-severity">${this.getSeverityIcon(dosha.severity)} ${dosha.severity}</span>
                                </div>
                                <div class="dosha-type">${dosha.type}</div>
                                <div class="dosha-condition">${dosha.condition}</div>
                                <div class="dosha-effect">${dosha.effect}</div>
                                <div class="dosha-remedy">💎 Remedy: ${dosha.remedy}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Dasha System Section
     */
    renderDashaSection() {
        const mahadashas = this.engine.mahadashas;
        
        return `
            <div class="foundation-section ${this.expanded.dasha ? 'expanded' : ''}" data-section="dasha">
                <div class="section-header" onclick="jyotishUI.toggleSection('dasha')">
                    <div class="section-title">
                        <span class="section-icon">⏳</span>
                        <span class="section-name">Dasha System (Planetary Periods)</span>
                        <span class="section-count">${mahadashas.length}</span>
                    </div>
                    <div class="section-toggle">
                        <span class="toggle-icon">${this.expanded.dasha ? '▼' : '▶'}</span>
                    </div>
                </div>
                <div class="section-content">
                    <div class="dasha-timeline">
                        ${mahadashas.map((dasha, index) => `
                            <div class="dasha-period ${index === 0 ? 'current' : ''}">
                                <div class="period-number">${index + 1}</div>
                                <div class="period-planet">${this.getPlanetSymbol(dasha.planet)} ${dasha.planet}</div>
                                <div class="period-duration">${dasha.duration} Turns</div>
                                <div class="period-effect">${dasha.effect}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Toggle section expansion
     */
    toggleSection(sectionName) {
        this.expanded[sectionName] = !this.expanded[sectionName];
        const section = this.container.querySelector(`[data-section="${sectionName}"]`);
        section.classList.toggle('expanded');
        
        // Update toggle icon
        const icon = section.querySelector('.toggle-icon');
        icon.textContent = this.expanded[sectionName] ? '▼' : '▶';
        
        // Haptic feedback if available
        if (navigator.vibrate) navigator.vibrate(10);
    }

    /**
     * Show all nakshatras in modal
     */
    showAllNakshatras() {
        // Implementation for full nakshatra modal
        console.log('Show all 27 nakshatras');
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Touch optimization
        const sections = this.container.querySelectorAll('.section-header');
        sections.forEach(section => {
            section.style.cursor = 'pointer';
            section.style.touchAction = 'manipulation';
        });
    }

    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    getElementIcon(element) {
        const icons = {
            'Fire': '🔥',
            'Earth': '🌍',
            'Air': '💨',
            'Water': '💧'
        };
        return icons[element] || '';
    }

    getPlanetSymbol(planetName) {
        const planet = this.engine.planets.find(p => p.name.toLowerCase() === planetName.toLowerCase());
        return planet ? planet.symbol : '';
    }

    getGunaIcon(guna) {
        const icons = {
            'Deva': '✨',
            'Manushya': '👤',
            'Rakshasa': '⚡'
        };
        return icons[guna] || '';
    }

    getSeverityIcon(severity) {
        const icons = {
            'Mild': '⚠️',
            'Moderate': '⚠️⚠️',
            'High': '🔴',
            'Severe': '🔴🔴',
            'Critical': '💀'
        };
        return icons[severity] || '⚠️';
    }

    /**
     * Update foundation data (for live changes)
     */
    update(chartData) {
        this.currentData = chartData;
        this.render();
        this.attachEventListeners();
    }
}

// Global instance
let jyotishUI = null;

// Initialize function
function initializeJyotishFoundation(containerId, engineData) {
    jyotishUI = new JyotishFoundationUI(containerId, engineData);
    return jyotishUI;
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { JyotishFoundationUI, initializeJyotishFoundation };
}
