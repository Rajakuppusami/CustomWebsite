import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material-ui/material-ui.module';
import { CardGridBuilderComponent } from './card-grid-builder/card-grid-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { CardStyleComponent } from './card-style/card-style.component';
import { FormsModule } from '@angular/forms';
import { TextStyleEditorComponent } from './text-style-editor/text-style-editor.component';
import { TextStyleEditorDialogComponent } from './text-style-editor-dialog/text-style-editor-dialog.component';
import { TextEditorDirective } from './text-editor.directive';
import { TextStyleEditToolBarComponent } from './text-style-edit-tool-bar/text-style-edit-tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGridBuilderComponent,
    CardStyleComponent,
    TextStyleEditorComponent,
    TextStyleEditorDialogComponent,
    TextEditorDirective,
    TextStyleEditToolBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
