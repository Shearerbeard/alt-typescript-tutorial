import Alt = require("alt");

export class AbstractActions implements AltJS.ActionsClass {
  constructor(alt:Alt){}
  dispatch( ...payload:Array<any>) {}
}
