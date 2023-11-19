import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    mobileNumber: ['', [Validators.required]],
  });
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  showPassword = true;
  ngOnInit(): void {
    
  }

  get f() { return this.registerForm.controls; } 

  onSubmit(): void {
    this.submitted = true; 

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        window.alert('Form is invalid. Please check your inputs.');
        return;
    }

    console.log(this.registerForm.value)
    this.userService.addUser(this.registerForm.value).subscribe(
       response => {
        console.log('User added!', response);
        window.alert('You have successfully registered!');
        this.router.navigate(['/login']);
       } ,
      err => {
        console.log('Error!', err);
        let errorResponse = JSON.parse(err.error);
        if (errorResponse.message === 'The user already exists!') {
          window.alert('The user already exists! Please use another email to register.');
        } else {
          window.alert('Error occurred while registering. Please try again.');
        }
      }
   );
  }


  showPasswordToggle(){
    this.showPassword = !this.showPassword;
  }
}
