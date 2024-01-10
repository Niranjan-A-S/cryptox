import { Command } from 'commander'
import { key } from '../commands/key.js'

const program = new Command()

program
  .command('set')
  .description('Set API Key  -- Get at https://www.alphavantage.co/support/#api-key')
  .action(key.set)

program
  .command('show')
  .description('Show API Key ')
  .action(key.show)

program
  .command('remove')
  .description('Set API Key ')
  .action(key.remove)

program.parse(process.argv)
