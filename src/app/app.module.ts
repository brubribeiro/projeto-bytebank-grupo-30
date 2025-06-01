import { CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BalanceComponent } from './dashboard/balance/balance.component';
import { ButtonComponent } from './dashboard/button/button.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtractComponent } from './dashboard/extract/extract.component';
import { HeaderDashboardComponent } from './dashboard/header-dashboard/header-dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { DropdownComponent } from './dashboard/new-transaction/dropdown/dropdown.component';
import { InputComponent } from './dashboard/new-transaction/input/input.component';
import { NewTransactionComponent } from './dashboard/new-transaction/new-transaction.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { HomeComponent } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);



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
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,  
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    RouterModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: LOCALE_ID, useValue: 'pt-br' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
