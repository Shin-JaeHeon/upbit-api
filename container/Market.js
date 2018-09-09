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
    get coin() {
        return this._coin;
    }
    get market() {
        return this._market;
    }
    get tradeTime() {
        return this._tradeTime;
    }
    set tradeTime(value) {
        this._tradeTime = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
    }
    get high() {
        return this._high;
    }
    set high(value) {
        this._high = value;
    }
    get low() {
        return this._low;
    }
    set low(value) {
        this._low = value;
    }
    get prevClose() {
        return this._prevClose;
    }
    set prevClose(value) {
        this._prevClose = value;
    }
    get change() {
        return this._change;
    }
    set change(value) {
        this._change = value;
    }
    get changePrice() {
        return this._changePrice;
    }
    set changePrice(value) {
        this._changePrice = value;
    }
    get changeRate() {
        return this._changeRate;
    }
    set changeRate(value) {
        this._changeRate = value;
    }
    get signedChangePrice() {
        return this._signedChangePrice;
    }
    set signedChangePrice(value) {
        this._signedChangePrice = value;
    }
    get signedChangeRate() {
        return this._signedChangeRate;
    }
    set signedChangeRate(value) {
        this._signedChangeRate = value;
    }
    get tradeVolume() {
        return this._tradeVolume;
    }
    set tradeVolume(value) {
        this._tradeVolume = value;
    }
    get accTradePrice() {
        return this._accTradePrice;
    }
    set accTradePrice(value) {
        this._accTradePrice = value;
    }
    get accTradePrice24() {
        return this._accTradePrice24;
    }
    set accTradePrice24(value) {
        this._accTradePrice24 = value;
    }
    get accTradeVolume() {
        return this._accTradeVolume;
    }
    set accTradeVolume(value) {
        this._accTradeVolume = value;
    }
    get accTradeVolume24() {
        return this._accTradeVolume24;
    }
    set accTradeVolume24(value) {
        this._accTradeVolume24 = value;
    }
    get high52wPrice() {
        return this._high52wPrice;
    }
    set high52wPrice(value) {
        this._high52wPrice = value;
    }
    get high52wDate() {
        return this._high52wDate;
    }
    set high52wDate(value) {
        this._high52wDate = value;
    }
    get low52wPrice() {
        return this._low52wPrice;
    }
    set low52wPrice(value) {
        this._low52wPrice = value;
    }
    get low52wDate() {
        return this._low52wDate;
    }
    set low52wDate(value) {
        this._low52wDate = value;
    }
    get lastUpdate() {
        return this._lastUpdate;
    }
    set lastUpdate(value) {
        this._lastUpdate = value;
    }
}
exports.default = default_1;
