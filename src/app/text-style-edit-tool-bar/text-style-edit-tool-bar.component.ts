import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-style-edit-tool-bar',
  templateUrl: './text-style-edit-tool-bar.component.html',
  styleUrls: ['./text-style-edit-tool-bar.component.css']
})
export class TextStyleEditToolBarComponent implements OnInit {


  @ViewChild("temp", { static: true }) template: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
