import {alt} from "../alt";
import {AbstractActions} from "./AbstractActions";

interface Actions {
  updateLoacations(locations:any):void;
  fetchLocations():void;
  locationsFailed(errorMessage:any):void;
  favoriteLocation(location:any):void;
}

class LocationActions extends AbstractActions implements Actions {

  updateLoacations(locations:any):void {
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
  }

  locationsFailed(errorMessage:any) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(location:any) {
    this.dispatch(location);
  }

}

export const locationActions = alt.createActions<Actions>(LocationActions);
