const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
// console.log(
//   chalk.red(
//     figlet.textSync('critterworld-parse', { horizontalLayout: 'full' })
//   )
// );

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .description("A CLI for parsing and mutating critter files")
  .option('-m, --mutate [times]', 'Mutate the critter file the specified times [0]', parseInt, 0)
  .parse(process.argv);

var options = program.opts();

console.log('num mutations: %j', options.mutate);
console.log('filename: %j', program.args[0]);