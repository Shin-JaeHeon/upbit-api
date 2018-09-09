import upbit from '../index';

let KRWBTC;
upbit.ticker(['KRW-BTC']).then(v => {
  KRWBTC = v[0];
  console.log(KRWBTC);
  upbit.autoMarketUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});
upbit.orderBook("KRW-XRP").then(v => {
  console.log(v);
  v.forEach(v => upbit.autoOrderBookUpdate(v, 5000, e => console.error(e), orderBook => console.log(orderBook)));
}).catch(e => console.error(e));
