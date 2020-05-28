import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule} from "@ngrx/store";

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { DropDownNewComponent } from './customNew/drop-down-new/drop-down-new.component';
import { CountryTableComponent } from './customNew/country-table/country-table.component';
import {MatTableModule} from "@angular/material/table";
import {dropDownReducer} from "./customNew/store/drop-down.reducer";

@NgModule({
  declarations: [
    AppComponent,
    DropDownNewComponent,
    CountryTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    StoreModule.forRoot({DropDownNew:dropDownReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
