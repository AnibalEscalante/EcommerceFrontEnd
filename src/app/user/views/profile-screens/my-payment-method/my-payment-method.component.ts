import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-payment-method',
  templateUrl: './my-payment-method.component.html',
  styleUrls: ['./my-payment-method.component.less']
})
export class MyPaymentMethodComponent implements OnInit {

  public paymentMethodExist: boolean;
  constructor() { 
    this.paymentMethodExist = false;
  }
  ngOnInit(): void {
  }

}
