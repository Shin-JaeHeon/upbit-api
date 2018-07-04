import Market from "./Market";

const request = require("request");

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
function autoUpdate(market: any, time: number, errorHandler: (error) => any, callback?: (market) => any): void {
    const run = market => setInterval(() => {
        const options = {
            method: 'GET', url: 'https://api.upbit.com/v1/ticker', qs: {markets: `${market.market}-${market.coin}`}
        };
        request(options, (error, response, body) => {
            if (error) errorHandler(error);
            else {
                body = JSON.parse(body.toString())[0];
                market.tradeTime = new Date(body['trade_timestamp']);
                market.price = body['trade_price'];
                market.open = body['opening_price'];
                market.high = body['high_price'];
                market.low = body['low_price'];
                market.prevClose = body['prev_closing_price'];
                market.change = body['change'];
                market.changePrice = body['change_price'];
                market.changeRate = body['change_rate'];
                market.signedChangePrice = body['signed_change_price'];
                market.signedChangeRate = body['signed_change_rate'];
                market.tradeVolume = body['trade_volume'];
                market.accTradePrice = body['acc_trade_price'];
                market.accTradePrice24 = body['acc_trade_price_24h'];
                market.accTradeVolume = body['acc_trade_volume'];
                market.accTradeVolume24 = body['acc_trade_volume_24h'];
                market.high52wPrice = body['highest_52_week_price'];
                market.high52wDate = new Date(body['highest_52_week_date']);
                market.low52wPrice = body['lowest_52_week_price'];
                market.low52wDate = new Date(body['lowest_52_week_date']);
                market.lastUpdate = new Date();
                if (callback) callback(market);
            }
        });
    }, time);
    if (Array.isArray(market)) market.forEach(v => run(v));
    else run(market);

}

export default {ticker, autoUpdate}