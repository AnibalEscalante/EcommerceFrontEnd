import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-personal-info',
  templateUrl: './my-personal-info.component.html',
  styleUrls: ['./my-personal-info.component.less']
})
export class MyPersonalInfoComponent implements OnInit {

 /*  value = 'Clear me'; */

  public updateForm: FormGroup;
  public hideP: boolean;
  public hideCP: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hideP = true;
    this.hideCP = true;
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.pattern('[a-zA-Z]{2,32}')]],
      lastNameP: ['', [Validators.pattern('[a-zA-Z]{2,32}')]],
      lastNameM: ['', [Validators.pattern('[a-zA-Z]{2,32}')]],
      run: ['', [Validators.pattern('[k,K,l0-9]{9}')]],
      phone: ['', [Validators.pattern('[0-9]{9}')]],
      email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
    });
  }

  ngOnInit(): void {
  }

  get name() { return this.updateForm?.get('name'); }
  get lastNameP() { return this.updateForm?.get('lastNameP'); }
  get lastNameM() { return this.updateForm?.get('lastNameM'); }
  get run() { return this.updateForm?.get('run'); }
  get phone() { return this.updateForm?.get('phone'); }
  get email() { return this.updateForm?.get('email'); }
  
  public getRunErrorMessage() {
    if (this.run?.hasError('required')) {
      return 'Ingrese un run';
    }
    return this.run?.invalid ? 'El dato ingresado no es un correo electónico valido' : '';
  }
  public getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Ingrese un correo electrónico';
    }
    return this.email?.invalid ? 'El dato ingresado no es un correo electónico valido' : '';
  }

  public getPhoneErrorMessage() {
    if (this.phone?.hasError('required')) {
      return 'Ingrese un numero de telefono';
    }
    return this.phone?.invalid ? 'El dato ingresado no es un correo electónico valido' : '';
  }

  public getNameErrorMessage() {
    if (this.name?.hasError('required')) {
      return 'Se requiere su Nombre';
    }
    return this.name?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getLastNamePErrorMessage() {
    if (this.lastNameP?.hasError('required')) {
      return 'Se requiere su primer Apellido';
    }
    return this.lastNameP?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getLastNameMErrorMessage() {
    if (this.lastNameP?.hasError('required')) {
      return 'Se requiere su segundo Apellido';
    }
    return this.lastNameM?.invalid ? 'El dato ingresado no es valido' : '';
  }

  onSubmit(){

  }
}
