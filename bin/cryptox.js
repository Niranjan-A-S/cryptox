#!/usr/bin/env node
import { Command } from 'commander';
import pkg from '../package.json' assert  {type: 'json'};
import { API_AUTHORITY } from "../constants/index.js";

const { name, description, version, } = pkg;

const program = new Command();

program
    .option('-v, --version', version)
    .command('key', 'Manage API Key -- Get at ' + API_AUTHORITY)
    .parse(process.argv)


