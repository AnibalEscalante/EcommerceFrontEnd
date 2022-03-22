import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  public loginForm: FormGroup;
  public hide: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hide = true;
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@$!%*?&.]{6,12}$')]]
    });
  }

  ngOnInit(): void {
  }

  get email() { return this.loginForm?.get('email'); }
  get password() { return this.loginForm?.get('password'); }

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
  
  onSubmit(){

  }
}
