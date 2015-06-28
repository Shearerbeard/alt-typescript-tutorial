
import * as React from "react";
import AltContainer = require("alt/AltContainer");
import {locationStore, Location} from "../stores/LocationStore";
import {favoritesStore} from "../stores/FavoritesStore";
import {locationActions} from "../actions/LocationActions";

console.warn(locationActions);

interface FavoritesProps {
  locations?:Array<Location>;
}

class Favorites extends React.Component<FavoritesProps, any> {

  render() {

    let locations = this.props.locations.map((location, i) => {

      return React.jsx(`
          <li key={i}>{location.name}</li>
        `);

    });

    return React.jsx(`
        <ul>
          {locations}
        </ul>
      `);
  }
}

interface AllLocationsProps {
  locations:Array<Location>;
  errorMessage:string;
}

class AllLocations extends React.Component<AllLocationsProps, any> {

  constructor() {
    super();

    this._addFave = this._addFave.bind(this);
  }

  _addFave(event: React.SyntheticEvent) {
    let target:HTMLButtonElement = <HTMLButtonElement>event.target;
    let location = locationStore.getLocation(
      parseInt(target.getAttribute("data-id"))
    );
    locationActions.favoriteLocation(location);
  }

  render() {

    if(this.props.errorMessage) {
      return React.jsx(`
          <div>{this.props.errorMessage}</div>
        `)
    }

    if(locationStore.isLoading()) {
      return React.jsx(`
          <div>
            <img src="ajax-loader.gif" />
          </div>
        `);
    }

    let locations = this.props.locations.map((location, i) => {
      let faveButton = React.jsx(`
          <button onClick={this._addFave} data-id={location.id}>
            Favorite
          </button>
        `);


      return React.jsx(`
          <li key={i}>
            {location.name} {location.has_favorite ? '<3' : faveButton}
          </li>
        `);

    })

    return React.jsx(`
        <ul>
          {locations}
        </ul>
      `);
  }
}

export class Locations extends React.Component<any, any> {

  componentDidMount() {
    console.warn("Did mount - fetching locations");
    locationStore.fetchLocations();
  }

  render() {
    console.warn(locationStore);
    return React.jsx(`
        <div>

          <h1>Locations</h1>
          <AltContainer store={locationStore}>
            <AllLocations />
          </AltContainer>

          <h1>Favorites</h1>
          <AltContainer store={favoritesStore}>
            <Favorites />
          </AltContainer>

        </div>
      `);

  }
}
