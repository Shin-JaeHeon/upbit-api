"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
index_1.default.ticker(['KRW-BTC']).then(function (v) {
    var KRWBTC = v[0];
    console.log(KRWBTC);
    index_1.default.autoMarketUpdate(KRWBTC, 5000, function (e) { return console.error(e); }, function (market) { return console.log(market); });
});
index_1.default.orderBook("KRW-XRP").then(function (v) {
    console.log(v);
    v.forEach(function (v) { return index_1.default.autoOrderBookUpdate(v, 5000, function (e) { return console.error(e); }, function (orderBook) { return console.log(orderBook); }); });
}).catch(function (e) { return console.error(e); });
index_1.default.ticks('KRW-XRP').then(function (tradeList) {
    tradeList.forEach(function (v) { return console.log(v); });
}).catch(function (err) { return console.log(err); });
index_1.default.candlesMinutes('KRW-XRP', 1).then(function (tradeList) { return tradeList.forEach(function (candle) { return console.log(candle); }); }).catch(function (err) { return console.log(err); });
index_1.default.candlesDay('KRW-XRP', 1).then(function (tradeList) { return tradeList.forEach(function (candle) { return console.log(candle); }); }).catch(function (err) { return console.log(err); });
index_1.default.candlesWeek('KRW-XRP', 1).then(function (tradeList) { return tradeList.forEach(function (candle) { return console.log(candle); }); }).catch(function (err) { return console.log(err); });
index_1.default.candlesMonth('KRW-XRP', 1).then(function (tradeList) { return tradeList.forEach(function (candle) { return console.log(candle); }); }).catch(function (err) { return console.log(err); });
index_1.default.allMarket().then(function (marketList) { return console.log(marketList); }).catch(function (err) { return console.error(err); });
