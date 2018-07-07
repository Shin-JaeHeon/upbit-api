# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)

upbit-api是node.js的一个库,它使Upbit的Open API更易于使用。

它使用typescript编写并在es2017中编译。

目标是支持Restful API和WebSocket API。

## ticker(string or Array\<string\>)
创建新的**Market**对象数组。

## autoUpdate(Market or Array\<Market\>)
更新对象**Market**每个特定的**time(ms)**时间。

## OrderBook(string or Array\<string\>)
创建新的**OrderBook**对象数组。

### OrderBook class
* market : KRW, BTC, USDT ...
* coin : BTC, ETH, ETC ...
* lastUpdate : Date
* askList, bidList : Array<**Order**>
* totalAsk, totalBid : number

### Order class
* price, size : number