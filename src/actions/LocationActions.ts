import {alt} from "../alt";
import {AbstractActions} from "./AbstractActions";

interface Actions {
  updateLocations(locations:any):void;
  fetchLocations():void;
  locationsFailed(errorMessage:any):void;
  favoriteLocation(location:any):void;
}

class LocationActions extends AbstractActions implements Actions {

  updateLocations(locations:any):void {
    console.warn("Update Locations!!!");
    console.warn(locations);
    this.dispatch(locations);
  }

  fetchLocations() {
    console.warn("Fetch Locations");
    this.dispatch();
  }

  locationsFailed(errorMessage:any) {
    console.warn("Failed");
    this.dispatch(errorMessage);
  }

  favoriteLocation(location:any) {
    console.warn("Favorite");
    this.dispatch(location);
  }

}

export const locationActions = alt.createActions<Actions>(LocationActions);
