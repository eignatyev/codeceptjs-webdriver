# Web Automated Testing PoC with CodeceptJS and WebdriverIO

## Preconditions

1. Install [Node.js](https://nodejs.org/en/) (version `12.18.3 LTS`)
1. Install [Docker Desktop](https://docs.docker.com/desktop/)
1. Clone the repo `git clone https://github.com/eignatyev/codeceptjs-webdriver.git`
1. Open the root folder `cd codeceptjs-webdriver`
1. Install node modules `npm i`

## Local Run Options

1. Cross-browser run `npx codeceptjs run-multiple basic`
1. Single-browser run `npx codeceptjs run-multiple basic:chrome` or `npx codeceptjs run-multiple basic:firefox`

## Run with the Selenoid Docker image

1. Start Docker Desktop locally
1. Enable the Selenoid plugin in `codecept.conf.js`
1. Disable the wdio plugin in `codecept.conf.js`
1. Use the same commands as for local runs
