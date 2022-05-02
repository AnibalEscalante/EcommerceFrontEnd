import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.less']
})
export class PaymentMethodComponent implements OnInit {

  public paymentMethodExist: boolean;
  constructor() { 
    this.paymentMethodExist = false;
  }

  ngOnInit(): void {
  }

}
