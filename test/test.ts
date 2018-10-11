import upbit from '../index';

upbit.ticker(['KRW-BTC']).then(v => {
  const KRWBTC = v[0];
  console.log(KRWBTC);
  upbit.autoMarketUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});

upbit.orderBook("KRW-XRP").then(v => {
  console.log(v);
  v.forEach(v => upbit.autoOrderBookUpdate(v, 5000, e => console.error(e), orderBook => console.log(orderBook)));
}).catch(e => console.error(e));

upbit.ticks('KRW-XRP').then(tradeList => {
  tradeList.forEach(v => console.log(v));
}).catch(err => console.log(err));

upbit.candlesMinutes('KRW-XRP', 1).then(tradeList => tradeList.forEach(candle => console.log(candle))).catch(err => console.log(err));
upbit.candlesDay('KRW-XRP', 1).then(tradeList => tradeList.forEach(candle => console.log(candle))).catch(err => console.log(err));
upbit.candlesWeek('KRW-XRP', 1).then(tradeList => tradeList.forEach(candle => console.log(candle))).catch(err => console.log(err));
upbit.candlesMonth('KRW-XRP', 1).then(tradeList => tradeList.forEach(candle => console.log(candle))).catch(err => console.log(err));

upbit.allMarket().then(marketList => console.log(marketList)).catch(err => console.error(err));
