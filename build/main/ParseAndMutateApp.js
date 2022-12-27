#!/usr/bin/env ts-node-script
import { program as program } from 'commander';
import * as fs from 'fs';
import { parse } from '../parse/parser.js';
program
    .version('0.0.1')
    .usage('[options] <file ...>')
    .description("A CLI for parsing and mutating critter files")
    .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
    .parse(process.argv);
var options = program.opts();
var filepath = program.args[0];
var allFileContents;
try {
    allFileContents = fs.readFileSync(filepath, 'utf-8');
}
catch (err) {
    console.error("File not found: " + filepath);
    process.exit(0);
}
console.log('');
allFileContents.split(/\r?\n/).forEach(function (line) {
    console.log("Line from file: ".concat(line));
});
console.log('');
var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log("The script uses approximately ".concat(Math.round(used * 100) / 100, " MB"));
console.log('');
console.log('num mutations: %j', options.mutate);
console.log('filename: %j', filepath);
console.log('');
var parseResult = parse(allFileContents);
console.log(parseResult.errs[0]);
//# sourceMappingURL=ParseAndMutateApp.js.map