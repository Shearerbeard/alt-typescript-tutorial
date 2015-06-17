import {alt} from "../alt";
import {locationActions} from "../actions/LocationActions";
import {AbstractStoreModel} from "./AbstractStoreModel";
import {Location} from "./LocationStore";

interface State {
  locations?:Array<Location>;
}

class FavoritesStore extends AbstractStoreModel<State> implements State {

  locations:Array<Location>;

  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: locationActions.favoriteLocation
    });

    super();
  }

  addFavoriteLocation(location:Location) {
    this.locations.push(location);
  }
}

export const favoritesStore = alt.createStore<State>(FavoritesStore, "FavoritesStore");
