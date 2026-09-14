import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ROUTE_URLS } from '../../route-paths';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.forgotForm = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  public forgot(): void {
    console.log(this.forgotForm.value);
    this.router.navigate([ROUTE_URLS.login]);
  }

  public goToLogin(): void {
    this.router.navigate([ROUTE_URLS.login]);
  }

  public resetForm(): void {
    this.forgotForm.reset();
    this.router.navigate([ROUTE_URLS.login]);
  }
}
