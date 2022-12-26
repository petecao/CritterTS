const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(
  chalk.red(
    figlet.textSync('critterworld-parse', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description("A CLI for parsing and mutating critter files")
  .option('-m, --mutate [n]', 'Mutate the critter file [0] times', 0)
  .parse(process.argv);

console.log('num mutations: %j', program.mutate);
console.log('filename: %j', program.args[0]);