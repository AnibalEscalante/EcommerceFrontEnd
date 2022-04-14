import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.less']
})
export class ProfileScreenComponent implements OnInit {
  value = 'Clear me';

  public updateForm: FormGroup;
  public hideP: boolean;
  public hideCP: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.hideP = true;
    this.hideCP = true;
    this.updateForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      lastNameP: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      lastNameM: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      run: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,32}')]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],
    });
  }

  ngOnInit(): void {
  }

  get name() { return this.updateForm?.get('name'); }
  get lastNameP() { return this.updateForm?.get('lastNameP'); }
  get lastNameM() { return this.updateForm?.get('lastNameM'); }
  get run() { return this.updateForm?.get('run'); }
  get email() { return this.updateForm?.get('email'); }
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

  public getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Se requiere el email';
    }
    return this.email?.invalid ? 'El dato ingresado no es valido' : '';
  }
  onSubmit(){

  }
}
