import { Component, OnInit } from '@angular/core';
import { FontFamilySelectModel, FontSizeSelectModel, TextStyle, TextAlignEnum } from '../model/card-grid.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-style-editor',
  templateUrl: './text-style-editor.component.html',
  styleUrls: ['./text-style-editor.component.css']
})
export class TextStyleEditorComponent implements OnInit {
  //input values
  fontFamilySelectModel: FontFamilySelectModel[] = [
    { name: "Arial", viewName: "Arial" },
    { name: "Arial Black", viewName: "Arial Black" },
    { name: "Calibri", viewName: "Calibri (Body)" },
    { name: "Calibri Light", viewName: "Calibri Light" }
  ];
  fontSizeSelectModel: FontSizeSelectModel[] = [];
  aligmentEnum = TextAlignEnum;

  //result values
  fontFamilySelected: string;
  fontSizeSelected: string = "16px";
  alignSelected: string = "right";
  isItalic: boolean = false;
  isDecoration: boolean = false;
  isBold: boolean = false;
  colorSelected: string = '#000';
  
  text: string = "Heading";

  //output 
  textStyle: TextStyle = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<FontFamilySelectModel[]>("./assets/json/font-family-select.json").subscribe(data => {
      this.fontFamilySelectModel = data;
    });
    this.httpClient.get<FontSizeSelectModel[]>("./assets/json/font-size-select.json").subscribe(data => {
      this.fontSizeSelectModel = data;
    });
  }

  toggleBold(event: any): void {
    if (this.isBold) {
      this.isBold = false;
    } else {
      this.isBold = true;
    }
    // event.srcElement.classList.toggle("active");
  }

  toggleItalic(event: any): void {
    if (this.isItalic) {
      this.isItalic = false;
    } else {
      this.isItalic = true;
    }
  }

  toggleDecoration(event: any): void {
    if (this.isDecoration) {
      this.isDecoration = false;
    } else {
      this.isDecoration = true;
    }
  }

  setTextStyle():void{
    if (!this.isBold) {
      this.textStyle.fontWeight="normal";
    } else {
      this.textStyle.fontWeight="bold";
    }
    if (this.isItalic) {
      this.textStyle.fontStyle="normal";
    } else {
      this.textStyle.fontStyle="italic";
    }
    if (!this.isDecoration) {
      this.textStyle.textDecoration="none";
    } else {
      this.textStyle.textDecoration="underline";
    }
  }

  getTextStyleValues(): TextStyle{
    this.setTextStyle();
    return this.textStyle;
  }

}
