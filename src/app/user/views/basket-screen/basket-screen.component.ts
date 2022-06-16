import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Distribution } from 'src/app/core/models/distribution.model';

@Component({
  selector: 'app-basket-screen',
  templateUrl: './basket-screen.component.html',
  styleUrls: ['./basket-screen.component.less']
})
export class BasketScreenComponent implements OnInit {
  
  public pos: string;
  public widthBar: string;
  public activeStore: boolean;
  public activeDelivery: boolean;
  
  public emailForm: FormGroup;

  public distributions: Distribution[] = [
    {
      id: '01',
      type: '',
      cost: 0,
      amount: 1,
      product: {
        id: '01',
        code: 'Ek010101',
        brand: 'Sony',
        description: 'Audifonos Inalambricos Bluetooth a1 Azules',
        price: 21990,
        image: '/assets/img/a1.jpg',
        discount: 0,
        features: null
      },
      address: null
    },
    {
      id: '01',
      type: '',
      cost: 0,
      amount: 2,
      product: {
        id: '01',
        code: 'Ek010101',
        brand: 'SoundCore',
        description: 'Audifonos Inalambricos Bluetooth a2 rojo',
        price: 34990,
        image: '/assets/img/a2.jpg',
        discount: 0,
        features: null
      },
      address: null
    }
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.pos = 'step2',
    this.widthBar = '0%',
    this.activeStore = false,
    this.activeDelivery = false,
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]]
    })
  }

  ngOnInit(): void {
    
  }

  /////////////////////////////// Change email form ///////////////////////////////

  get email() { return this.emailForm?.get('email'); }

  public onSubmitChangeEmail(){
    console.log('email all fine :)');
  }

  public getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Se requiere el email';
    }
    return this.email?.invalid ? 'El dato ingresado no es valido' : '';
  }

  /////////////////////////////////////////////////////////////////////////////////

  public changePos(newPos:string){
    this.pos = newPos;
    if (this.pos === 'step1')
      this.widthBar = '0%';
    if (this.pos === 'step2')
      this.widthBar = '50%';
    if (this.pos === 'step3')
      this.widthBar = '100%';
  }
}
