import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regionsAndCommunes } from 'src/app/core/models/regions'

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
  public addressForm: FormGroup;
  public tryOnSubmit: boolean;
  public allOkay: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.pos = 'step2',
    this.widthBar = '0%',
    this.activeStore = false,
    this.activeDelivery = false,
    this.communes = [],
    this.regionsAndCommunes = regionsAndCommunes,
    this.tryOnSubmit = false,
    this.allOkay = false,
    this.addressForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      commune: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]{7}')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]{5,100}')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{1,7}')]],
      apartment: ['', [Validators.pattern('[a-zA-Z\\s]{5,100}')]]
    });
  }

  ngOnInit(): void {
  }

  get region() { return this.addressForm?.get('region'); }
  get comunne() { return this.addressForm?.get('comunne'); }
  get postcode() { return this.addressForm?.get('postcode'); }
  get street() { return this.addressForm?.get('street'); }
  get number() { return this.addressForm?.get('number'); }
  get apartment() { return this.addressForm?.get('apartment'); }

  public selectRegion(){
    for (let region of this.regionsAndCommunes){
      if (this.addressForm.value.region === region.name){
        this.communes = region.communes;
      }
    }
  }

  onSubmit(){
    this.tryOnSubmit = true;
    console.log(this.allOkay);
    if (
      !this.region?.invalid &&
      !this.comunne?.invalid &&
      !this.postcode?.invalid &&
      !this.street?.invalid &&
      !this.number?.invalid &&
      !this.apartment?.invalid
    ){
      this.allOkay = true;
      console.log(this.allOkay);
    }
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
