# Web Automated Testing PoC with CodeceptJS and WebdriverIO

## Prepare the Working Space

1. Install [Node.js](https://nodejs.org/en/) (version `12.18.3 LTS`)
1. Clone the repo `git clone https://github.com/eignatyev/codeceptjs-webdriver.git`
1. Open the root folder `cd codeceptjs-webdriver`
1. Install node modules `npm i`

## Run Locally With Selenium WebDriver

1. Cross-browser run `npm run test:cross`
1. Single-browser run `npm run test:chrome` or `npm run test:firefox`

## Run with the Selenoid Docker image

### Preconditions

1. Install [Docker Desktop](https://docs.docker.com/desktop/)
1. Start Docker Desktop locally
1. Enable the `Selenoid` plugin in `codecept.conf.js`
1. Disable the `wdio` plugin in `codecept.conf.js`

----

1. Cross-browser run `npm run test:selenoid:cross`
1. Single-browser run `npm run test:selenoid:chrome` or `npm run test:selenoid:firefox`
