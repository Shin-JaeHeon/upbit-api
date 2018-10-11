export default class Candle {


  private readonly _market: string;
  private readonly _coin: string;
  private _timestamp: number;
  private _candleDateTimeUTC: Date;
  private _candleDateTimeKST: Date;
  private _price: number;
  private _open: number;
  private _high: number;
  private _low: number;
  private _accTradePrice: number;
  private _accTradeVolume: number;
  private _lastUpdate: Date;

  constructor(market, coin) {
    this._market = market;
    this._coin = coin;

  }

  get marketCode(): string {
    return `${this._market}-${this._coin}`;
  }

  get coin(): string {
    return this._coin;
  }

  get market(): string {
    return this._market;
  }

  get candleDateTimeUTC(): Date {
    return this._candleDateTimeUTC;
  }

  set candleDateTimeUTC(value: Date) {
    this._candleDateTimeUTC = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get candleDateTimeKST(): Date {
    return this._candleDateTimeKST;
  }

  set candleDateTimeKST(value: Date) {
    this._candleDateTimeKST = value;
  }

  get open(): number {
    return this._open;
  }

  set open(value: number) {
    this._open = value;
  }

  get high(): number {
    return this._high;
  }

  set high(value: number) {
    this._high = value;
  }

  get low(): number {
    return this._low;
  }

  set low(value: number) {
    this._low = value;
  }

  get timestamp(): number {
    return this._timestamp;
  }

  set timestamp(value: number) {
    this._timestamp = value;
  }

  get accTradePrice(): number {
    return this._accTradePrice;
  }

  set accTradePrice(value: number) {
    this._accTradePrice = value;
  }

  get accTradeVolume(): number {
    return this._accTradeVolume;
  }

  set accTradeVolume(value: number) {
    this._accTradeVolume = value;
  }

  get lastUpdate(): Date {
    return this._lastUpdate;
  }

  set lastUpdate(value: Date) {
    this._lastUpdate = value;
  }
}
