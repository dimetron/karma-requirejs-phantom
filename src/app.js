define(function() {
    var App = function(el) {
        this.el = el;
    };
    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };
    return App;
});

define('Utils', ["underscore", "jquery"], function(_, $) {

    console.log("Loading Utils");

    var Utils = {
        version: "0.1",
        log: function(msg) {
            console.log(msg);
        },
        render: function(wnd, name) {
            //temporary fix - need to figure out where actual directory is
            var imagePath = '/Users/drashko/Projects/github-local/karma-requirejs/_screenshots/karma_test_' + name + '.png';
            if (typeof wnd.top.callPhantom == 'function') {
                //console.log("Save screenshot to -> " + imagePath);
                wnd.top.callPhantom({
                    call: 'render',
                    fileName: imagePath
                });
            }
        }
    };
    return Utils;
});