import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { CardGridModel } from '../model/card-grid.model';

@Component({
  selector: 'app-card-grid-builder',
  templateUrl: './card-grid-builder.component.html',
  styleUrls: ['./card-grid-builder.component.css']
})
export class CardGridBuilderComponent implements OnInit, OnChanges {

  @Input("cardGridModel") data: CardGridModel;

  // it takes ng-template as input which contains card DOM.
  @Input("cardTemplate") cardTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes detected in CardGridBuilderComponent");
    if (this.data.column === 1) {
      this.data.columnClass = "col-md-12";
    } else if (this.data.column === 2) {
      this.data.columnClass = "col-md-6";
    } else if (this.data.column === 3) {
      this.data.columnClass = "col-md-4";
    } else if (this.data.column === 4) {
      this.data.columnClass = "col-md-3";
    }
  }



}
