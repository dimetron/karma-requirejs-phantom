Testing Require.js code with Karma + PhantomJS renderPage
==================================

Setup

To get Karma to run with [Require.js] we need two files:

* `karma.conf.js` &mdash; which configures Karma
* `test-main.js` &mdash; which configures Require.js for the tests

Directory structure:

```bash
$ tree
.
|-- index.html
|-- karma.conf.js
|-- lib
|   |-- jquery.js
|   |-- require.js
|   `-- underscore.js
|-- src
|   |-- app.js
|   `-- main.js
`-- test
    |-- appSpec.js
    `-- test-main.js

```

## Running the tests

Install Karma:

```bash
# Install Karma:
$ npm install karma --save-dev

# Install plugins that your project needs:
$ npm install karma-jasmine karma-requirejs karma-coverage karma-chrome-launcher karma-phantomjs-launcher --save-dev

```

Now we can run the tests with:

```bash
$ karma start
```

If you didn't configure to watch all the files and run tests
automatically on any change, you can trigger the tests manually by
typing:

```bash
$ karma run
```

## Make jasmin to take screenshots on PhantomJS

```bash
$ vi karma-phantomjs-launcher/index.js
```

Find captureCode and replace it with the following:

```javascript
var captureCode = ['var page = require("webpage").create();',
    optionsCode.join('\n'), 'page.open("' + url + '");',
    'page.viewportSize = { width: 600, height: 600 };',
    'page.onAlert = function(msg) {console.log("ALERT: " + msg);};',
    'page.onCallback = function(data) {',
    'if (data.call === "render") {',
    '  var fn = data.fileName; ',
    '  console.log(fn);',
    '  page.render(fn, {format:"png"})',
    '};',
    '}\n',].join('\n');
```

Now from the test code you could run:

```javascript
if (typeof window.top.callPhantom == 'function') {
    //console.log("Save screenshot to -> " + imagePath);
    wnd.top.callPhantom({
        call: 'render',
        fileName: imagePath
    });
}
```







---
