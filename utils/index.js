import { BASE_URL, apiResponseMapper } from '../constants/index.js'
import { KeyManager } from '../lib/key-manager.js'

// Required fields
export const isRequired = input => !input ? ' This value is required' : true

export const throwError = error => {
  throw new Error(error)
}

export const throwApiKeyNotFound = (key) => {
  if (!key) throwError('No API key found - Get a key at ' + BASE_URL)
}

export const reduceCryptoInfo = (data) => `Coin: ${data[apiResponseMapper.coinCode].yellow} Name: ${data[apiResponseMapper.coinName]}  Price: ${data[apiResponseMapper.coinPrice].blue} ${data[apiResponseMapper.coinNameTo].green}`

export const getAPIKey = () => new KeyManager().getKey()
