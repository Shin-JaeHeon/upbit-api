# upbit-api
[![npm](https://img.shields.io/npm/v/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/dt/upbit-api.svg?style=flat-square)](https://www.npmjs.com/package/upbit-api)
[![npm](https://img.shields.io/npm/l/upbit-api.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://opensource.org/licenses/MIT)
[![npm](https://img.shields.io/badge/Readme-English-lightgray.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README.md)
[![npm](https://img.shields.io/badge/Readme-한국어-blue.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-KR.md)
[![npm](https://img.shields.io/badge/Readme-日本語-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-JP.md)
[![npm](https://img.shields.io/badge/Readme-汉语-orange.svg?style=flat-square)](https://github.com/Shin-JaeHeon/upbit-api/blob/master/README-CN.md)

upbit-api는 업비트의 Open API를 좀 더 쉽게 사용할 수 있도록 만든 node.js용 라이브러리입니다.

타입스크립트로 작성되어 있으며, es2017로 컴파일 되어있습니다.

Restful API와 WebSocket API를 모두 지원하는 것이 목표입니다.

> ### 경고, v0.2.0과 호환되지 않습니다
> autoUpdate는 autoMarketUpdate으로 이동하였습니다.

## ticker(market)
`Market` 오브젝트(KRW-BTC 같은 것을 일컫습니다.) 배열을 생성합니다.

| 매개변수       | 타입                       | 설명                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string 또는 Array\<string\>  | 'KRW-BTC' 또는 ['KRW-BTC', 'KRW-XRP'] |

### Market 클래스
| 이름     | 타입   | 설명 |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |

## autoMarketUpdate(market, time , errorHandler, callback?)
`Market` 오브젝트를 일정 `time`마다 업데이트 합니다.

| 매개변수       | 타입                         | 설명                                   |
|----------------|---------------------------   |---------------------------------------|
| market         | `Market` 또는 Array\<Market\>  |  업데이트 될  `Market` 오브젝트 |
| time           | number                       | 업데이트 주기 (밀리초) |
| errorHandler   | function, (error) => any     | 에러 핸들러  |
| callback   | function, (market) => any     |  선택사항, 오브젝트가 업데이트 될 때 호출됩니다. |

## OrderBook(string 또는 Array\<string\>)
`OrderBook` 오브젝트 배열을 반환합니다.

| 매개변수       | 타입                       | 설명                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string 또는 Array\<string\>  | 'KRW-BTC' 또는 ['KRW-BTC', 'KRW-XRP'] |

### OrderBook class
| 매개변수  |    타입        | 설명 |
|----------------|------- |-------------|
| market         | string | ex) KRW, BTC, USDT ... |
| coin         | string | ex) BTC, ETH, XRP ... |
| marketCode         | string | ex) KRW-BTC, KRW-XRP ... |
| lastUpdate         | `Date` | 이 객체가 업데이트된 시간|
| askList         | Array\<`Order`\> | Ask 오더 리스트 |
| bidList         | Array\<`Order`\> | Bid 오더 리스트 |
| totalAsk         |number  | 토탈 ask  |
| totalBid         |number  | 토탈 bid  |

### Order class
* price, size : `number`
| 매개변수  |    타입        | 설명 |
|----------------|------- |-------------|
| price       | number | 가격|
| size        | number | 주문량 |

## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
`OrderBook` 오브젝트를 일정 시간마다 업데이트 합니다.

| 매개변수       | 타입                         | 설명                                   |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` 또는 Array\<OrderBook\>  |업데이트 될  `OrderBook` 오브젝트 |
| time           | number                       | 업데이트 주기 (밀리초) |
| errorHandler   | function, (error) => any     | 에러 핸들러  |
| callback   | function, (orderBook) => any     |  선택사항, 오브젝트가 업데이트 될 때 호출됩니다. |