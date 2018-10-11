import Candle from '../Candle';

export default class DayCandle extends Candle {
  private _prevClosingPrice: number;
  private _convertedTradePrice: number;
  private _changePrice: number;
  private _changeRate: number;
  get changeRate(): number {
    return this._changeRate;
  }

  set changeRate(value: number) {
    this._changeRate = value;
  }

  get changePrice(): number {
    return this._changePrice;
  }

  set changePrice(value: number) {
    this._changePrice = value;
  }

  get convertedTradePrice(): number {
    return this._convertedTradePrice;
  }

  set convertedTradePrice(value: number) {
    this._convertedTradePrice = value;
  }

  get prevClosingPrice(): number {
    return this._prevClosingPrice;
  }

  set prevClosingPrice(value: number) {
    this._prevClosingPrice = value;
  }
}
