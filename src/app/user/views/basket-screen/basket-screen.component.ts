import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regionsAndCommunes } from 'src/app/shared/constants/regions'
import { allPickUpPoints } from 'src/app/shared/constants/pick-up-points';
import { PickUpPoint } from 'src/app/core/models/pickUpPoint.model';

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
  
  public regionsAndCommunes: any;
  public communes: string[];
  public pickUpPointForm: FormGroup;
  public tryOnSubmit: boolean;

  public emailForm: FormGroup;

  public otherPickUpForm: FormGroup;
  public otherPickUpSend: boolean;

  public pickUpPoints: PickUpPoint[];
  public selectPoint: PickUpPoint | null;
  public receivePoint: PickUpPoint | null;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.communes = [];
    this.regionsAndCommunes = regionsAndCommunes,
    this.pickUpPoints = [],
    this.selectPoint = null,
    this.receivePoint = null,
    this.tryOnSubmit = false,
    this.pos = 'step3',
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
    }),
    this.pickUpPointForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      commune: ['', [Validators.required]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]{5,100}')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{1,7}')]]
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

  /////////////////////////// Pick up other person form ///////////////////////////

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

  /////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////// Pick up point form //////////////////////////////

  public selectRegion(){
    for (let region of this.regionsAndCommunes){
      if (this.pickUpPointForm.value.region === region.name){
        this.communes = region.communes;
      }
    }
    this.pickUpPoints = [];
  }

  public selectUbication(){
    this.pickUpPoints = [];
    for (let pickUpPoint of allPickUpPoints){
      if (this.pickUpPointForm.value.commune === pickUpPoint.commune){
        this.pickUpPoints.push(pickUpPoint);
      }
    }
    if (this.pickUpPoints === []) {
      this.pickUpPoints.push({
        id: '-1',
        nameStore: 'NO PICK UP POINTS',
        region: '',
        commune: '',
        street: '',
        number:''
      });
    }
  }

  public onSubmitChgPickUpPoint(){
    this.tryOnSubmit = true;
  }

  public receivePickUpPoint(event: any){
    this.receivePoint = event;
  }

  public savePickUpPointModal(){
    this.selectPoint = this.receivePoint;
  }

  ////////////////////////////////////////////////////////////////////////////////

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
