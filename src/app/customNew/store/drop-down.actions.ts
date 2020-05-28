import {Action} from "@ngrx/store";
import { Region} from "../drop-down-new/drop-down-new.component";

export const SELECT_REGION = 'SELECT_REGION';
export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export class SelectRegion implements Action {
  readonly type = SELECT_REGION;
  // payload: Region;
  constructor(public payload: Region) {
  }
}

export class SelectCountry implements Action {
  readonly type = SELECT_COUNTRY;
  // payload: ;
  constructor(public payload) {
  }
}
