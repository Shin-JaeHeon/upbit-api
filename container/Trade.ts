export default class Trade {
  private readonly _market: string;
  private readonly _coin: string;
  private _tradeTime: Date;
  private _price: number;
  private _volume: number;
  private _prev_closing_price: number;
  private _change_price: number;
  private _isAsk: boolean;
  private _lastUpdate: Date;
  private _sequential_id: string;

  constructor(market, coin) {
    this._market = market;
    this._coin = coin;
  }

  get coin(): string {
    return this._coin;
  }

  get market(): string {
    return this._market;
  }

  get marketCode(): string {
    return `${this._market}-${this._coin}`;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get lastUpdate(): Date {
    return this._lastUpdate;
  }

  set lastUpdate(value: Date) {
    this._lastUpdate = value;
  }

  get tradeTime(): Date {
    return this._tradeTime;
  }

  set tradeTime(value: Date) {
    this._tradeTime = value;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;
  }

  get prev_closing_price(): number {
    return this._prev_closing_price;
  }

  set prev_closing_price(value: number) {
    this._prev_closing_price = value;
  }

  get change_price(): number {
    return this._change_price;
  }

  set change_price(value: number) {
    this._change_price = value;
  }

  get sequential_id(): string {
    return this._sequential_id;
  }

  set sequential_id(value: string) {
    this._sequential_id = value;
  }

  get isAsk(): boolean {
    return this._isAsk;
  }

  set isAsk(value: boolean) {
    this._isAsk = value;
  }
}