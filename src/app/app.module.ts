import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material-ui/material-ui.module';
import { CardGridBuilderComponent } from './card-grid-builder/card-grid-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { CardStyleComponent } from './card-style/card-style.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGridBuilderComponent,
    CardStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
