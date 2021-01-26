import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardGridColumnSelect, CardGridModel, TextStyle, TextStyleData} from './model/card-grid.model';
import { TextStyleEditorDialogComponent } from './text-style-editor-dialog/text-style-editor-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomWebsite';

  // Card Grid Builder Demo
  cardGridModel: CardGridModel = { title: "Test", column: 2 };
  cardGridColumnSelect: CardGridColumnSelect[] = [
    { value: 1, valueView: "Grid-1" },
    { value: 2, valueView: "Grid-2" },
    { value: 3, valueView: "Grid-3" },
    { value: 4, valueView: "Grid-4" }
  ]
  columnSelected: number;

  // Text Style Editor Demo
  textStyle: TextStyle = {
    color: "#000", fontSize: "24px", fontStyle: "normal",
    fontFamily: "Arial", fontWeight: "bold", textAlign: "left", textDecoration: "none"
  };
  text: string = "Heading";
  textStyleData: TextStyleData = { text: this.text, textStyle: this.textStyle };

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.httpClient.get<CardGridModel>("./assets/json/card-grid.json").subscribe(data => {
      this.cardGridModel = data;
      this.columnSelected = data.column;
    });
  }

  modifyGridValue(): void {
    console.log("OnChange Event Value : " + this.columnSelected);
    let updatedCardGridModel = Object.create(this.cardGridModel);
    updatedCardGridModel.column = this.columnSelected;
    this.cardGridModel = updatedCardGridModel;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TextStyleEditorDialogComponent, { data: this.textStyleData });

    dialogRef.afterClosed().subscribe(result => {
      this.textStyleData = result;
      console.log("Dialog result: " + this.textStyle);
    });
  }

}
