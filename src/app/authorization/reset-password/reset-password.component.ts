import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  errorMessage: string = '';
  resetPasswordForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.resetPasswordForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'oldPassword': new FormControl('', Validators.required),
      'newPassword': new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const emailControl = this.resetPasswordForm.get('email');
    const oldPasswordControl = this.resetPasswordForm.get('oldPassword');
    const newPasswordControl = this.resetPasswordForm.get('newPassword');

    const email = emailControl ? emailControl.value : null;
    const oldPassword = oldPasswordControl ? oldPasswordControl.value : null;
    const newPassword = newPasswordControl ? newPasswordControl.value : null;

    this.userService.resetPassword({email, oldPassword, newPassword}).subscribe(
      data => {
        if (data.status === 'FAILED') {
          this.errorMessage = data.message; 
        } else {
          console.log('Password reset successful', data);
          window.alert('Password reset successful!');
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log('Error', error);
        window.alert('Error resetting password');
      }
    );
  }
}
