import Alt =  require("alt");
import {alt} from "../alt";

interface Actions {
  increment();
  clear();
}

class BaseActions extends Alt implements Actions {
  increment() {
    this.dispatch();
  }

  clear() {
    this.dispatch();
  }
}

export const baseActions = alt.createActions<Actions>(BaseActions);
