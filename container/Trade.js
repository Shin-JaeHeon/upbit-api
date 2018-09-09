"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trade {
    constructor(market, coin) {
        this._market = market;
        this._coin = coin;
    }
    get coin() {
        return this._coin;
    }
    get market() {
        return this._market;
    }
    get marketCode() {
        return `${this._market}-${this._coin}`;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
    get tradeTime() {
        return this._tradeTime;
    }
    set tradeTime(value) {
        this._tradeTime = value;
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
        this._volume = value;
    }
    get prev_closing_price() {
        return this._prev_closing_price;
    }
    set prev_closing_price(value) {
        this._prev_closing_price = value;
    }
    get change_price() {
        return this._change_price;
    }
    set change_price(value) {
        this._change_price = value;
    }
    get sequential_id() {
        return this._sequential_id;
    }
    set sequential_id(value) {
        this._sequential_id = value;
    }
    get isAsk() {
        return this._isAsk;
    }
    set isAsk(value) {
        this._isAsk = value;
    }
}
exports.default = Trade;
