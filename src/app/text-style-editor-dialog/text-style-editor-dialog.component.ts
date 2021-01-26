import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextStyle, TextStyleData } from '../model/card-grid.model';
import { TextStyleEditorComponent } from '../text-style-editor/text-style-editor.component';

@Component({
  selector: 'app-text-style-editor-dialog',
  templateUrl: './text-style-editor-dialog.component.html',
  styleUrls: ['./text-style-editor-dialog.component.css']
})
export class TextStyleEditorDialogComponent implements OnInit {

  @ViewChild(TextStyleEditorComponent) textStyleEditorComponent :TextStyleEditorComponent;

  textStyleData: TextStyleData;
  
  // get data from material dialog data & set to local reference of textStyleData
  constructor(@Inject(MAT_DIALOG_DATA) data: TextStyleData) {
    this.textStyleData = data;
  }

  ngOnInit(): void {
  }

  // This method is invoked by cancel button
  getTextStyleData(): TextStyleData {
      return this.textStyleData;   
  }

  // This method invoked by save button 
  getModifiedTextStyleData(): TextStyleData {
    if (!this.textStyleEditorComponent) {
      // Before loading TestStyleComponent
      return this.textStyleData;
    } else {
      // After loading TextStyleEditoeComponent
      return this.textStyleEditorComponent.getTextStyleData();
    }
  }

}
