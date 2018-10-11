import Candle from '../Candle';

export default class WeekMonthCandle extends Candle {

  private _firstDayOfPeriod: number;


  get firstDayOfPeriod(): number {
    return this._firstDayOfPeriod;
  }

  set firstDayOfPeriod(value: number) {
    this._firstDayOfPeriod = value;
  }
}
