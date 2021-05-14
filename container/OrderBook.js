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
    Object.defineProperty(default_1.prototype, "market", {
        get: function () {
            return this._market;
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
    Object.defineProperty(default_1.prototype, "askList", {
        get: function () {
            return this._askList;
        },
        set: function (value) {
            this._askList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "bidList", {
        get: function () {
            return this._bidList;
        },
        set: function (value) {
            this._bidList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "totalBid", {
        get: function () {
            return this._totalBid;
        },
        set: function (value) {
            this._totalBid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(default_1.prototype, "totalAsk", {
        get: function () {
            return this._totalAsk;
        },
        set: function (value) {
            this._totalAsk = value;
        },
        enumerable: false,
        configurable: true
    });
    return default_1;
}());
exports.default = default_1;
