import { API_AUTHORITY } from "../constants/index.js";

//Required fields
export const isRequired = input => !input ? ' This value is required' : true;

export const throwError = error => {
    throw new Error(error);
}

export const throwApiKeyNotFound = (key) => {
    if (!key) throwError('No API key found - Get a key at ' + API_AUTHORITY);
    return;
};