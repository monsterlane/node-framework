
/**
 * App Config
 */

var config = {
	name: 'node-runner',
	environment: null,
	server: {
		development: {
			port: 3000,
			database: {
				type: 'mongo',
				host: '127.0.0.1',
				port: 27017,
				name: 'node-runner'
			}
		},
		staging: {
			port: 3000,
			database: {
				type: 'mongo',
				host: '127.0.0.1',
				port: 27017,
				name: 'node-runner'
			}
		},
		production: {
			port: 5000,
			database: {
				type: 'mongo',
				host: '127.0.0.1',
				port: 27017,
				name: 'node-runner'
			}
		}
	}
};

/* bind */

module.exports = function( mode ) {
	config.environment = mode || process.argv[ 2 ] || 'staging';

	return config;
};
