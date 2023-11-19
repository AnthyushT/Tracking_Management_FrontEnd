import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap/offcanvas/offcanvas';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:any = sessionStorage.getItem("userEmail");

  constructor(private userService: UserService, private router: Router) {
    this.user = sessionStorage.getItem("userEmail");
    console.log(this.user);
   }

  ngOnInit() {
    this.userService.userLoggedIn.subscribe(loggedIn => {
      if (loggedIn) {
        this.user = sessionStorage.getItem("userEmail");
      }
    });
  }

  logout(){
    sessionStorage.removeItem("userEmail");
    this.user = sessionStorage.getItem("userEmail");
  }
}

