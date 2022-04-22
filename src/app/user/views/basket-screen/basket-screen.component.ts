import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-screen',
  templateUrl: './basket-screen.component.html',
  styleUrls: ['./basket-screen.component.less']
})
export class BasketScreenComponent implements OnInit {
  
  public pos: string;

  constructor() {
    this.pos = 'step1'
  }

  public changePos(newPos:string){
    this.pos = newPos;
  }

  ngOnInit(): void {
  }
}
