We use puppeter as a dev dependency. Puppeteer is essentially a controllable, headless version of Chrome. (Headless simply means that the browser is capable of running without actually rendering a UI on-screen)

We use portfinder to find an open port so that we don't get a lot of test errors because our app can't start on the port we requested (we use them on basic-navigagtion.test.js for example)

We use "@babel/plugin-transform-runtime" to be able to use async/await for puppeteer tests otherwise will throw regeneratorRuntime is not defined error