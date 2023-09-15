import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // if (this.loginForm.invalid) {
    //   return;
    // }

    this.loading = true;
    let isUserLoggedIn = this.authService.login(this.loginForm.value);
    if (isUserLoggedIn) {
      this.router.navigate(['/dashboard']);
      window.location.href = '/dashboard';
    }
    if (!isUserLoggedIn) {
      this.error = 'Login failed. Please try again!';
      this.loading = false;
    }
  }
}
