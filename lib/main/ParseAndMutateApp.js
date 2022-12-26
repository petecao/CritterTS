"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.red(figlet.textSync('critterworld-parse', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("A CLI for parsing and mutating critter files")
    .option('-m, --mutate <n>', 'Mutate the critter file [0] times', parseInt, 0)
    .parse(process.argv);
console.log('num mutations: %j', program.mutate);
console.log('filename: %j', program.args);
//# sourceMappingURL=ParseAndMutateApp.js.map