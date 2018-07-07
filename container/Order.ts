export default class {

    private isAsk: boolean;
    private _price: number;
    private _size: number;

    constructor(isAsk) {
        this.isAsk = isAsk;
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