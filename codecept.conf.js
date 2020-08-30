exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.thuisbezorgd.nl',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      smartWait: 5000,
      restart: false,
      windowSize: '1280x720',
      desiredCapabilities: {
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        }
      }
    }
  },
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['chrome', 'firefox']
    },
    basic: {
      browsers: [
        {
          browser: 'firefox',
          windowSize: '1280x720'
        },
        {
          browser: 'chrome',
          windowSize: '1280x720'
        }
      ]
    },
  },
  include: {
    I: './steps_file.js',
    landingPage: './pages/landing_page',
    restaurantsPage: './pages/restaurants_page',
    menuPage: './pages/menu_page',
    orderPage: './pages/order_page',
    orderConfirmationPage: './pages/order_confirmation_page',
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJsWebdriver',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    selenoid: {
      enabled: false,
      deletePassed: true,
      autoCreate: true,
      autoStart: true,
      sessionTimeout: '5m',
      enableVideo: false,
      enableLog: true,
    },
    retryFailedStep: {
      enabled: false
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};
