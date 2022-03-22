import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.less']
})
export class RegisterScreenComponent implements OnInit {

  public registerForm: FormGroup;
  public hideP: boolean;
  public hideCP: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hideP = true;
    this.hideCP = true;
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@$!%*?&.]{6,12}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@$!%*?&.]{6,12}$')]],
    });
  }

  ngOnInit(): void {
  }

  get name() { return this.registerForm?.get('name'); }
  get lastName() { return this.registerForm?.get('lastName'); }
  get email() { return this.registerForm?.get('email'); }
  get password() { return this.registerForm?.get('password'); }
  get confirmPassword() { return this.registerForm?.get('confirmPassword'); }
  
  public getNameErrorMessage() {
    if (this.name?.hasError('required')) {
      return 'Se requiere su Nombre';
    }
    return this.name?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getLastNameErrorMessage() {
    if (this.lastName?.hasError('required')) {
      return 'Se requiere su Apellido';
    }
    return this.lastName?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Se requiere el email';
    }
    return this.email?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Se requiere la contaseña';
    }
    return this.password?.invalid ? 'El dato ingresado no es valido' : '';
  }

  public getConfirmPasswordErrorMessage() {
    if (this.confirmPassword?.hasError('required')) {
      return 'Se requiere confirmar la contaseña';
    }
    if (this.password !== this.confirmPassword) {
      return 'las contraseñas no son iguales';
    }
    return this.confirmPassword?.invalid ? 'El dato ingresado no es valido' : '';
  }
  
  onSubmit(){

  }

}
