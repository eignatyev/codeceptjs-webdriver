# Web Automated Testing PoC with CodeceptJS and WebdriverIO

## Prepare the Working Space

* Install [Node.js](https://nodejs.org/en/) (version `12.18.3 LTS`)
* Clone the repo `git clone https://github.com/eignatyev/codeceptjs-webdriver.git`
* Open the root folder `cd codeceptjs-webdriver`
* Install node modules `npm i`

## Run Locally With Selenium WebDriver

**Preconditions:**

* Install browsers
  * [Chrome](https://www.google.com/intl/en_ie/chrome/)
  * [Firefox](https://www.mozilla.org/en-US/firefox/new/)

**Instruction:**

* The default test run with `npm test`
  * triggers execution on Chrome and Firefox in parallel
  * Generates a test report with the help from [Mochawesome](https://www.npmjs.com/package/mochawesome) in the `output` folder
* In case you want to run test against a specific browser, use:
  * `npm test --codeceptjswebdriver:testOptions=chrome` for Chrome
  * `npm test --codeceptjswebdriver:testOptions=firefox` for Firefox
* An example how to run tests against Chrome with test report generated
  * `npm test --codeceptjswebdriver:testOptions="chrome --reporter mochawesome"`
* An example how to run tests against both browsers with test report generated
  * `npm test --codeceptjswebdriver:testOptions="--all --reporter mochawesome"`

## Run with the Selenoid Docker image

**Preconditions:**

* Install [Docker Desktop](https://docs.docker.com/desktop/)
* Start Docker Desktop locally
* Enable the `Selenoid` plugin in `codecept.conf.js`
* Disable the `wdio` plugin in `codecept.conf.js`

**Instruction:**

* Cross-browser run `npm test:selenoid:cross`
* Single-browser run `npm test:selenoid:chrome` or `npm test:selenoid:firefox`
