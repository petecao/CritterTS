#!/usr/bin/env ts-node-script

import * as chalk from 'chalk'
// import * as clear from 'clear'
// import * as figlet from 'figlet';
import * as path from 'path';
import {program as program} from 'commander';
import * as fs from 'fs';
import * as readline from 'readline';
import * as events from 'events';
import {parse} from '../parse/parser.js';
import * as util from 'util';

// clear();

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .description("A CLI for parsing and mutating critter files")
  .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
  .parse(process.argv);

const options = program.opts();

const filepath = program.args[0];

var allFileContents;

try {
  allFileContents = fs.readFileSync(filepath, 'utf-8');
} catch (err) {
  console.error("File not found: " + filepath)
  process.exit(0)
}
console.log('')
allFileContents.split(/\r?\n/).forEach((line: string) => {
  console.log(`Line from file: ${line}`);
});
console.log('');

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

console.log('')

console.log('num mutations: %j', options.mutate);
console.log('filename: %j', filepath);

console.log('')
var parseResult = parse(allFileContents);
console.log(parseResult.errs[0])

