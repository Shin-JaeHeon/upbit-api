# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)
[![npm](https://img.shields.io/badge/Readme-汉语-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-CN.md)

upbit-apiはUpbitのOpen APIをより容易に使用できるように作ったnode.js用ライブラリです。

タイプスクリプトで作成されており、es2017にコンパイルされています。

Restful APIとWebSocket APIを支援するのが目標です。

> ### 警告, v0.2.0と互換されていないます。
> autoUpdateはautoMarketUpdateに移動しました。

## ticker(market)
`Market`の(KRW-BTCのようなものを指します。)配列を生成します。

  | パラメータ       | タイプ                       | 説明                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string または Array\<string\>  | 'KRW-BTC' または ['KRW-BTC', 'KRW-XRP'] |
### Market class
| Name     | タイプ   | 説明      |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |
## autoMarketUpdate(market, time , errorHandler, callback?)
`Market`のオブジェクトを一定時間ごとにアップデートします。

| パラメータ       | タイプ                         | 説明                                   |
|----------------|---------------------------   |---------------------------------------|
| market         | `Market` または Array\<Market\>  |  アップデートなる  `Market` オブジェクト |
| time           | number                       | アップデート周期 (ミリ秒) |
| errorHandler   | function, (error) => any     | エラーハンドラ  |
| callback   | function, (market) => any     |  選択事項、オブジェクトが更新されときに呼び出されます。 |

## OrderBook(market)
`OrderBook`の配列を生成します。

| パラメータ       | タイプ                       | 説明                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string または Array\<string\>  | 'KRW-BTC' または ['KRW-BTC', 'KRW-XRP'] |

### OrderBook classクラス
| Name     | タイプ   | 説明      |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date` | このオブジェクトが更新された時刻 |
| askList         | Array\<`Order`\> | Ask order リスト |
| bidList         | Array\<`Order`\> | Bid order リスト |
| totalAsk         |number  | total ask  |
| totalBid         |number  | total bid  |

### Order クラス
* price, size : `number`
| Name     | タイプ   | 説明      |
|----------------|------- |-------------|
| price       | number | price of order|
| size        | number | size of order |

## autoOrderBookUpdate(orderBook, time , errorHandler, callback?)
`OrderBook`のオブジェクトを一定時間ごとにアップデートします。

| パラメータ       | タイプ                         | 説明                                   |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` または Array\<OrderBook\>  |アップデートなる  `OrderBook` オブジェクト |
| time           | number                       | アップデート周期 (ミリ秒) |
| errorHandler   | function, (error) => any     | エラーハンドラ  |
| callback   | function, (orderBook) => any     |  選択事項、オブジェクトが更新されときに呼び出されます。 |


翻訳に間違いがあれば、PRお願いします。