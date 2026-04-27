import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        window.location.href = '/';
      },
      error: () => {
        alert('Login failed');
      }
    });
  }
}