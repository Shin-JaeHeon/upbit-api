"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let KRWBTC;
index_1.default.ticker(['KRW-BTC']).then(v => {
    KRWBTC = v[0];
    index_1.default.autoUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});
index_1.default.orderBook("KRW-XRP").then(v => {
    v.forEach(v => console.log(v));
}).catch(e => console.error(e));
