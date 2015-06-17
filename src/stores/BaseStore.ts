import {alt} from "../alt";
import {baseActions} from "../actions/BaseActions";



interface State {
  count?:number;
}

class AbsBaseStore implements AltJS.StoreModel<State> {
  count:number;
  getState():State {
    return {};
  };
  bindActions(actions:any){}
}

let clicked = 0;

class BaseStore extends AbsBaseStore {
  constructor() {
    this.count = 0;
    this.bindActions(baseActions);
    super();
  }

  onIncrement() {
    clicked++;
    this.count++;
  }

  onClear() {
    this.count = 0;
  }
}

export const baseStore = alt.createStore<State>(BaseStore);
