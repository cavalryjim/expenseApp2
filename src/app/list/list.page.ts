import { Component, OnInit } from '@angular/core';
// import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  items = this.expenseService.expenses;

  constructor( private userService: UserService,
               private expenseService: ExpenseService,
               private router: Router ) {
  }

  ngAfterViewInit() {
    if (!this.userService.signedIn) {
      console.log('not signed in');
      this.showLogin();
    }
  }

  ngOnInit() {

  }

  showLogin() {
    this.router.navigateByUrl('/login');

  }

  onSelect(expense) {
    this.expenseService.selectedExpense = expense;
    this.router.navigateByUrl('/expense-detail');
  }

  newExpense() {
    this.router.navigateByUrl('/expense-new');
  }

}
