import { Command } from 'commander';
import { check } from '../commands/check.js'

const program = new Command();

program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin type in CSV format', 'BTC')
    .option('--currency <type>', 'Change the currency', 'USD')
    .action(check.price)

program.parse(process.argv);