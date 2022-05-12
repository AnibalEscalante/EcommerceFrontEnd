import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pick-up-point',
  templateUrl: './pick-up-point.component.html',
  styleUrls: ['./pick-up-point.component.less']
})
export class PickUpPointComponent implements OnInit {

  @Input() dataPickUpPonit: any;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
