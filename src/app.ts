/**
 * Created by shearerbeard on 6/16/15.
 */

///<reference path="../typings/references.d.ts"/>

import * as React from "react";
import {alt} from "./alt";
import {MainComponent} from "./components/Main";

React.render(
    React.jsx(`<MainComponent />`),
    document.getElementById("app")
);
