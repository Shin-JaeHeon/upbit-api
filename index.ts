import Market from "./container/Market";
import OrderBook from "./container/OrderBook";
import Order from "./container/Order";
import Trade from "./container/Trade";
import Candle from "./container/Candle";
import MinutesCandle from "./container/candles/MinutesCandle";
import DayCandle from "./container/candles/DayCandle";
import WeekMonthCandle from "./container/candles/WeekCandleMonth";

const request = require("request");

function setMarketData(market, v) {
  market.tradeTime = new Date(v['trade_timestamp']);
  market.price = v['trade_price'];
  market.open = v['opening_price'];
  market.high = v['high_price'];
  market.low = v['low_price'];
  market.prevClose = v['prev_closing_price'];
  market.change = v['change'];
  market.changePrice = v['change_price'];
  market.changeRate = v['change_rate'];
  market.signedChangePrice = v['signed_change_price'];
  market.signedChangeRate = v['signed_change_rate'];
  market.tradeVolume = v['trade_volume'];
  market.accTradePrice = v['acc_trade_price'];
  market.accTradePrice24 = v['acc_trade_price_24h'];
  market.accTradeVolume = v['acc_trade_volume'];
  market.accTradeVolume24 = v['acc_trade_volume_24h'];
  market.high52wPrice = v['highest_52_week_price'];
  market.high52wDate = new Date(v['highest_52_week_date']);
  market.low52wPrice = v['lowest_52_week_price'];
  market.low52wDate = new Date(v['lowest_52_week_date']);
  market.lastUpdate = new Date();
}

/**
 * Create new Market object arrays.
 * @param market example: ['KRW-BTC', 'KRW-XRP']
 */
function ticker(market: Array<string>): Promise<Array<Market>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.upbit.com/v1/ticker',
      qs: {markets: market.toString()}
    };
    request(options, (error, response, body) => {
      if (error) reject(error);
      else {
        const data = [];
        body = JSON.parse(body.toString());
        body.forEach(v => {
          const market = new Market(v['market'].split('-')[0], v['market'].split('-')[1]);
          setMarketData(market, v);
          data.push(market);
        });
        resolve(data);
      }
    });
  });
}

/**
 * Updates object [market] every specified [time] time.
 * @param market An object or an Array<Market> to update
 * @param time update interval(ms)
 * @param {(error) => any} errorHandler
 * @param {(market) => any} callback called when updated, optional
 */
function autoMarketUpdate(market: any, time: number, errorHandler: (error) => any, callback?: (market) => any): void {
  const run = market => setInterval(() => {
    const options = {
      method: 'GET', url: 'https://api.upbit.com/v1/ticker', qs: {markets: `${market.market}-${market.coin}`}
    };
    request(options, (error, response, body) => {
      if (error) errorHandler(error);
      else {
        body = JSON.parse(body.toString())[0];
        setMarketData(market, body);
        if (callback) callback(market);
      }
    });
  }, time);
  if (Array.isArray(market)) market.forEach(v => run(v));
  else run(market);

}

function setOrderBookData(v, orderBook: OrderBook): OrderBook {
  const ask = [];
  const bid = [];
  v['orderbook_units'].forEach(v => {
    ask.push(new Order(v['ask_price'], v['ask_size']));
    bid.push(new Order(v['bid_price'], v['bid_size']));
  });
  orderBook.askList = ask;
  orderBook.bidList = bid;
  return orderBook;
}

function autoOrderBookUpdate(orderBook: any, time: number, errorHandler: (error) => any, callback?: (orderBook) => any): void {
  const run = orderBook => setInterval(() => {
    request({
      method: 'GET',
      url: 'https://api.upbit.com/v1/orderbook',
      qs: {markets: `${orderBook.market}-${orderBook.coin}`}
    }, (error, response, body) => {
      if (error) errorHandler(error);
      body = JSON.parse(body);
      setOrderBookData(body[0], orderBook);
      if (callback) callback(orderBook);
    });
  }, time);
  if (Array.isArray(orderBook)) orderBook.forEach(v => run(v));
  else run(orderBook);

}

/**
 * Load the order book.
 * @param market
 */
function orderBook(market: any): Promise<Array<OrderBook>> {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      url: 'https://api.upbit.com/v1/orderbook',
      qs: {markets: market.toString()}
    }, (error, response, body) => {
      if (error) reject(error);
      body = JSON.parse(body);
      resolve(body.map(v => setOrderBookData(v, new OrderBook(v['market'].split('-')[0], v['market'].split('-')[1]))));
    });
  });
}

function setTradeData(v, trade: Trade): Trade {
  trade.tradeTime = new Date(v['timestamp']);
  trade.price = v['trade_price'];
  trade.volume = v['trade_volume'];
  trade.prev_closing_price = v['prev_closing_price'];
  trade.change_price = v['change_price'];
  trade.sequential_id = v['sequential_id'];
  trade.isAsk = v['ask_bid'] === 'ASK';
  trade.lastUpdate = new Date();
  return trade;
}

/**
 * ticks
 * @param {string | Array<string>}market ex) KRW-XRP
 * @param {number} count
 * @param {string} to HHmmss or HH:mm:ss
 * @param {number} cursor sequential_id
 */
