import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  userSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Submitted, you are registered');
    } else {
      this.alertify.error('Please provide valid required fields');
    }
  }

  onCancel() {
    this.registrationForm.reset();
    this.userSubmitted = false;
  }

  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }
}
