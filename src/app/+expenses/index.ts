import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { Expenses } from './expenses.component';

import { SharedModule } from '../app.shared';

import { AppHttp } from '../app.http';
import { AppData } from '../app.data';

export const routes = [
  { path: '', component: Expenses, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ExpenseFormComponent,
    Expenses
  ],
  providers: [
      AppHttp, AppData
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class ExpensesModule {
  static routes = routes;
}
