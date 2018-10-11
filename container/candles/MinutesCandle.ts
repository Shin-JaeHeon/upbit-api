import Candle from '../Candle';

export default class MinutesCandle extends Candle {

  private _unit: number;


  get unit(): number {
    return this._unit;
  }

  set unit(value: number) {
    this._unit = value;
  }
}
