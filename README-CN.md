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
| 名                | 类型   | 说明                               |
|-------------------|--------|------------------------------------|
| market            | string | ex) KRW, BTC, USDT ...             |
| coin              | string | ex) BTC, ETH, XRP ...              |
| marketCode        | string | ex) KRW-BTC, KRW-XRP ...           |
| tradeTime         | `Date` | 交易时间                           |
| price             | number | 低价                               |
| open              | number | 起价                               |
| high              | number | 最高价                             |
| low               | number | 最低价                             |
| prevClose         | number | 前日終价                           |
| change            | number | EVEN(补合), RISE(上升), FALL(下跌) |
| changePrice       | number | 变值金额绝对值                     |
| changeRate        | number | 变化率绝对值                       |
| signedChangePrice | number | signed 变化金额                    |
| signedChangeRate  | number | signed 变码率                      |
| tradeVolume       | number | 最新交易量                         |
| accTradePrice     | number | 累计交易货款(UTC零点)              |
| accTradePrice24   | number | 24小时累计交易货款                 |
| accTradeVolume    | number | 累计交易量(UTC零点)                |
| accTradeVolume24  | number | 24小时累计交易货款                 |
| high52wPrice      | number | 第52话新的高价                     |
| high52wDate       | `Date` | 第52话新的高价成就日               |
| low52wPrice       | number | 第52话新的低价                     |
| low52wDate    | `Date` | 第52话新的低价成就日               |
| lastUpdate        | `Date` | 该对象更新的时间                   |

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
| lastUpdate         | `Date` | 该对象更新的时间 |
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
| lastUpdate         | `Date`  | 该对象更新的时间 |
| tradeTime          | `Date`  | 交易时间|
| price              | number  | 合同价格 |
| volume             | number  | 订单数量  |
| prev_closing_price | number  | 前一日收盘价 |
| change_price       | number  | 合同价格 - 前一日收盘价  |
| isAsk              | boolean | 合同类型  |
| sequential_id      | number  | 合同号(Unique)  |

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
| unit              | number | minutes. Possible values: 1, 3, 5, 15, 10, 30, 60, 240    |
| lastUpdate        | `Date` | The time when this object updated                         |