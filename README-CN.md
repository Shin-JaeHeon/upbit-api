# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)
[![npm](https://img.shields.io/badge/Readme-汉语-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-CN.md)

upbit-api是node.js的一个库,它使Upbit的Open API更易于使用。

它使用typescript编写并在es2017中编译。

目标是支持Restful API和WebSocket API。

## ticker(market)
创建新的`Market`对象数组。

| 参数       | 类型                       | 说明                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string 或 Array\<string\>  | 'KRW-BTC' 或 ['KRW-BTC', 'KRW-XRP'] |

## autoMarketUpdate(market, time , errorHandler, callback?)
更新对象`Market`每个特定的`time(ms)`时间。

| 参数       | 类型                         | 说明                                   |
|----------------|---------------------------   |---------------------------------------|
| market         | `Market` 或 Array\<Market\>  |  `Market` object that will be updated. |
| time           | number                       | 更新周期 (毫秒) |
| errorHandler   | function, (error) => any     | 错误处理程序  |
| callback   | function, (market) => any     |  选择事项, this function called when object updated.  |

## OrderBook(string 或 Array\<string\>)
创建新的`OrderBook`对象数组。

| 参数       | 类型                       | 说明                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string 或 Array\<string\>  | 'KRW-BTC' 或 ['KRW-BTC', 'KRW-XRP'] |

### OrderBook Class
* market : KRW, BTC, USDT ...
* coin : BTC, ETH, ETC ...
* lastUpdate : `Date`
* askList, bidList : Array<`Order`>
* totalAsk, totalBid : `number`

### Order Class
* price, size : `number`

## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
更新对象`OrderBook`每个特定的`time(ms)`时间。

| 参数       | 类型                         | 说明                                   |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` 或 Array\<OrderBook\>  | `Market` object that will be updated. |
| time           | number                       | 更新周期 (毫秒) |
| errorHandler   | function, (error) => any     | 错误处理程序  |
| callback   | function, (orderBook) => any     |  选择事项, this function called when object updated.  |