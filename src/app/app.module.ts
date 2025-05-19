import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ExtractComponent } from './dashboard/extract/extract.component';
import { HeaderDashboardComponent } from './dashboard/header-dashboard/header-dashboard.component';
import { BalanceComponent } from './dashboard/balance/balance.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { NewTransactionComponent } from './dashboard/new-transaction/new-transaction.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { DropdownComponent } from './dashboard/new-transaction/dropdown/dropdown.component';
import { InputComponent } from './dashboard/new-transaction/input/input.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContentComponent } from './home/content/content.component';
import {
  ButtonComponent as ByteBankButtonComponent,
  HeaderComponent as ByteBankHeaderComponent,
} from 'bytebank-ui';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ExtractComponent,
    HeaderDashboardComponent,
    BalanceComponent,
    MenuComponent,
    NewTransactionComponent,
    ButtonComponent,
    DropdownComponent,
    InputComponent,
    HeaderHomeComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ByteBankButtonComponent,
    ByteBankHeaderComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
