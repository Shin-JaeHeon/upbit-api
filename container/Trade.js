"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trade = /** @class */ (function () {
    function Trade(market, coin) {
        this._market = market;
        this._coin = coin;
    }
    Object.defineProperty(Trade.prototype, "coin", {
        get: function () {
            return this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "market", {
        get: function () {
            return this._market;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "marketCode", {
        get: function () {
            return this._market + "-" + this._coin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "lastUpdate", {
        get: function () {
            return this._lastUpdate;
        },
        set: function (value) {
            this._lastUpdate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "tradeTime", {
        get: function () {
            return this._tradeTime;
        },
        set: function (value) {
            this._tradeTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "volume", {
        get: function () {
            return this._volume;
        },
        set: function (value) {
            this._volume = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "prev_closing_price", {
        get: function () {
            return this._prev_closing_price;
        },
        set: function (value) {
            this._prev_closing_price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "change_price", {
        get: function () {
            return this._change_price;
        },
        set: function (value) {
            this._change_price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "sequential_id", {
        get: function () {
            return this._sequential_id;
        },
        set: function (value) {
            this._sequential_id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Trade.prototype, "isAsk", {
        get: function () {
            return this._isAsk;
        },
        set: function (value) {
            this._isAsk = value;
        },
        enumerable: false,
        configurable: true
    });
    return Trade;
}());
exports.default = Trade;
