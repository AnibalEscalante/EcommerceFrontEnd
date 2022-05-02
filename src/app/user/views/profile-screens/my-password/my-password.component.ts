import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-password',
  templateUrl: './my-password.component.html',
  styleUrls: ['./my-password.component.less']
})
export class MyPasswordComponent implements OnInit {
  
  public changePass: FormGroup;
  value = 'Clear me';
  
  constructor(
    private formBuilder: FormBuilder
  ){ 
    
    this.changePass = this.formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@$!%*?&.]{6,12}$')]],
      newPassword: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@$!%*?&.]{6,12}$')]]
    });
  }
  
  get password() { return this.changePass?.get('password'); }
  get newPassword() { return this.changePass?.get('newPassword'); }

  public getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Se requiere la contaseña';
    }
    return this.password?.invalid ? 'El dato ingresado no es valido' : '';
  }

  
  public getNewPasswordErrorMessage() {
    if (this.newPassword?.hasError('required')) {
      return 'Se requiere nueva contraseña';
    }
    return this.password?.invalid ? 'El dato ingresado no es valido' : '';
  }
  
  ngOnInit(): void {
  }
  
  onSubmit(){

  }
}
