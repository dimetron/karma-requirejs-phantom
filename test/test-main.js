var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

console.log("Loaded tests:");
console.log(tests);

function startKarma() {
    console.log("Starting tests:");
    window.__karma__.start()
}


requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
        'jquery': '../lib/jquery-2.1.1',
        'underscore': '../lib/underscore',
        'Utils': '../src/app'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: 'jquery'
        },
        'Utils': {
            deps: ['jquery', 'underscore'],
        }
    },

    waitSeconds: 10,

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: startKarma
});

require(["Utils", "jquery"], function(Utils, $) {
    console.log("RequireJS Loaded");

    console.log("Jasmine Version  : " + JSON.stringify(window.jasmine.version_));
    console.log("Utils   Version  : " + Utils.version);

});