import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-style',
  templateUrl: './card-style.component.html',
  styleUrls: ['./card-style.component.css']
})
export class CardStyleComponent implements OnInit {

  @Input() data: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
