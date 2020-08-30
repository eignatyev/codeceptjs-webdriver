# Web Automated Testing with CodeceptJS

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
* To run test against a specific browser, use:
  * Chrome: `npm test --codeceptjswebdriver:testOptions=chrome`
  * Firefox: `npm test --codeceptjswebdriver:testOptions=firefox`

**Examples:**

* To run tests against Chrome with test report generated
  * `npm test --codeceptjswebdriver:testOptions="chrome --reporter mochawesome"`
* to run tests against both browsers with test report generated
  * `npm test --codeceptjswebdriver:testOptions="--all --reporter mochawesome"`

## Run with the Selenoid Docker image

**Preconditions:**

* Install [Docker Desktop](https://docs.docker.com/desktop/)
* Start Docker Desktop locally
* Create a Selenoid container

```bash
docker create                                    \
--name selenoid                                  \
-p 4444:4444                                     \
-v /var/run/docker.sock:/var/run/docker.sock     \
-v `pwd`/:/etc/selenoid/:ro                      \
-v `pwd`/output/video/:/opt/selenoid/video/      \
-e OVERRIDE_VIDEO_OUTPUT_DIR=`pwd`/output/video/ \
aerokube/selenoid:latest-release
```

* Pull Chrome image `docker pull selenoid/chrome:85.0`
* Pull Firefox image `docker pull selenoid/firefox:73.0`
* Enable the `Selenoid` plugin in `codecept.conf.js`
* Disable the `wdio` plugin in `codecept.conf.js`

**Instruction:**

* Single-browser run
  * Chrome: `npm run test:selenoid --codeceptjswebdriver:testOptions=chrome`
  * Firefox: `npm run test:selenoid --codeceptjswebdriver:testOptions=firefox`

### Available Run Options

* `chrome` - run tests against Chrome
* `firefox` - run tests against Firefox
* `--all` - run tests against Chrome and Firefox
* `--steps` - output detailed test steps tree
* `--reporter mochawesome` - enable HTML report generation (`./output` folder)
