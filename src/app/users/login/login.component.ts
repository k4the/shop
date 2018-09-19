import { UserData } from './../users.constants';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Keys } from '../../global.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../users.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginModalResult = new EventEmitter<{result: boolean}>();
  loginFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  userData: any = UserData;
  modalOpen = false;
  keys = Keys;

  constructor(private formBuilder: FormBuilder) {

    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.modalOpen = true;
    }, 0);
  }
  ok(): void {
    this.loginModalResult.next({result: true});
  }

  cancel(): void {
    this.modalOpen = false;
    this.loginModalResult.next({result: false});
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginFormGroup.value, this.loginFormGroup.status);
  }
}
