import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardGridColumnSelect, CardGridModel } from './model/card-grid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomWebsite';
  cardGridModel: CardGridModel = { title: "Test", column: 2 };
  cardGridColumnSelect: CardGridColumnSelect[] = [
    { value: 1, valueView: "Grid-1" },
    { value: 2, valueView: "Grid-2" },
    { value: 3, valueView: "Grid-3" },
    { value: 4, valueView: "Grid-4" }
  ]

  selected: number;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<CardGridModel>("./assets/json/card-grid.json").subscribe(data => {
      this.cardGridModel = data;
      this.selected = data.column;
    });
  }

  modifyGridValue(): void {
    console.log("OnChange Event Value : " + this.selected);
    let updatedCardGridModel = Object.create(this.cardGridModel);
    updatedCardGridModel.column = this.selected;
    this.cardGridModel = updatedCardGridModel;
  }

}
