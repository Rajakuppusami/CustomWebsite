import { Component, Input, OnInit } from '@angular/core';
import { FontFamilySelectModel, FontSizeSelectModel, TextStyle, TextAlignEnum, TextStyleData } from '../model/card-grid.model';
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
  fontFamilySelected: string = "Arial";
  fontSizeSelected: string = "16px";
  alignSelected: string = "right";
  isItalic: boolean = false;
  isDecoration: boolean = false;
  isBold: boolean = false;
  colorSelected: string = '#000';

  //output 
  _text: string = "Heading";
  _textStyle: TextStyle = {};
  _textStyleDate: TextStyleData;

  get textStyleData(): TextStyleData {
    return this._textStyleDate;
  }

  @Input("data") set textStyleDate(value: TextStyleData) {
    this._textStyleDate = value;
    this.updateLocalData();
  }

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

  setTextStyle(): void {
    if (!this.isBold) {
      this._textStyle.fontWeight = "normal";
    } else {
      this._textStyle.fontWeight = "bold";
    }
    if (!this.isItalic) {
      this._textStyle.fontStyle = "normal";
    } else {
      this._textStyle.fontStyle = "italic";
    }
    if (!this.isDecoration) {
      this._textStyle.textDecoration = "none";
    } else {
      this._textStyle.textDecoration = "underline";
    }
    this._textStyle.color = this.colorSelected;
    this._textStyle.fontFamily = this.fontFamilySelected;
    this._textStyle.fontSize = this.fontSizeSelected;
    this._textStyle.textAlign = this.alignSelected;
  }

  getTextStyleValues(): TextStyle {
    this.setTextStyle();
    return this._textStyle;
  }

  getTextStyleData(): TextStyleData {
    this.setTextStyle();
    return { text: this._text, textStyle: this._textStyle };
  }

  updateLocalData() {
    if (this._textStyleDate.textStyle.color) {
      this.colorSelected = this._textStyleDate.textStyle.color;
    }
    if (this._textStyleDate.textStyle.fontFamily) {
      this.fontFamilySelected = this._textStyleDate.textStyle.fontFamily;
    }
    if (this._textStyleDate.textStyle.fontSize) {
      this.fontSizeSelected = this._textStyleDate.textStyle.fontSize;
    }
    if (this._textStyleDate.textStyle.fontStyle
      && this._textStyleDate.textStyle.fontStyle == "italic") {
      this.isItalic = true;
    }
    if (this._textStyleDate.textStyle.fontWeight
      && this._textStyleDate.textStyle.fontWeight == "bold") {
      this.isBold = true;
    }
    if (this._textStyleDate.textStyle.textDecoration
      && this._textStyleDate.textStyle.textDecoration == "underline") {
      this.isDecoration = true;
    }
    if (this._textStyleDate.textStyle.textAlign) {
      this.alignSelected = this._textStyleDate.textStyle.textAlign;
    }
    if (this._textStyleDate.text) {
      this._text = this._textStyleDate.text;
    }
  }

}
