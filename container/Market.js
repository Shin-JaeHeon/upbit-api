"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(market, coin) {
        this._market = market;
        this._coin = coin;
    }
    Object.defineProperty(default_1.prototype, "marketCode", {
        get: function () {
            return this._market + "-" + this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "coin", {
        get: function () {
            return this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "market", {
        get: function () {
            return this._market;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "tradeTime", {
        get: function () {
            return this._tradeTime;
        },
        set: function (value) {
            this._tradeTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "high", {
        get: function () {
            return this._high;
        },
        set: function (value) {
            this._high = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "low", {
        get: function () {
            return this._low;
        },
        set: function (value) {
            this._low = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "prevClose", {
        get: function () {
            return this._prevClose;
        },
        set: function (value) {
            this._prevClose = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "change", {
        get: function () {
            return this._change;
        },
        set: function (value) {
            this._change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "changePrice", {
        get: function () {
            return this._changePrice;
        },
        set: function (value) {
            this._changePrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "changeRate", {
        get: function () {
            return this._changeRate;
        },
        set: function (value) {
            this._changeRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "signedChangePrice", {
        get: function () {
            return this._signedChangePrice;
        },
        set: function (value) {
            this._signedChangePrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "signedChangeRate", {
        get: function () {
            return this._signedChangeRate;
        },
        set: function (value) {
            this._signedChangeRate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "tradeVolume", {
        get: function () {
            return this._tradeVolume;
        },
        set: function (value) {
            this._tradeVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "accTradePrice", {
        get: function () {
            return this._accTradePrice;
        },
        set: function (value) {
            this._accTradePrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "accTradePrice24", {
        get: function () {
            return this._accTradePrice24;
        },
        set: function (value) {
            this._accTradePrice24 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "accTradeVolume", {
        get: function () {
            return this._accTradeVolume;
        },
        set: function (value) {
            this._accTradeVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "accTradeVolume24", {
        get: function () {
            return this._accTradeVolume24;
        },
        set: function (value) {
            this._accTradeVolume24 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "high52wPrice", {
        get: function () {
            return this._high52wPrice;
        },
        set: function (value) {
            this._high52wPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "high52wDate", {
        get: function () {
            return this._high52wDate;
        },
        set: function (value) {
            this._high52wDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "low52wPrice", {
        get: function () {
            return this._low52wPrice;
        },
        set: function (value) {
            this._low52wPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "low52wDate", {
        get: function () {
            return this._low52wDate;
        },
        set: function (value) {
            this._low52wDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "lastUpdate", {
        get: function () {
            return this._lastUpdate;
        },
        set: function (value) {
            this._lastUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    return default_1;
}());
exports.default = default_1;
