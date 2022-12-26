#!/usr/bin/env ts-node-script

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const fs = require('fs');
const readline = require('readline');
const events = require('events');

clear();

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .description("A CLI for parsing and mutating critter files")
  .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
  .parse(process.argv);

var options = program.opts();

var filepath = program.args[0];

const allFileContents = fs.readFileSync(filepath, 'utf-8');

allFileContents.split(/\r?\n/).forEach((line: string) => {
  console.log(`Line from file: ${line}`);
});
console.log('');

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

console.log('')

console.log('num mutations: %j', options.mutate);
console.log('filename: %j', filepath);