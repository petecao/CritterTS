#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .description("A CLI for parsing and mutating critter files")
    .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
    .parse(process.argv);
var options = program.opts();
console.log('num mutations: %j', options.mutate);
console.log('filename: %j', program.args[0]);
//# sourceMappingURL=ParseAndMutateApp.js.map