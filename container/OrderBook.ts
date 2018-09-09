import Order from "./Order";

export default class {
  private readonly _market: string;
  private readonly _coin: string;
  private _lastUpdate: Date;
  private _askList: Array<Order>;
  private _bidList: Array<Order>;
  private _totalAsk: number;
  private _totalBid: number;

  constructor(market, coin) {
    this._market = market;
    this._coin = coin;
  }

  get marketCode(): string {
    return `${this._market}-${this._coin}`;
  }

  get market(): string {
    return this._market;
  }

  get coin(): string {
    return this._coin;
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

  get totalBid(): number {
    return this._totalBid;
  }

  set totalBid(value: number) {
    this._totalBid = value;
  }

  get totalAsk(): number {
    return this._totalAsk;
  }

  set totalAsk(value: number) {
    this._totalAsk = value;
  }
}