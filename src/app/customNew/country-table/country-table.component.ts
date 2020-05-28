import {Component, Input, OnInit} from '@angular/core';
import {DropServiceService} from "../../services/drop-service.service";
import {Store} from "@ngrx/store";
import {Region} from "../drop-down-new/drop-down-new.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {
  @Input() countryToBePopulated;
  tableColumns  :  string[] = ['name','flag','population','capital','currencies'];
  dataSource: Observable<any>;
  constructor(private dropDownService: DropServiceService,
              private store: Store<{DropDownNew:{regions: {name: string, value: string}[], country:{}}}>) { }

  ngOnInit() {
    this.dataSource = this.store.select('DropDownNew');
     console.log(this.dataSource);
  }

}
