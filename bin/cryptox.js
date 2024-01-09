#!/usr/bin/env node
import { Command } from 'commander';
import pkg from '../package.json' assert  {type: 'json'};
import { BASE_URL } from "../constants/index.js";

const { name, description, version, } = pkg;

const program = new Command();

program
    .option('-v, --version', version)
    .command('key', 'Manage API Key -- Get at ' + BASE_URL)
    .command('check', 'Check Coin Price Info')    
    .parse(process.argv)


