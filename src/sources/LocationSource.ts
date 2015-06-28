///<reference path="../../typings/references.d.ts"/>

import * as Promise from "bluebird";
import {locationActions} from "../actions/LocationActions";
import {Location} from "../stores/LocationStore"

const mockData:Location[] = [
  { id: 0, name: 'Abu Dhabi' },
  { id: 1, name: 'Berlin' },
  { id: 2, name: 'Bogota' },
  { id: 3, name: 'Buenos Aires' },
  { id: 4, name: 'Cairo' },
  { id: 5, name: 'Chicago' },
  { id: 6, name: 'Lima' },
  { id: 7, name: 'London' },
  { id: 8, name: 'Miami' },
  { id: 9, name: 'Moscow' },
  { id: 10, name: 'Mumbai' },
  { id: 11, name: 'Paris' },
  { id: 12, name: 'San Francisco' }
];

let LocationSource:AltJS.Source = {
  fetchLocations():AltJS.SourceModel<Location[]> {
      return {
          remote() {
              console.warn("Remote");
              return new Promise<Array<Location>>((res, rej) => {
                  setTimeout(() => {
                      if(true) {
                          res(mockData);
                      } else {
                          rej("Things have broken");
                      }
                  }, 250)
              })
          },
          local(state):Location[] {
              console.warn("Local");
              console.warn(state);
              //TODO : Figure out why local doesn't work =(
              return mockData;
          },
          success:locationActions.updateLocations,
          error:locationActions.locationsFailed,
          loading:locationActions.fetchLocations,
          shouldFetch:() => true
      };
  }
};

export const locationSource = LocationSource;
