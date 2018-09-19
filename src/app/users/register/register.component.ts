import { UserData } from './../users.constants';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { Keys } from '../../global.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../users.scss']
})
export class RegisterComponent implements OnInit {
  @Output() registerModalResult = new EventEmitter<{result: boolean}>();
  registerFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  userData: any = UserData;
  modalOpen = false;
  keys = Keys;

  constructor(private formBuilder: FormBuilder) {

    this.passwordFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    }, {
      validator: PasswordValidator.validate.bind(this)
    });
    this.registerFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.modalOpen = true;
    }, 0);
  }
  ok(): void {
    this.registerModalResult.next({result: true});
  }

  cancel(): void {
    this.modalOpen = false;
    this.registerModalResult.next({result: false});
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.registerFormGroup.value, this.registerFormGroup.status);
    console.log(this.passwordFormGroup.errors);
  }
}
