export default async function(_app, _html, data) {
  if(combatHasNotStarted(data) && game.user.isGM) {
    const combat = data.combat;
    const combatTracker = game.enemyCombatObscurer.combatTracker;

    if (!combatTracker.isTrackingCombat(combat.id)) {
      combatTracker.addCombat(combat.id);
    }

    const combatants = combat.combatants;
    for( const entry of combatants.entries() ) {
      const combatant = entry[1];
      if(!combatTracker.isCombatantInitialized(combat.id, combatant.id)) {
				const updates = {};

        if(isEnemy(combatant)) {
          if(isHideNpcsEnabled()) updates.hidden = true;
          if(isRenameNpcsEnbabled()) updates.name = getRenameNpcsValue();
          await combatant.update(updates);
        }

        combatTracker.addCombatant(combat.id, combatant.id);
      }
    }
  }
};

function combatHasNotStarted(data) {
	return data.hasCombat && !data.combat?.started;
}

function isEnemy(combatant) {
  return combatant.isNPC && combatant.token.data.disposition === -1;
}

function isHideNpcsEnabled() {
  return game.enemyCombatObscurer.settings.hideNpcs;
}

function isRenameNpcsEnbabled() {
  return game.enemyCombatObscurer.settings.renameNpcs;
}

function getRenameNpcsValue() {
  return game.enemyCombatObscurer.settings.renameNpcsValue;
}