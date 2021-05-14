"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Candle = /** @class */ (function () {
    function Candle(market, coin) {
        this._market = market;
        this._coin = coin;
    }
    Object.defineProperty(Candle.prototype, "marketCode", {
        get: function () {
            return this._market + "-" + this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "coin", {
        get: function () {
            return this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "market", {
        get: function () {
            return this._market;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "candleDateTimeUTC", {
        get: function () {
            return this._candleDateTimeUTC;
        },
        set: function (value) {
            this._candleDateTimeUTC = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "candleDateTimeKST", {
        get: function () {
            return this._candleDateTimeKST;
        },
        set: function (value) {
            this._candleDateTimeKST = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "high", {
        get: function () {
            return this._high;
        },
        set: function (value) {
            this._high = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "low", {
        get: function () {
            return this._low;
        },
        set: function (value) {
            this._low = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        set: function (value) {
            this._timestamp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "accTradePrice", {
        get: function () {
            return this._accTradePrice;
        },
        set: function (value) {
            this._accTradePrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "accTradeVolume", {
        get: function () {
            return this._accTradeVolume;
        },
        set: function (value) {
            this._accTradeVolume = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Candle.prototype, "lastUpdate", {
        get: function () {
            return this._lastUpdate;
        },
        set: function (value) {
            this._lastUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    return Candle;
}());
exports.default = Candle;
