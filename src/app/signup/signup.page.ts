import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor( private userService: UserService,
               public router: Router ) { }

  ngOnInit() {
  }

  doSignup() {
    this.router.navigateByUrl('/login');
    // this.navCtrl.navigateBack('/login');
  }

  gotoLogin() {
    this.router.navigateByUrl('/login');
    // this.navCtrl.navigateBack('/login');
  }

}
