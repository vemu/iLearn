import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordSecurityValidator } from './password-security.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = { firstName: '', lastName: '', email: '', password: '' };

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [
        Validators.required,
        Validators.minLength(2)]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.minLength(2)]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email]),
      password: new FormControl(this.user.password, [
        Validators.required,
        PasswordSecurityValidator
      ])
    });
  }

  get firstName() { return this.signupForm.get('firstName'); }
  get lastName() { return this.signupForm.get('lastName'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }


  onSubmit() {
    console.log(this.signupForm.value);
  }
}
