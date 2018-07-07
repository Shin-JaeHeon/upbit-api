import Order from "./Order";

export default class {
    private readonly _market: string;
    private readonly _coin: string;
    private _lastUpdate: Date;
    private _askList: Array<Order>;
    private _bidList: Array<Order>;
    private _total_ask: number;
    private _total_bid: number;

    constructor(market, coin) {
        this._market = market;
        this._coin = coin;
    }

    get lastUpdate(): Date {
        return this._lastUpdate;
    }

    set lastUpdate(value: Date) {
        this._lastUpdate = value;
    }

    get askList(): Array<Order> {
        return this._askList;
    }

    set askList(value: Array<Order>) {
        this._askList = value;
    }

    get bidList(): Array<Order> {
        return this._bidList;
    }

    set bidList(value: Array<Order>) {
        this._bidList = value;
    }

    get total_bid(): number {
        return this._total_bid;
    }

    set total_bid(value: number) {
        this._total_bid = value;
    }

    get total_ask(): number {
        return this._total_ask;
    }

    set total_ask(value: number) {
        this._total_ask = value;
    }
}