function ticks(market: string | Array<string>, count: number = 1, to?: string, cursor?: number): Promise<Array<Trade>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://api.upbit.com/v1/trades/ticks',
      qs: {
        market: market.toString(),
        count: count,
      }
    };
    // @ts-ignore
    if (to) options.qs.to = to;
    // @ts-ignore
    if (cursor) options.qs.cursor = curosr;
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()).map(v =>
        setTradeData(v, new Trade(v['market'].split('-')[0], v['market'].split('-')[1]))));

    });
  });
}

function setCandle(v, candle: Candle, type = 0): Candle {
  candle.accTradePrice = v.candle_acc_trade_volume;
  candle.accTradePrice = v.candle_acc_trade_price;
  candle.price = v['trade_price'];
  candle.high = v['high_price'];
  candle.low = v['low_price'];
  candle.open = v['opening_price'];
  candle.candleDateTimeUTC = new Date(`${v['candle_date_time_utc']}+0000`);
  candle.candleDateTimeKST = new Date(`${v['candle_date_time_kst']}+0900`);
  candle.timestamp = v['timestamp'];
  if (type === 0) setMinutesCandle(v, <MinutesCandle> candle);
  if (type === 1) setDayCandle(v, <DayCandle> candle);
  if (type === 2) setWeekMonthCandle(v, <WeekMonthCandle> candle);
  return candle;
}

function setMinutesCandle(v, candle: MinutesCandle): MinutesCandle {
  candle.unit = v.unit;
  return candle;
}

function setWeekMonthCandle(v, candle: WeekMonthCandle): WeekMonthCandle {
  console.log(v);
  candle.firstDayOfPeriod = v.first_day_of_period;
  return candle;
}

function setDayCandle(v, candle: DayCandle): DayCandle {
  candle.changePrice = v.change_price;
  candle.changeRate = v.change_rate;
  candle.convertedTradePrice = v.converted_trade_price;
  candle.prevClosingPrice = v.prev_closing_price;
  return candle;
}

/**
 * get minutes candles
 * @param market 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP']
 * @param unit 1, 3, 5, 15, 10, 30, 60, 240
 * @param count count of candles
 * @param to yyyy-MM-dd'T'HH:mm:ssXXX
 */
function candlesMinutes(market: string | Array<string>, unit: number, count?: number, to?: string): Promise<Array<MinutesCandle>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.upbit.com/v1/candles/minutes/${unit}`,
      qs: {
        market: market.toString(),
      }
    };
    // @ts-ignore
    if (count) options.qs.count = count;
    // @ts-ignore
    if (to) options.qs.to = to;
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()).map(v =>
        setCandle(v, new Candle(v['market'].split('-')[0], v['market'].split('-')[1]))));
    });
  });
}

/**
 * get days candles
 * @param market 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP']
 * @param count count of candles
 * @param to yyyy-MM-dd'T'HH:mm:ssXXX
 * @param convertingPriceUnit default : KRW
 */
function candlesDay(market: string | Array<string>, count?: number, to?: string, convertingPriceUnit?: string): Promise<Array<DayCandle>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.upbit.com/v1/candles/days`,
      qs: {
        market: market.toString(),
      }
    };
    // @ts-ignore
    if (count) options.qs.count = count;
    // @ts-ignore
    if (to) options.qs.to = to;
    // @ts-ignore
    if (convertingPriceUnit) options.qs.convertingPriceUnit = convertingPriceUnit;
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()).map(v =>
        setCandle(v, new Candle(v['market'].split('-')[0], v['market'].split('-')[1]), 1)));
    });
  });
}

/**
 * get weeks candles
 * @param market 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP']
 * @param count count of candles
 * @param to yyyy-MM-dd'T'HH:mm:ssXXX
 */
function candlesWeek(market: string | Array<string>, count?: number, to?: string): Promise<Array<DayCandle>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.upbit.com/v1/candles/weeks`,
      qs: {
        market: market.toString(),
      }
    };
    // @ts-ignore
    if (count) options.qs.count = count;
    // @ts-ignore
    if (to) options.qs.to = to;
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()).map(v =>
        setCandle(v, new Candle(v['market'].split('-')[0], v['market'].split('-')[1]), 2)));
    });
  });
}

/**
 * get months candles
 * @param market 'KRW-BTC' or ['KRW-BTC', 'KRW-XRP']
 * @param count count of candles
 * @param to yyyy-MM-dd'T'HH:mm:ssXXX
 */
function candlesMonth(market: string | Array<string>, count?: number, to?: string): Promise<Array<DayCandle>> {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.upbit.com/v1/candles/months`,
      qs: {
        market: market.toString(),
      }
    };
    // @ts-ignore
    if (count) options.qs.count = count;
    // @ts-ignore
    if (to) options.qs.to = to;
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()).map(v =>
        setCandle(v, new Candle(v['market'].split('-')[0], v['market'].split('-')[1]), 2)));
    });
  });
}

function allMarket() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `https://api.upbit.com/v1/market/all`
    };
    request(options, (error, response, body) => {
      if (error) reject(error);
      else resolve(JSON.parse(body.toString()));
    });
  });
}

export default {
  ticker,
  autoMarketUpdate,
  orderBook,
  autoOrderBookUpdate,
  ticks,
  candlesMinutes,
  candlesDay,
  candlesWeek,
  candlesMonth,
  allMarket
};
