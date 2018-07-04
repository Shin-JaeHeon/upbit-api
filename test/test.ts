import upbit from '../index';

let KRWBTC;
upbit.ticker(['KRW-BTC']).then(v => {
    KRWBTC = v[0];
    upbit.autoUpdate(KRWBTC, 5000, e => console.error(e), market => console.log(market));
});
