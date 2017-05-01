#!/usr/bin/env node

const opn = require('opn')
const config = require('../config')

opn('http://localhost:' + config.port + '/test');