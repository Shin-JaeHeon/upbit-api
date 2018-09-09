# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)

upbit-api is an API that makes Upbit OpenAPI easy to use.
This api will support the Restful API and Websocket API.


It was created with Typescript and compiled into es2017.
> ### Warning, incompatible with v0.2.0.
> autoUpdate has been moved to autoMarketUpdate.

## ticker(string or Array\<string\>)
Create new `Market` object arrays.

## autoMarketUpdate(Market or Array\<Market\>, time , errorHandler, callback?: (market) => any)
Updates object `market` every specified `time` time.

## OrderBook(string or Array\<string\>)
Create new `OrderBook` object arrays.

### OrderBook class
* market : KRW, BTC, USDT ...
* coin : BTC, ETH, ETC ...
* lastUpdate : `Date`
* askList, bidList : Array<`Order`>
* totalAsk, totalBid : `number`

### Order class
* price, size : `number`
date
## autoOrderBookUp(OrderBook or Array\<OrderBook\>, time , errorHandler, callback?: (orderBook) => any)
`callback` is option.

Updates object `OrderBook` every specified `time` time.