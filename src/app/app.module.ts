import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ShopModule } from './shop/shop.module'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]), 
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
