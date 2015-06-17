
/**
*
* All implementation empty - completion/inheritance purposes only
*
*/
export class AbstractStoreModel<S> implements AltJS.StoreModel<S> {

  count:number;

  getState():S {
    return <S>{};
  };

  bindActions(actions:any) {

  }

  bindListeners( config:{[key:string]:( ...args:any[])=>any}) {

  }

  exportPublicMethods(config: {[key:string]:( ...args:any[])=>any}) {

  }

  exportAsync(source:any) {

  }
  
  waitFor(store:any) {

  }
}
