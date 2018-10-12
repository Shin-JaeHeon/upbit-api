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
## 커버리지 테이블
**§** 심볼은 `autoMarketUpdate` 또는 `autoOrderBookUpdate`가 있습니다.

| 메소드 | Upbit                 | upbit-api      | 지원 버전       |
|--------|-----------------------|----------------|-----------------|
| GET    | /ticker               | ticker **§**   | 0.0.1 이상      |
| GET    | /orderbook            | orderBook **§**| 0.2.0 이상      |
| GET    | /trades/ticks         | ticks          | 0.5.0 이상      |
| GET    | /candles/minutes/unit | candlesMinutes | 0.6.0 이상      |
| GET    | /market/all           | allMarket      | 0.7.0 이상      |
| GET    | /candles/days         | candlesDay     | 0.9.0 이상      |
| GET    | /candles/weeks        | candlesWeek    | 0.10.0 이상     |
| GET    | /candles/months       | candlesMonth   | 0.10.0 이상     |
| GET    | /accounts             | 미지원         | 적어도 0.11.0   |
| GET    | /orders/chance        | 미지원         | 적어도 0.11.0   |
| GET    | /order                | 미지원         | 적어도 0.11.0   |
| GET    | /orders               | 미지원         | 적어도 0.11.0   |
| POST   | /orders               | 미지원         | 적어도 0.11.0   |
| DELETE | /order                | 미지원         | 적어도 0.11.0   |
| GET    | /withdraws            | 미지원         | 적어도 0.11.0   |
| GET    | /withdraw             | 미지원         | 적어도 0.11.0   |
| GET    | /withdraws/chance     | 미지원         | 적어도 0.11.0   |
| POST   | /withdraws/coin       | 미지원         | 적어도 0.11.0   |
| POST   | /withdraws/krw        | 미지원         | 적어도 0.11.0   |
| GET    | /deposits             | 미지원         | 적어도 0.11.0   |
| 웹소켓 | ticker                | 미지원         | 적어도 0.11.0    |
| 웹소켓 | trade                 | 미지원         | 적어도 0.11.0    |
| 웹소켓 | orderbook             | 미지원         | 적어도 0.11.0    |
## ticker(market)
`Market` 오브젝트(KRW-BTC 같은 것을 일컫습니다.) 배열을 생성합니다.

| 매개변수 | 타입                        | 설명                                  |
|----------|-----------------------------|---------------------------------------|
| market   | string 또는 Array\<string\> | 'KRW-BTC' 또는 ['KRW-BTC', 'KRW-XRP'] |

### Market 클래스
| 이름              | 타입   | 설명                               |
|-------------------|--------|------------------------------------|
| market            | string | ex) KRW, BTC, USDT ...             |
| coin              | string | ex) BTC, ETH, XRP ...              |
| marketCode        | string | ex) KRW-BTC, KRW-XRP ...           |
| tradeTime         | `Date` | 거래 시간                           |
| price             | number | 가격                               |
| open              | number | 시가                               |
| high              | number | 고가                               |
| low               | number | 저가                               |
| prevClose         | number | 전일 종가                          |
| change            | number | EVEN(보합), RISE(상승), FALL(하락) |
| changePrice       | number | 변화액의 절대값                    |
| changeRate        | number | 변화율의 절대값                    |
| signedChangePrice | number | 부호가 있는 변화액                 |
| signedChangeRate  | number | 부호가 있는 변화율                 |
| tradeVolume       | number | 가장 최근 거래량                   |
| accTradePrice     | number | 누적 거래대금(UTC 0시 기준)        |
| accTradePrice24   | number | 24시간 누적 거래대금               |
| accTradeVolume    | number | 누적 거래량(UTC 0시 기준)          |
| accTradeVolume24  | number | 24시간 누적 거래대금               |
| high52wPrice      | number | 52주 신고가                        |
| high52wDate       | `Date` | 52주 신고가 달성일                 |
| low52wPrice       | number | 52주 신저가                        |
| low52wDate    | `Date` | 52주 신저가 달성일                 |
| lastUpdate        | `Date` | 이 객체가 업데이트된 시간          |

## autoMarketUpdate(market, time , errorHandler, callback?)
`Market` 오브젝트를 일정 `time`마다 업데이트 합니다.

| 매개변수     | 타입                          | 설명                                            |
|--------------|-------------------------------|-------------------------------------------------|
| market       | `Market` 또는 Array\<Market\> | 업데이트 될  `Market` 오브젝트                  |
| time         | number                        | 업데이트 주기 (밀리초)                          |
| errorHandler | function, (error) => any      | 에러 핸들러                                     |
| callback     | function, (market) => any     | 선택사항, 오브젝트가 업데이트 될 때 호출됩니다. |

## OrderBook(string 또는 Array\<string\>)
`OrderBook` 오브젝트 배열을 반환합니다.

| 매개변수       | 타입                       | 설명                                 |
|----------------|--------------------------- |-------------------------------------|
| market         | string 또는 Array\<string\>  | 'KRW-BTC' 또는 ['KRW-BTC', 'KRW-XRP'] |

