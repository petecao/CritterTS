#!/usr/bin/env ts-node-script
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
var fs = require('fs');
var readline = require('readline');
var events = require('events');
clear();
program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .description("A CLI for parsing and mutating critter files")
    .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
    .parse(process.argv);
var options = program.opts();
var filepath = program.args[0];
var allFileContents = fs.readFileSync(filepath, 'utf-8');
allFileContents.split(/\r?\n/).forEach(function (line) {
    console.log("Line from file: ".concat(line));
});
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
console.log('num mutations: %j', options.mutate);
console.log('filename: %j', filepath);
//# sourceMappingURL=ParseAndMutateApp.js.map