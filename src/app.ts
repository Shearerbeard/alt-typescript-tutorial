/**
 * Created by shearerbeard on 6/16/15.
 */

///<reference path="../typings/references.d.ts"/>

import * as React from "react";
import {alt} from "./alt";
import {Locations} from "./components/Locations";

React.render(
    React.jsx(`<Locations />`),
    document.getElementById("app")
);
