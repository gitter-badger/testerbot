module.exports = {
  silent: false,
  verbose: true,
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  roots: ["runner"],
  globals: {
    TESTERBOT: {
      URL: 'http://localhost:8080'
    }
  }
}
