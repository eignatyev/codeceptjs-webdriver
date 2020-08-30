exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.thuisbezorgd.nl',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      smartWait: 7000,
      restart: false,
      windowSize: '1280x720',
      desiredCapabilities: {
        "moz:firefoxOptions": {
          args: [ /*"--headless",*/ "--width=1280", "--height=720" ]
        },
        chromeOptions: {
          args: [ /*"--headless",*/ "--disable-gpu", "--no-sandbox", "--width=1280", "--height=720" ]
        }
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  multiple: {
    chrome: {
      browsers: ['chrome']
    },
    firefox: {
      browsers: ['firefox']
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
  mocha: {
    reporterOptions: {
      reportDir: "output"
    }
  },
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
