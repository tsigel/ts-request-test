declare var module;

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],

        frameworks: ['mocha', 'commonjs'],

        files: [
            {
                pattern: '../**/**.map',
                included: false
            },
            {
                pattern: '../**/**.ts',
                included: false
            },
            './test.js',
            '../src/*.js',
            '../node_modules/expect.js/index.js',
        ],

        preprocessors: {
            '../src/*.js': ['commonjs'],
            '../test/*.js': ['commonjs']
        },

        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd'
            }
        }
    });
};