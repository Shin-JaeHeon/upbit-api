export default class {

  private readonly _market: string;
  private readonly _coin: string;
  private _tradeTime: Date;
  private _price: number;
  private _open: number;
  private _high: number;
  private _low: number;
  private _prevClose: number;
  private _change: string;
  private _changePrice: number;
  private _changeRate: number;
  private _signedChangePrice: number;
  private _signedChangeRate: number;
  private _tradeVolume: number;
  private _accTradePrice: number;
  private _accTradePrice24: number;
  private _accTradeVolume: number;
  private _accTradeVolume24: number;
  private _high52wPrice: number;
  private _high52wDate: Date;
  private _low52wPrice: number;
  private _low52wDate: Date;
  private _lastUpdate: Date;

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

  get tradeTime(): Date {
    return this._tradeTime;
  }

  set tradeTime(value: Date) {
    this._tradeTime = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
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

  get prevClose(): number {
    return this._prevClose;
  }

  set prevClose(value: number) {
    this._prevClose = value;
  }

  get change(): string {
    return this._change;
  }

  set change(value: string) {
    this._change = value;
  }

  get changePrice(): number {
    return this._changePrice;
  }

  set changePrice(value: number) {
    this._changePrice = value;
  }

  get changeRate(): number {
    return this._changeRate;
  }

  set changeRate(value: number) {
    this._changeRate = value;
  }

  get signedChangePrice(): number {
    return this._signedChangePrice;
  }

  set signedChangePrice(value: number) {
    this._signedChangePrice = value;
  }

  get signedChangeRate(): number {
    return this._signedChangeRate;
  }

  set signedChangeRate(value: number) {
    this._signedChangeRate = value;
  }

  get tradeVolume(): number {
    return this._tradeVolume;
  }

  set tradeVolume(value: number) {
    this._tradeVolume = value;
  }

  get accTradePrice(): number {
    return this._accTradePrice;
  }

  set accTradePrice(value: number) {
    this._accTradePrice = value;
  }

  get accTradePrice24(): number {
    return this._accTradePrice24;
  }

  set accTradePrice24(value: number) {
    this._accTradePrice24 = value;
  }

  get accTradeVolume(): number {
    return this._accTradeVolume;
  }

  set accTradeVolume(value: number) {
    this._accTradeVolume = value;
  }

  get accTradeVolume24(): number {
    return this._accTradeVolume24;
  }

  set accTradeVolume24(value: number) {
    this._accTradeVolume24 = value;
  }

  get high52wPrice(): number {
    return this._high52wPrice;
  }

  set high52wPrice(value: number) {
    this._high52wPrice = value;
  }

  get high52wDate(): Date {
    return this._high52wDate;
  }

  set high52wDate(value: Date) {
    this._high52wDate = value;
  }

  get low52wPrice(): number {
    return this._low52wPrice;
  }

  set low52wPrice(value: number) {
    this._low52wPrice = value;
  }

  get low52wDate(): Date {
    return this._low52wDate;
  }

  set low52wDate(value: Date) {
    this._low52wDate = value;
  }

  get lastUpdate(): Date {
    return this._lastUpdate;
  }

  set lastUpdate(value: Date) {
    this._lastUpdate = value;
  }
}