// Modified 2026-10-19: self-hosted 30x edition; disable upstream telemetry and version modified assets.
require.config({

	deps: ["level13-app"],

	waitSeconds: 30,

	baseUrl: 'src',

	paths: {
		brejep: "../lib/brejep",
		ash: "../lib/ash/ash.min",
		jquery: "../lib/jquery",
		lzstring: "../lib/lzstring",
        json: "../lib/requirejs/json",
		utils: "utils",
		game: "game",
	},

	config: {
		'level13-app': {
			'version': "0.6.3",
			'isDebugVersion': false,
			'isCheatsEnabled': false,
			'isDebugOutputEnabled': false,
			'isAutosaveEnabled': true,
			'isTrackingEnabled': false,
		}
	},
	
	urlArgs: "v=0.6.3-selfhost30x-20261019",

});
