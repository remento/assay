'use strict';
var config = require.main.require('./config'),
    generate = require('project-name-generator'),
    instanceName =
        config.instanceName ||
        generate({ words: config.instanceNumberWords}).dashed;

exports.name = instanceName;
