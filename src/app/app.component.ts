import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyCMRFmhM2QbZ2NHJ96m41FaDteXYTB97Uo",
      authDomain: "expenseapp-adcb5.firebaseapp.com",
      databaseURL: "https://expenseapp-adcb5.firebaseio.com",
      projectId: "expenseapp-adcb5",
      storageBucket: "expenseapp-adcb5.appspot.com",
      messagingSenderId: "1039233977161"
    })

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}
