// src/app/login.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private userService: UserService,
               public router: Router ) { }

  ngOnInit() {
  }

  doLogin() {
    this.userService.signedIn = true;
    this.router.navigateByUrl('/list');
    // this.navCtrl.navigateRoot('/list');
  }

  gotoSignup() {
    this.router.navigateByUrl('/signup');
    // this.navCtrl.navigateForward('/signup');
  }

}
