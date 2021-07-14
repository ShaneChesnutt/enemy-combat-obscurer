export default class CombatTracker {
  constructor() {
    this.combats = {};
  }

  addCombat(combatId) {
    this.combats[combatId] = [];
  }

  addCombatant(combatId, combatantId) {
    this.combats[combatId].push(combatantId);
  }

  isTrackingCombat(combatId) {
    return this.combats[combatId] !== undefined;
  }

  isCombatantInitialized(combatId, combatantId) {
    return this.combats[combatId].includes(combatantId);
  }
}
