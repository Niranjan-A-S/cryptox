import colors from 'colors'
import { CryptoAPI } from '../lib/crypto-api.js'
import { getAPIKey } from '../utils/index.js'

export const check = {
  async price (cmd) {
    try {
      const apiKey = getAPIKey()
      const api = new CryptoAPI(apiKey)
      console.log(await api.getPriceData(cmd.coin, cmd.currency))
    } catch (error) {
      console.error(error.message.red)
    }
  }
}
