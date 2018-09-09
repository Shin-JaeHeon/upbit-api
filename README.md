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
> ### Warning, incompatible with v0.2.0.
> autoUpdate has been moved to autoMarketUpdate.

## ticker(market)
Create new `Market` object arrays.

| Parameter      | Type                       | Description                         |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |

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
* market : KRW, BTC, USDT ...
* coin : BTC, ETH, ETC ...
* lastUpdate : `Date`
* askList, bidList : Array<`Order`>
* totalAsk, totalBid : `number`

### Order class
* price, size : `number`

## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
Updates object `OrderBook` every specified `time` time.

| Parameter      | Type                         | Description                           |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` or Array\<OrderBook\>  | `OrderBook` object that will be updated. |
| time           | number                       | Frequency to update (in milliseconds) |
| errorHandler   | function, (error) => any     | error handler  |
| callback   | function, (orderBook) => any     |  optional, this function called when object updated.  |


