export default class {

    private _price: number;
    private _size: number;

    constructor(price, size) {
        this._price = price;
        this._size = size;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

}