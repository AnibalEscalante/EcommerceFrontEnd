import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-screen',
  templateUrl: './basket-screen.component.html',
  styleUrls: ['./basket-screen.component.less']
})
export class BasketScreenComponent implements OnInit {
  
  public isOptional: boolean

  constructor() {
    this.isOptional = false;
  }

  ngOnInit(): void {
  }

}
