import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PickUpPoint } from 'src/app/core/models/pickUpPoint.model';

@Component({
  selector: 'app-pick-up-point',
  templateUrl: './pick-up-point.component.html',
  styleUrls: ['./pick-up-point.component.less']
})
export class PickUpPointComponent implements OnInit {

  @Input() data!: PickUpPoint;

  @Output() dataSelectPoint = new EventEmitter<PickUpPoint>();

  constructor() {
  }

  ngOnInit(): void {
    
  }
  
  public selected() {
    this.dataSelectPoint.emit({
      id: this.data.id,
      nameStore: this.data.nameStore,
      region: this.data.region,
      commune: this.data.commune,
      street: this.data.street,
      number: this.data.number
    })
  }

}
