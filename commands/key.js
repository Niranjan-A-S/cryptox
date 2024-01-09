import { KeyManager } from "../lib/key-manager.js";
import inquirer from "inquirer";
import colors from "colors";
import { BASE_URL } from "../constants/index.js";
import { isRequired } from "../utils/index.js";


export const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'apiKey',
                message: 'Enter API key'.green + ' from ' + BASE_URL,
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.apiKey);
        if (key) {
            console.log('API key set'.blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API key is:'.yellow, key);
        } catch (error) {
            console.error(error.message.red);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('Key Removed'.yellow);
            return;
        } catch (error) {
            console.error(error.message.red);
        }
    }

}