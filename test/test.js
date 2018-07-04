"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
let KRWBTC;
index_1.default.ticker(['KRW-BTC']).then(v => {
    KRWBTC = v[0];
    index_1.default.autoUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});
