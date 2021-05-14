"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(price, size) {
        this._price = price;
        this._size = size;
    }
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
    Object.defineProperty(default_1.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    return default_1;
}());
exports.default = default_1;
