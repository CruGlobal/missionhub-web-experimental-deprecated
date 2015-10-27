# MissionHub Web Client
[![Build Status](https://travis-ci.org/CruGlobal/missionhub-web.svg?branch=master)](https://travis-ci.org/CruGlobal/missionhub-web)
[![Coverage Status](https://coveralls.io/repos/CruGlobal/missionhub-web/badge.svg?branch=master&service=github)](https://coveralls.io/github/CruGlobal/missionhub-web?branch=master)
## Development Environment Setup
1. Install NodeJS. This will vary depending on your Operating System.
2. Clone this repo and open a terminal in that folder.
3. Run `npm install` to install the command line tools.
4. Run `bower install` to install the web app dependencies.
5. Run `gulp serve`. This command will run a local server and open a browser tab with live reloading.

## Deployment
To install packages and build minified files:
```bash
npm install
bower install
gulp
```
Output files will be generated in `/dist`.

## Test
Install packages and then run:
```bash
gulp test
```

To test every time files are modified:
```bash
gulp test:auto
```
