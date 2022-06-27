import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regionsAndCommunes } from 'src/app/shared/constants/regions'
import { PickUpPoint } from 'src/app/core/models/pickUpPoint.model';
import { allPickUpPoints } from 'src/app/shared/constants/pick-up-points';
import { Distribution } from 'src/app/core/models/distribution.model';

@Component({
  selector: 'app-distribution-item',
  templateUrl: './distribution-item.component.html',
  styleUrls: ['./distribution-item.component.less']
})
export class DistributionItemComponent implements OnInit {
  
  @Input() distribution!: Distribution;
  @Input() i!: number;

  public cost: number;

  public activeStore: boolean;
  public activeDelivery: boolean;

  public selectPoint: PickUpPoint | null;
  public pickUpPointForm: FormGroup;
  public tryOnSubmitChgPickUpPoint: boolean;
  public receivePoint: PickUpPoint | null;
  public pickUpPoints: PickUpPoint[];

  public regionsAndCommunes: any;
  public communes: string[];

  public otherPickUpSend: boolean;
  public otherPickUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cost = 0;
    this.selectPoint = null,
    this.activeStore = false,
    this.activeDelivery = false,
    this.tryOnSubmitChgPickUpPoint = false,
    this.receivePoint = null,
    this.pickUpPoints = [],
    this.regionsAndCommunes = regionsAndCommunes,
    this.communes = [],
    this.otherPickUpSend = false,
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
    this.costDistribution();
  }

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

  public onSubmitChgPickUpPoint(){
    this.tryOnSubmitChgPickUpPoint = true;
  }

  public receivePickUpPoint(event: any){
    this.receivePoint = event;
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

  public costDistribution(){
    let value = Math.round(this.distribution.product!.price*0.05);
    if (value < 1000){
      this.cost = 1000;
    } else{
      if (value > 7990){
        this.cost = 7990;
      } else {
        this.cost = value;
      }
    }
  }

}
