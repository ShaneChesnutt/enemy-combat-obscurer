export default class Settings {
	static PACKAGE_NAME = 'enemy-combat-obscurer';

	// Settings keys
	static HIDE_NPCS = 'hideNpcs';
	static RENAME_NPCS = 'renameNpcs';
	static RENAME_NPCS_VALUE = 'renameNpcsValue';

	registerSettings() {
		game.settings.register(Settings.PACKAGE_NAME, Settings.HIDE_NPCS, {
			name: 'Auto-Hide NPCs',
			hint: 'If enabled, NPCs will automatically be hidden at the start of combat',
			scope: 'world',
			config: true,
			default: true,
			type: Boolean,
		});

		game.settings.register(Settings.PACKAGE_NAME, Settings.RENAME_NPCS, {
			name: 'Auto-Rename NPCs',
			hint: 'If enabled, NPCs will automatically be renamed to the configured value',
			scope: 'world',
			config: true,
			default: true,
			type: Boolean,
		});

		game.settings.register(Settings.PACKAGE_NAME, Settings.RENAME_NPCS_VALUE, {
			name: 'Rename NPCs Value',
			hint: 'Value to set the NPC names to',
			scope: 'world',
			config: true,
			default: 'Unknown',
			type: String,
		});
	}

	get hideNpcs() {
		return game.settings.get(Settings.PACKAGE_NAME, Settings.HIDE_NPCS);
	}

	get renameNpcs() {
		return game.settings.get(Settings.PACKAGE_NAME, Settings.RENAME_NPCS);
	}

	get renameNpcsValue() {
		return game.settings.get(Settings.PACKAGE_NAME, Settings.RENAME_NPCS_VALUE);
	}
}