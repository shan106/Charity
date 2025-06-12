import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  hide = true;
  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private authService: AuthService) {}

  onRegister() {
    this.error = null;
    this.success = null;
    if (this.password !== this.confirmPassword) {
      this.error = 'Wachtwoorden komen niet overeen.';
      return;
    }
    this.loading = true;
    this.authService.register(this.email, this.password, this.name).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Registratie gelukt! Er is een verificatie-mail verstuurd. Controleer je inbox.';
      },
      error: err => {
        this.loading = false;
        this.error = err.message ?? 'Registratie mislukt.';
      }
    });
  }

}
