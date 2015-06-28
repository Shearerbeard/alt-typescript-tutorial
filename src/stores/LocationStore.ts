import {alt} from "../alt";
import {locationActions} from "../actions/LocationActions";
import {AbstractStoreModel} from "./AbstractStoreModel";
import {locationSource} from "../sources/LocationSource";
import {favoritesStore} from "./FavoritesStore";

export interface Location {
  id?:number;
  name?:string;
  has_favorite?:boolean;
}

interface State {
  locations: Array<Location>;
  errorMessage:string;
}

/**
* Extending the state store in order to include aditional methods from
* export Public methods and
* export Async
*/
interface ExtendedStore extends AltJS.AltStore<State> {
  getLocation(id:number):Location;
  fetchLocations():void;
  isLoading():boolean;
}

class LocationStore extends AbstractStoreModel<State> {

  locations: Array<Location>;
  errorMessage:string;

  constructor() {
    super();
    this.locations = [];
    this.errorMessage = null;

    //TODO: pass state generics to make sure methods/actions expect the same type
    this.bindListeners({
      handleUpdateLocations: locationActions.updateLocations,
      handleFetchLocations: locationActions.fetchLocations,
      handleLocationsFailed: locationActions.locationsFailed,
      setFavorites: locationActions.favoriteLocation
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(locationSource);
  }

  handleUpdateLocations(locations:Array<Location>) {
    console.warn("handle Update");
    this.locations = locations;
    this.errorMessage = null;
  }

  handleFetchLocations() {
    console.warn("Handle Fetch");
    this.locations = [];
  }

  handleLocationsFailed(errorMessage:string) {
    console.warn("Handle Failed");
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.locations = this.locations.map((location) => {
      return <Location>{
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location:Location) {

    this.waitFor(favoritesStore);

    let favoritedLocationsIds = favoritesStore
      .getState()
      .locations
      .map((location) => location.id);

    this.locations.forEach((location, index) => {
      if(favoritedLocationsIds.indexOf(location.id) > 0) {
        location.has_favorite = true;
      } else {
        location.has_favorite = false;
      }
    });

  }

  getLocation(id:number) {
    let locations = this.getState().locations;
    for(var i = 0; i < locations.length; i++) {
      if(locations[i].id === id) {
        return locations[i];
      }
    }

    return null;
  }
}

//casting return store with extended methods
export const locationStore = <ExtendedStore>alt.createStore<State>(LocationStore);
