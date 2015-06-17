
import {baseStore} from "../stores/BaseStore";
import {baseActions} from "../actions/BaseActions";
import * as React from "react";

interface State {
  count:number;
}

function getState():State {
  return {
    count: baseStore.getState().count
  }
}


export class MainComponent extends React.Component<any, State> {
  constructor() {
    this.state = getState();

    this._handleInc = this._handleInc.bind(this);
    this._handleClear = this._handleClear.bind(this);
    this._onChange = this._onChange.bind(this);
    super();
  }

  componentDidMount() {
    baseStore.listen(this._onChange)
  }

  componentWillUnmount() {
    baseStore.unlisten(this._onChange);
  }

  render() {
    return React.jsx(`

        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this._handleInc} >Increment</button>
          <button onClick={this._handleClear} >Clear</button>
        </div>

      `);
  }

  private _onChange() {
    this.setState(getState());
  }

  private _handleInc() {
    baseActions.increment();
  }

  private _handleClear() {
    baseActions.clear();
  }
}
