import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: '', password: '' };
  errorMessage: string = '';
  resetPasswordEmailSent: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(): void {
    this.userService.login(this.user).subscribe(
      data => {
        console.log('Login successful', data);
        // Store the user's email in the session storage
        sessionStorage.setItem("userEmail", data['message']);
        this.userService.userLoggedIn.next(true); // Emit the event
        window.alert('Login successful');
        this.errorMessage = '';
        this.router.navigate(['/common']);
      },
      error => {
        console.log('Error', error);
        this.errorMessage = 'Invalid email or password';
      }
    );
}

}

