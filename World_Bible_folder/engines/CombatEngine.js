/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMBAT ENGINE (THE BATTLEFIELD)
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles the execution of skills, damage calculation, status effects,
 * and elemental reactions.
 * 
 * @version 1.0
 */

class CombatEngine {
    constructor() {
        this.battleLog = [];
    }

    log(message) {
        this.battleLog.push(message);
        console.log(`[COMBAT] ${message}`);
    }

    /**
     * Executes a skill from a source entity to a target entity.
     * @param {Object} source - { name, stats }
     * @param {Object} target - { name, hp, maxHp, statusEffects, tags }
     * @param {Object} skill - The skill object from SkillDatabase
     */
    executeSkill(source, target, skill) {
        this.log(`${source.name} casts **${skill.name}** on ${target.name}!`);

        // 1. Narrative Trigger
        if (skill.narrative_triggers && skill.narrative_triggers.on_cast) {
            this.log(`> *${skill.narrative_triggers.on_cast}*`);
        }

        // 2. Process Effects
        if (skill.effects) {
            skill.effects.forEach(effect => {
                this._applyEffect(source, target, effect, skill.tags);
            });
        }

        // 3. Check Death
        if (target.hp <= 0) {
            target.hp = 0;
            this.log(`💀 ${target.name} has been defeated!`);
        }
    }

    _applyEffect(source, target, effect, skillTags) {
        switch (effect.type) {
            case 'DAMAGE':
                this._applyDamage(source, target, effect.value, skillTags);
                break;
            case 'HEAL':
                this._applyHeal(target, effect.value);
                break;
            case 'APPLY_STATUS':
                this._applyStatus(target, effect.status, effect.duration, effect.value);
                break;
            case 'SHIELD':
                this._applyShield(target, effect.value);
                break;
            case 'STUN':
                this.log(`⚡ ${target.name} is STUNNED for ${effect.duration} turns!`);
                break;
            default:
                this.log(`Unknown effect type: ${effect.type}`);
        }
    }

    _applyDamage(source, target, baseDamage, skillTags) {
        let damage = baseDamage;
        let reaction = null;

        // --- ELEMENTAL REACTIONS ---
        
        // 1. Melt (Fire on Ice/Frozen)
        if (skillTags.includes('FIRE') && (target.tags.includes('ICE') || this._hasStatus(target, 'FROZEN'))) {
            damage *= 2.0;
            reaction = "MELT! (2x Damage)";
            this._removeStatus(target, 'FROZEN');
        }

        // 2. Shatter (Physical on Frozen)
        if (skillTags.includes('PHYSICAL') && this._hasStatus(target, 'FROZEN')) {
            damage *= 1.5;
            reaction = "SHATTER! (Critical Impact)";
            this._removeStatus(target, 'FROZEN');
        }

        // 3. Overload (Storm on Wet/Water)
        if (skillTags.includes('STORM') && (target.tags.includes('WATER') || this._hasStatus(target, 'WET'))) {
            damage *= 1.5;
            reaction = "ELECTRO-CHARGE! (Chain Damage)";
        }

        // 4. Void Corruption (Void on Void-Touched)
        if (skillTags.includes('VOID') && this._hasStatus(target, 'VOID_TOUCHED')) {
            damage += 5; // True damage bonus
            reaction = "REALITY TEAR! (+5 True Dmg)";
        }

        // Apply Damage
        target.hp -= damage;
        this.log(`💥 Hit for ${damage} damage! ${reaction ? `**${reaction}**` : ''}`);
        this.log(`   ${target.name} HP: ${target.hp}/${target.maxHp}`);
    }

    _applyHeal(target, amount) {
        target.hp = Math.min(target.hp + amount, target.maxHp);
        this.log(`💚 ${target.name} healed for ${amount}. HP: ${target.hp}/${target.maxHp}`);
    }

    _applyStatus(target, status, duration, value = 0) {
        // Simple status tracking
        if (!target.statusEffects) target.statusEffects = {};
        
        target.statusEffects[status] = { duration, value };
        this.log(`✨ ${target.name} is affected by **${status}** (${duration}s)`);
    }

    _applyShield(target, amount) {
        target.shield = (target.shield || 0) + amount;
        this.log(`🛡️ ${target.name} gains ${amount} Shield.`);
    }

    _hasStatus(target, status) {
        return target.statusEffects && target.statusEffects[status] && target.statusEffects[status].duration > 0;
    }

    _removeStatus(target, status) {
        if (target.statusEffects && target.statusEffects[status]) {
            delete target.statusEffects[status];
            this.log(`   ${status} removed from ${target.name}.`);
        }
    }
}

module.exports = { CombatEngine };
