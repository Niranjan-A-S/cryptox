import axios from 'axios'
import colors from 'colors'
import { API_BASE_URL, API_RESPONSE_DATA_KEY } from '../constants/index.js'
import { reduceCryptoInfo } from '../utils/index.js'

export class CryptoAPI {
  constructor (apiKey) {
    this.apiKey = apiKey
    this.baseUrl = API_BASE_URL
  }

  async getPriceData (fromCurrency, toCurrency) {
    try {
      const response = await axios.get(`${this.baseUrl}&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${this.apiKey}`)
      if (response.data && response.data[API_RESPONSE_DATA_KEY]) {
        return reduceCryptoInfo(response.data[API_RESPONSE_DATA_KEY])
      }
      return 'Failed to get data from the crypto server.'.red + `\n${response.data?.Information}`?.yellow
    } catch (error) {
      console.error(error.message.red)
    }
  }
}
