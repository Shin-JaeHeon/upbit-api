"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Market_1 = require("./container/Market");
const OrderBook_1 = require("./container/OrderBook");
const Order_1 = require("./container/Order");
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
function ticker(market) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: 'https://api.upbit.com/v1/ticker',
            qs: { markets: market.toString() }
        };
        request(options, (error, response, body) => {
            if (error)
                reject(error);
            else {
                const data = [];
                body = JSON.parse(body.toString());
                body.forEach(v => {
                    const market = new Market_1.default(v['market'].split('-')[0], v['market'].split('-')[1]);
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
 * @param {(market) => any} callback called when updated
 */
function autoUpdate(market, time, errorHandler, callback) {
    const run = market => setInterval(() => {
        const options = {
            method: 'GET', url: 'https://api.upbit.com/v1/ticker', qs: { markets: `${market.market}-${market.coin}` }
        };
        request(options, (error, response, body) => {
            if (error)
                errorHandler(error);
            else {
                body = JSON.parse(body.toString())[0];
                setMarketData(market, body);
                if (callback)
                    callback(market);
            }
        });
    }, time);
    if (Array.isArray(market))
        market.forEach(v => run(v));
    else
        run(market);
}
/**
 * Load the order book.
 * @param market
 */
function orderBook(market) {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: 'https://api.upbit.com/v1/orderbook',
            qs: { markets: market.toString() }
        }, (error, response, body) => {
            body = JSON.parse(body);
            resolve(body.map(v => {
                const order = new OrderBook_1.default(v['market'].split('-')[0], v['market'].split('-')[1]);
                const ask = [];
                const bid = [];
                v['orderbook_units'].forEach(v => {
                    ask.push(new Order_1.default(v['ask_price'], v['ask_size']));
                    bid.push(new Order_1.default(v['bid_price'], v['bid_size']));
                });
                order.askList = ask;
                order.bidList = bid;
                return order;
            }));
        });
    });
}
exports.default = { ticker, autoUpdate, orderBook };
