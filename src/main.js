requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore', 
        'Utils': '../src/app'
    },

 shim: {
    'underscore': {
      exports: '_'
    },
    // added
    'jquery': {
      exports: 'jquery'
    },
    'underscore': {
      exports: 'angular'  
    },
    'Utils': {
      deps: ['jquery', 'underscore'],

    }
  }
});

define(['app', 'jquery'], function(App, $) {
    var app = new App($('body'));
    app.render();
});