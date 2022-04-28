import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  
  
  public addressExist: boolean;
  constructor() {
    this.addressExist = false;
   }

  ngOnInit(): void {
  }

}