### OrderBook class
| 매개변수   | 타입             | 설명                      |
|------------|------------------|---------------------------|
| market     | string           | ex) KRW, BTC, USDT ...    |
| coin       | string           | ex) BTC, ETH, XRP ...     |
| marketCode | string           | ex) KRW-BTC, KRW-XRP ...  |
| lastUpdate | `Date`           | 이 객체가 업데이트된 시간 |
| askList    | Array\<`Order`\> | Ask 오더 리스트           |
| bidList    | Array\<`Order`\> | Bid 오더 리스트           |
| totalAsk   | number           | 토탈 ask                  |
| totalBid   | number           | 토탈 bid                  |

### Order class
| 매개변수 | 타입   | 설명   |
|----------|--------|--------|
| price    | number | 가격   |
| size     | number | 주문량 |

## autoOrderBookUpDate(orderBook, time , errorHandler, callback?)
`OrderBook` 오브젝트를 일정 시간마다 업데이트 합니다.

| 매개변수       | 타입                         | 설명                                   |
|----------------|---------------------------   |---------------------------------------|
| orderBook         | `OrderBook` 또는 Array\<OrderBook\>  |업데이트 될  `OrderBook` 오브젝트 |
| time           | number                       | 업데이트 주기 (밀리초) |
| errorHandler   | function, (error) => any     | 에러 핸들러  |
| callback   | function, (orderBook) => any     |  선택사항, 오브젝트가 업데이트 될 때 호출됩니다. |

## ticks(market)
`Trade` 오브젝트 배열을 반환합니다.

| 매개변수 | 타입                        | 설명                                  |
|----------|-----------------------------|---------------------------------------|
| params   | string 또는 Array\<string\> | 'KRW-BTC' 또는 ['KRW-BTC', 'KRW-XRP'] |
| count    | number                      | count                                 |
| to       | string                      | HHmmss 또는 HH:mm:ss                  |
| cursor   | number                      | sequential_id                         |

### Trade class
| 이름               | 타입    | 설명                      |
|--------------------|---------|---------------------------|
| market             | string  | ex) KRW, BTC, USDT ...    |
| coin               | string  | ex) BTC, ETH, XRP ...     |
| marketCode         | string  | ex) KRW-BTC, KRW-XRP ...  |
| lastUpdate         | `Date`  | 이 객체가 업데이트된 시간 |
| tradeTime          | `Date`  | 체결 시간                 |
| price              | number  | 체결 가격                 |
| volume             | number  | 체결 거래량               |
| prev_closing_price | number  | 전일 종가                 |
| change_price       | number  | 변화량                    |
| isAsk              | boolean | 매도/매수                 |
| sequential_id      | number  | 체결 번호(Unique)         |

## candlesMinutes(market, unit?, count?, to?)
`Candle` 오브젝트 배열을 반환합니다.

| 매개변수      | 타입                       | 설명                             |
|----------------|--------------------------- |-------------------------------------|
| market         | string or Array\<string\>  | 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP'] |
| unit           | number                     | 1, 3, 5, 15, 10, 30, 60, 240       |
| count          | number                     | 갯수                              |
| to             | string                     | yyyy-MM-dd'T'HH:mm:ssXXX            |

### Candle class
| 이름              | 타입   | 설명                      |
|-------------------|--------|---------------------------|
| market            | string | ex) KRW, BTC, USDT ...    |
| coin              | string | ex) BTC, ETH, XRP ...     |
| marketCode        | string | ex) KRW-BTC, KRW-XRP ...  |
| timestamp         | number | 마지막 틱이 저장된 시각   |
| candleDateTimeUTC | `Date` | 캔들 기준 시각(UTC 기준)  |
| candleDateTimeKST | `Date` | 캔들 기준 시각(KST 기준)  |
| open              | number | 시가                      |
| high              | number | 고가                      |
| low               | number | 저가                      |
| accTradePrice     | number | 누적 거래대금             |
| accTradeVolume    | number | 누적 거래대금 수량        |
| lastUpdate        | `Date` | 이 객체가 업데이트된 시간 |

#### MinutesCandle class
`MinutesCandle` extends `Candle`
| 이름 | 타입   | 설명                                        |
|------|--------|---------------------------------------------|
| unit | number | 분, 가능한 분: 1, 3, 5, 15, 10, 30, 60, 240 |
#### DayCandle class
`DayCandle` extends `Candle`

| 이름                | 타입   | 설명                               |
|---------------------|--------|---------------------------------------|
| prevClosingPrice    | number | 전일 종가(UTC 0시 기준) |
| convertedTradePrice | number | 종가 환산 화폐 단위로 환산된 가격(요청에 convertingPriceUnit 파라미터 없을 시 해당 필드 undefined)  |
| changePrice         | number | 전일 종가 대비 변화 금액                |
| changeRate          | number | 전일 종가 대비 변화량                  |
#### WeekMonthCandle class
`WeekMonthCandle` extends `Candle`

| Name             | Type   | Description            |
|------------------|--------|------------------------|
| firstDayOfPeriod | number | 캔들 기간의 가장 첫 날 |
## allMarket()
업비트에서 거래 가능한 마켓 목록

매개변수가 없습니다.

| 이름         | 타입    | 설명                                             |
|--------------|--------|---------------------------------------------------|
| market       | string | 업비트에서 제공하는 마켓 정보 예) BTC-XRP          |
| korean_name  | string | 한국어 이름 예) 비트코인                           |
| english_name | string | 영어 이름 예) Bitcoin                             |
