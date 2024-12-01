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

   testUsername = 'touchworld';
   testPassword = 'touchworldTech';

  constructor(private router: Router) {}

  login() {
    if (!this.userName || !this.password) {
      alert('Please enter both username and password.');
      return;
    }

    if (
      this.userName === this.testUsername &&
      this.password === this.testPassword
    ) {
      alert('Welcome to the website');
      this.router.navigate(['list']); 
    } else {
      alert('Username or password is incorrect');
    }
  }
}
