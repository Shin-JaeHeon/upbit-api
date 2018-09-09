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

### Market class
| 名       | 类型   | 说明 |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |

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


### OrderBook class
| 名       | 类型   | 说明 |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date` | 此对象更新的时间 |
| askList         | Array\<`Order`\> | Ask order list |
| bidList         | Array\<`Order`\> | Bid order list |
| totalAsk         |number  | total ask  |
| totalBid         |number  | total bid  |

### Order class
| 名       | 类型   | 说明 |
|----------------|------- |-------------|
| price       | number | price of order|
| size        | number | size of order |
## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
更新对象`OrderBook`每个特定的`time(ms)`时间。

| 参数       | 类型                         | 说明                                   |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` 或 Array\<OrderBook\>  | `Market` object that will be updated. |
| time           | number                       | 更新周期 (毫秒) |
| errorHandler   | function, (error) => any     | 错误处理程序  |
| callback   | function, (orderBook) => any     |  选择事项, this function called when object updated.  |

## ticks(market)
创建新的`Trade`对象数组。

| 参数           | 类型                       | 说明                         |
|----------------|--------------------------- |-------------------------------------|
| params         | string 或 Array\<string\>  | 'KRW-BTC' 或 ['KRW-BTC', 'KRW-XRP'] |
| count          | number                     | count                               |
| to             | string                     | HHmmss or HH:mm:ss                  |
| cursor         | number                     | sequential_id                       |

### Trade class
| 名                 | 类型    | 说明 |
|--------------------|-------  |-------------|
| market             | string  | ex) KRW, BTC, USDT ... |
| coin               | string  | ex) BTC, ETH, XRP ... |
| marketCode         | string  | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date`  | 此对象更新的时间 |
| tradeTime          | `Date`  | 交易时间|
| price              | number  | 合同价格 |
| volume             | number  | 订单数量  |
| prev_closing_price | number  | 前一日收盘价 |
| change_price       | number  | 合同价格 - 前一日收盘价  |
| isAsk              | boolean | 合同类型  |
| sequential_id      | number  | 合同号(Unique)  |