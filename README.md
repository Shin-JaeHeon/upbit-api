# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)
[![npm](https://img.shields.io/badge/Readme-汉语-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-CN.md)

upbit-api is an API that makes Upbit OpenAPI easy to use.
This api will support the Restful API and Websocket API.


It was created with Typescript and compiled into es2017.

## ticker(market)
Create new `Market` object arrays.

| Parameter      | Type                       | Description                         |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |
### Market class
| Parameter         | Type   | Description                                |
|-------------------|--------|--------------------------------------------|
| market            | string | ex) KRW, BTC, USDT ...                     |
| coin              | string | ex) BTC, ETH, XRP ...                      |
| marketCode        | string | ex) KRW-BTC, KRW-XRP ...                   |
| tradeTime         | `Date` | trade time                                 |
| price             | number | price                                      |
| open              | number | Market value                               |
| high              | number | Highest price                              |
| low               | number | Lowest price                               |
| prevClose         | number | the closing price of the previous day      |
| change            | number | EVEN: Mixture RISE: Rise FALL: Fall        |
| changePrice       | number | Absolute value of change amount            |
| changeRate        | number | Absolute value of change rate              |
| signedChangePrice | number | signed change Price                        |
| signedChangeRate  | number | signed change rate                         |
| tradeVolume       | number | Latest volume                              |
| accTradePrice     | number | accTradePrice                              |
| accTradePrice24   | number | accTradePrice24                            |
| accTradeVolume    | number | Cumulative transaction amount(UTC 0)       |
| accTradeVolume24  | number | Cumulative transaction amount for 24 hours |
| high52wPrice      | number | 52 Weeks New Highest Price                 |
| high52wDate       | `Date` | 52 Weeks New Highest Price'Date            |
| low52wPrice       | number | 52 Weeks New Lowest Price                  |
| low52wDate    | `Date` | 52 Weeks New Lowest Price's Date           |
| lastUpdate        | `Date` | The time when this object updated          |

## autoMarketUpdate(market, time , errorHandler, callback?)
Updates object `market` every specified `time` time.

| Parameter      | Type                         | Description                           |
|----------------|---------------------------   |---------------------------------------|
| market         | `Market` or Array\<Market\>  | `Market` object that will be updated. |
| time           | number                       | Frequency to update (in milliseconds) |
| errorHandler   | function, (error) => any     | error handler  |
| callback   | function, (market) => any     |  optional, this function called when object updated.  |


## OrderBook(market)
Create new `OrderBook` object arrays.

| Parameter      | Type                       | Description                         |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |

### OrderBook class
| Name     | Type   | Description |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date` | The time when this object updated |
| askList         | Array\<`Order`\> | Ask order list |
| bidList         | Array\<`Order`\> | Bid order list |
| totalAsk         |number  | total ask  |
| totalBid         |number  | total bid  |

### Order class

| Name     | Type   | Description |
|----------------|------- |-------------|
| price       | number | price of order|
| size        | number | size of order |

## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
Updates object `OrderBook` every specified `time` time.

| Parameter      | Type                         | Description                           |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` or Array\<OrderBook\>  | `OrderBook` object that will be updated. |
| time           | number                       | Frequency to update (in milliseconds) |
| errorHandler   | function, (error) => any     | error handler  |
| callback   | function, (orderBook) => any     |  optional, this function called when object updated.  |

## ticks(market, count?, to?, cursor?)
Create new `Trade` object arrays.

| Parameter      | Type                       | Description                         |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |
| count          | number                     | count                               |
| to             | string                     | HHmmss or HH:mm:ss                  |
| cursor         | number                     | sequential_id                       |

### Trade class
| Name               | Type   | Description |
|--------------------|-------  |-------------|
| market             | string  | ex) KRW, BTC, USDT ... |
| coin               | string  | ex) BTC, ETH, XRP ... |
| marketCode         | string  | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date`  | The time when this object updated |
| tradeTime          | `Date`  | The time when traded |
| price              | number  | price of this trade |
| volume             | number  | volume of this trade  |
| prev_closing_price | number  | prev_closing_price |
| change_price       | number  | price - prev_closing_price  |
| isAsk              | boolean | Trade type  |
| sequential_id      | number  | Transaction Number(Unique)  |

## candlesMinutes(market, unit?, count?, to?)
Create `Candle` object arrays.

| Parameter      | Type                       | Description                         |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |
| unit           | number                     |  1, 3, 5, 15, 10, 30, 60, 240       |
| count          | number                     | count                               |
| to             | string                     | yyyy-MM-dd'T'HH:mm:ssXXX            |

### Candle class
| Name         | Type   | Description                                               |
|-------------------|--------|-----------------------------------------------------------|
| market            | string | ex) KRW, BTC, USDT ...                                    |
| coin              | string | ex) BTC, ETH, XRP ...                                     |
| marketCode        | string | ex) KRW-BTC, KRW-XRP ...                                  |
| timestamp         | number | The time at which the last tick was stored in the candle. |
| candleDateTimeUTC | `Date` | Standard time of the candle (UTC basis)                   |
| candleDateTimeKST | `Date` | Standard time of the candle (KST basis)                   |
| open              | number | Market value                                              |
| high              | number | Highest price                                             |
| low               | number | Lowest price                                              |
| accTradePrice     | number | Candle's accTradePrice                                    |
| accTradeVolume    | number | Candle's cumulative transaction amount                    |
| lastUpdate        | `Date` | The time when this object updated                         |
#### MinutesCandle class
`MinutesCandle` extends `Candle`

| Name         | Type   | Description                                                    |
|-------------------|--------|-----------------------------------------------------------|
| unit              | number | minutes. Possible values: 1, 3, 5, 15, 10, 30, 60, 240    |

## allMarket()
List of markets that can be traded at Upbit.

| Name         | Type   | Description                                       |
|--------------|--------|---------------------------------------------------|
| market       | string | Market information provided by Upbit, ex) BTC-XRP |
| korean_name  | string | Korean name ex) 비트코인                          |
| english_name | string | English name ex) Bitcoin                          |


## Coverage Table
| Method | Upbit                 | upbit-api   | upbit-api version           |
|--------|-----------------------|-------------|-----------------------------|
| GET    | /accounts             | Unsupported | At least 0.12.0             |
| GET    | /orders/chance        | Unsupported | At least 0.12.0             |
| GET    | /order                | Unsupported | At least 0.12.0             |
| GET    | /orders               | Unsupported | At least 0.12.0             |
| POST   | /orders               | Unsupported | At least 0.12.0             |
| DELETE | /order                | Unsupported | At least 0.12.0             |
| GET    | /withdraws            | Unsupported | At least 0.12.0             |
| GET    | /withdraw             | Unsupported | At least 0.12.0             |
| GET    | /withdraws/chance     | Unsupported | At least 0.12.0             |
| POST   | /withdraws/coin       | Unsupported | At least 0.12.0             |
| POST   | /withdraws/krw        | Unsupported | At least 0.12.0             |
| GET    | /deposits             | Unsupported | At least 0.12.0             |
| GET    | /market/all           | Supported   | 0.7.0+                      |
| GET    | /candles/minutes/unit | Supported   | 0.6.0+                      |
| GET    | /candles/days         | Unsupported | Will be supported at 0.9.0  |
| GET    | /candles/weeks        | Unsupported | Will be supported at 0.10.0  |
| GET    | /candles/months       | Unsupported | Will be supported at 0.11.0 |
| GET    | /trades/ticks         | Supported   | 0.5.0+                      |
| GET    | /ticker               | Supported   | 0.0.1+                      |
| GET    | /orderbook            | Supported   | 0.2.0+                      |
