export const BASE_URL = 'https://www.alphavantage.co';

export const API_BASE_URL = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE';

export const apiResponseMapper = {
    coinCode: '1. From_Currency Code',
    coinName: '2. From_Currency Name',
    coinPrice: '5. Exchange Rate',
    coinNameTo: '4. To_Currency Name'
}

export const API_RESPONSE_DATA_KEY = 'Realtime Currency Exchange Rate';
