import Candle from '../Candle';

export default class WeekMonthCandle extends Candle {

  private _firstDayOfPeriod: string;


  get firstDayOfPeriod(): string {
    return this._firstDayOfPeriod;
  }

  set firstDayOfPeriod(value: string) {
    this._firstDayOfPeriod = value;
  }
}
