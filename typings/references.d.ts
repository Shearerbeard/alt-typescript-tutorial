//Custom Definitions / Overrides
/// <reference path="./tsd.d.ts"/>
/// <reference path="./react/react-jsx.d.ts"/>
/// <reference path="./alt/alt.d.ts"/>
/// <reference path="./bluebird/blubird-es6.d.ts"/>


declare module "react/lib/Object.assign" {
  function assign( ...objs:Array<Object>):any;
  export = assign;
}


declare module "react/lib/cx" {
  function cx(val:any):any;
  export = cx;
}
