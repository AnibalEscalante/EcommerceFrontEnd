import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader'

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

  public otherPickUpForm: FormGroup;
  public otherPickUpSend: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.pos = 'step2',
    this.widthBar = '0%',
    this.activeStore = false,
    this.activeDelivery = false,
    this.otherPickUpSend = false,
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]]
    }),
    this.otherPickUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      rut: ['', [Validators.required, Validators.pattern('[0-9k,K-]{9,10}')]]
    })
  }

  ngOnInit(): void {
    let loader =  new Loader({
      apiKey: 'AIzaSyDycBQl7SKPKcXOiMtfyiF1roxckgo5bPg'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map")!,{
        center: { lat: -33.0477338717155, lng: -71.61294094247721},
        zoom: 20
      })
    })
  }

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

  get name () { return this.otherPickUpForm?.get('name'); }
  get lastName () { return this.otherPickUpForm?.get('lastName'); }
  get rut () { return this.otherPickUpForm?.get('rut'); }

  public onSubmitPickUpOtherPerson(){
    console.log('other person all fine :)');
    this.otherPickUpSend = true;
  }

  public getNameErrorMessage() {
    if (this.name?.hasError('required')) {
      return 'Se requiere el nombre';
    }
    return this.name?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getLastNameErrorMessage() {
    if (this.lastName?.hasError('required')) {
      return 'Se requiere el apellido';
    }
    return this.lastName?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getRutErrorMessage() {
    if (this.rut?.hasError('required')) {
      return 'Se requiere el RUT';
    }
    return this.rut?.invalid ? 'El dato ingresado no es valido' : '';
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
