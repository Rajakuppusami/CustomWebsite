import { Component, OnInit, ViewChild } from '@angular/core';
import { TextStyleEditorComponent } from '../text-style-editor/text-style-editor.component';

@Component({
  selector: 'app-text-style-editor-dialog',
  templateUrl: './text-style-editor-dialog.component.html',
  styleUrls: ['./text-style-editor-dialog.component.css']
})
export class TextStyleEditorDialogComponent implements OnInit {

  @ViewChild(TextStyleEditorComponent) textStyleEditorComponent :TextStyleEditorComponent;

  constructor() { }

  ngOnInit(): void {
  }

  log(){
    console.log("testing...");
    
    console.log(this.textStyleEditorComponent.getTextStyleValues());
  }

}
