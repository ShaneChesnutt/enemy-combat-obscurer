import Settings from './settings.js';
import CombatTracker from './combat_tracker.js';
import EnemyCombatObscurerHook from './enemy_combat_obscurer_hook.js';

Hooks.once('init', () => {
  game.enemyCombatObscurer = {
    settings: new Settings(),
    combatTracker: new CombatTracker()
  };

  game.enemyCombatObscurer.settings.registerSettings();
});

Hooks.on('renderCombatTracker', EnemyCombatObscurerHook);