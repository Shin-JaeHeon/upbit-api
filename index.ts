const request = require("request");

function ticker(market: Array<string>): Promise<any> {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            url: 'https://api.upbit.com/v1/ticker',
            qs: {markets: market.toString()}
        };
        request(options, (error, response, body) => {
            const data = {};
            body.forEach(v => {
                data[v.market] = {
                    tradeTime: new Date(data['trade_timestamp']),
                    price: data['trade_price'],
                    open: data["opening_price"],
                    high: data["high_price"],
                    low: data["low_price"],
                    prev_close: data["prev_closing_price"],
                    change: data["change"],
                    changePrice: data["change_price"],
                    changeRate: data["change_rate"],
                    signedChangePrice: data["signed_change_price"],
                    signedChangeRate: data["signed_change_rate"],
                    tradeVolume: data["trade_volume"],
                    accTradePrice: data["acc_trade_price"],
                    accTradePrice24: data["acc_trade_price_24h"],
                    accTradeVolume: data["acc_trade_volume"],
                    accTradeVolume24: data["acc_trade_volume_24h"],
                    high52wPrice: data["highest_52_week_price"],
                    high52wDate: data["highest_52_week_date"],
                    low52wPrice: data["lowest_52_week_price"],
                    low52wDate: data["lowest_52_week_date"],
                };
            });
            resolve(data);
        });
    });
}

export default {ticker}