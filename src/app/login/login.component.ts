import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  title = 'formTest';

  // Define credentials as constants
  private readonly validUsername = 'touchworld';
  private readonly validPassword = 'touchworldTech';

  constructor(private router: Router) {}

  login() {
    if (!this.userName || !this.password) {
      alert('Please enter both username and password.');
      return;
    }

    if (
      this.userName === this.validUsername &&
      this.password === this.validPassword
    ) {
      alert('Welcome to the website');
      this.router.navigate(['list']); // Navigate to the 'list' route
    } else {
      alert('Username or password is incorrect');
    }
  }
}
