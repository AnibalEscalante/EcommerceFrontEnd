import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regionsAndCommunes } from 'src/app/shared/constants/regions'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.less']
})
export class AddressComponent implements OnInit {
  
  public regionsAndCommunes: any;
  public communes: string[];
  public addAddressForm: FormGroup;
  public chgAddressForm: FormGroup;
  public tryOnSubmit: boolean;

  public addressExist: boolean;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.addressExist = false,
    this.communes = [],
    this.regionsAndCommunes = regionsAndCommunes,
    this.tryOnSubmit = false,
    this.addAddressForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      commune: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]{7}')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]{5,100}')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{1,7}')]],
      apartment: ['', [Validators.pattern('[a-zA-Z\\s]{5,100}')]]
    }),
    this.chgAddressForm = this.formBuilder.group({
      region: ['', [Validators.required]],
      commune: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('[0-9]{7}')]],
      street: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]{5,100}')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{1,7}')]],
      apartment: ['', [Validators.pattern('[a-zA-Z\\s]{5,100}')]]
    })
   }

  ngOnInit(): void {
  }
  

  get addRegion() { return this.addAddressForm?.get('region'); }
  get addComunne() { return this.addAddressForm?.get('comunne'); }
  get addPostcode() { return this.addAddressForm?.get('postcode'); }
  get addStreet() { return this.addAddressForm?.get('street'); }
  get addNumber() { return this.addAddressForm?.get('number'); }
  get addApartment() { return this.addAddressForm?.get('apartment'); }

  get chgRegion() { return this.chgAddressForm?.get('region'); }
  get chgComunne() { return this.chgAddressForm?.get('comunne'); }
  get chgPostcode() { return this.chgAddressForm?.get('postcode'); }
  get chgStreet() { return this.chgAddressForm?.get('street'); }
  get chgNumber() { return this.chgAddressForm?.get('number'); }
  get chgApartment() { return this.chgAddressForm?.get('apartment'); }
  
  public selectAddRegion(){
    for (let region of this.regionsAndCommunes){
      if (this.addAddressForm.value.region === region.name){
        this.communes = region.communes;
      }
    }
  }

  public selectChgRegion(){
    for (let region of this.regionsAndCommunes){
      if (this.chgAddressForm.value.region === region.name){
        this.communes = region.communes;
      }
    }
  }

  public onSubmitAddAddress(){
    
  }

  public onSubmitChgAddress(){
    
  }
}
