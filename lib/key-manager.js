import Configstore from 'configstore';
import pkg from '../package.json' assert  {type: 'json'};
import { API_AUTHORITY } from "../constants/index.js";
import { throwApiKeyNotFound } from '../utils/index.js';

export class KeyManager {
    constructor(key) {
        this.config = new Configstore(pkg.name);
    }

    setKey(key) {
        this.config.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.config.get('apiKey');
        throwApiKeyNotFound(key);
        return key;
    }   

    deleteKey() {
        const key = this.config.get('apiKey');
        throwApiKeyNotFound(key);
        this.config.delete('apiKey');
        return;
    }
}