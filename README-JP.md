# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)

upbit-apiはUpbitのOpen APIをより容易に使用できるように作ったnode.js用ライブラリです。

タイプスクリプトで作成されており、es2017にコンパイルされています。

Restful APIとWebSocket APIを支援するのが目標です。

> ### 警告, v0.2.0と互換されていないます。
> autoUpdateはautoMarketUpdateに移動しました。

## ticker(string または Array\<string\>)
`Market`の(KRW-BTCのようなものを指します。)配列を生成します。

## autoMarketUpdate(Market または Array<Market> , time , errorHandler, callback?: (market) => any)
`Market`のオブジェクトを一定時間ごとにアップデートします。

## OrderBook(string または Array\<string\>)
`OrderBook`の配列を生成します。

### OrderBook クラス
* market : KRW, BTC, USDT ...
* coin : BTC, ETH, ETC ...
* lastUpdate : `Date`
* askList, bidList : Array<`Order`>
* totalAsk, totalBid : `number`

### Order クラス
* price, size : `number`

## autoOrderBookUpdate(OrderBook または Array\<OrderBook\>, time , errorHandler, callback?: (orderBook) => any)
`callback`はオプションです。

`OrderBook`のオブジェクトを一定時間ごとにアップデートします。