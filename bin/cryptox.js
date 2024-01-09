#!/usr/bin/env node
import { Command } from 'commander';
import pkg from '../package.json' assert  {type: 'json'};

const { name, description, version, } = pkg;

const program = new Command();

program
    .option('-v, --version', version)
    .command('key', 'Manage API Key -- Get at https://www.alphavantage.co/support/#api-key')
    .parse(process.argv)


