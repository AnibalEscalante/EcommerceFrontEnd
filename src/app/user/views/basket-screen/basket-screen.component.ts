import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.pos = 'step2',
    this.widthBar = '0%',
    this.activeStore = false,
    this.activeDelivery = false,
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]]
    })
  }

  ngOnInit(): void {
  }

  get email() { return this.emailForm?.get('email'); }

  

  public onSubmitChangeEmail(){
    console.log('all fine :)');
    
  }

  public getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Se requiere el email';
    }
    return this.email?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public changeActiveDelivery(){
    if (this.activeDelivery == false && this.activeStore == false)
      this.activeDelivery = true;
    else{
      if (this.activeDelivery == false){
        this.activeDelivery = true;
        this.activeStore = false;
      }
    }
  }

  public changeActiveStore(){
    if (this.activeDelivery == false && this.activeStore == false)
      this.activeStore = true;
    else{
      if (this.activeStore == false){
        this.activeStore = true;
        this.activeDelivery = false;
      }
    }
  }

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
