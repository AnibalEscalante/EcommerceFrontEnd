import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PickUpPoint } from 'src/app/core/models/pickUpPoint.model';

@Component({
  selector: 'app-pick-up-point',
  templateUrl: './pick-up-point.component.html',
  styleUrls: ['./pick-up-point.component.less']
})
export class PickUpPointComponent implements OnInit {

  @Input() dataPickUpPonit!: PickUpPoint;

  @Output() dataSelectPoint = new EventEmitter<PickUpPoint>();

  constructor() {
  }

  ngOnInit(): void {
    
  }
  
  public selected() {
    this.dataSelectPoint.emit({
      id: this.dataPickUpPonit.id,
      nameStore: this.dataPickUpPonit.nameStore,
      region: this.dataPickUpPonit.region,
      commune: this.dataPickUpPonit.commune,
      street: this.dataPickUpPonit.street,
      number: this.dataPickUpPonit.number
    })
  }

}
