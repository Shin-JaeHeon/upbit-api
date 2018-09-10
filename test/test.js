"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
index_1.default.ticker(['KRW-BTC']).then(v => {
    const KRWBTC = v[0];
    console.log(KRWBTC);
    index_1.default.autoMarketUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});
index_1.default.orderBook("KRW-XRP").then(v => {
    console.log(v);
    v.forEach(v => index_1.default.autoOrderBookUpdate(v, 5000, e => console.error(e), orderBook => console.log(orderBook)));
}).catch(e => console.error(e));
index_1.default.ticks('KRW-XRP').then(tradeList => {
    tradeList.forEach(v => console.log(v));
}).catch(err => console.log(err));
index_1.default.candlesMinutes('KRW-XRP', 1).then(tradeList => {
    tradeList.forEach(v => console.log(v));
}).catch(err => console.log(err));
