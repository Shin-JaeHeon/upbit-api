"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(market, coin) {
        this._market = market;
        this._coin = coin;
    }
    get marketCode() {
        return `${this._market}-${this._coin}`;
    }
    get market() {
        return this._market;
    }
    get coin() {
        return this._coin;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
    get askList() {
        return this._askList;
    }
    set askList(value) {
        this._askList = value;
    }
    get bidList() {
        return this._bidList;
    }
    set bidList(value) {
        this._bidList = value;
    }
    get totalBid() {
        return this._totalBid;
    }
    set totalBid(value) {
        this._totalBid = value;
    }
    get totalAsk() {
        return this._totalAsk;
    }
    set totalAsk(value) {
        this._totalAsk = value;
    }
}
exports.default = default_1;
