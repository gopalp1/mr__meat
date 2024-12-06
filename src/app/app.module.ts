import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { BestsellerListComponent } from './components/bestseller-list/bestseller-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OutletComponent } from './outlet/outlet.component';
import { RidersComponent } from './riders/riders.component';
import { SlotsComponent } from './slots/slots.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { OrdersComponent } from './orders/orders.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OutletAddComponent } from './outlet/outlet-add/outlet-add.component';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';
import { MatIconModule } from '@angular/material/icon';
import { ReportsComponent } from './reports/reports.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select'; // Required for mat-select
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestsellerListComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    LoginComponent,
    DashboardComponent,
    OutletComponent,
    RidersComponent,
    SlotsComponent,
    ProductsComponent,
    CategoryComponent,
    OrdersComponent,
    OutletAddComponent,
    ReportsComponent,
    ReportsComponent,
  ],
  entryComponents: [OutletAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    MatStepperModule,
    NgOtpInputModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgmbfa6fzY_WpJ2cnlRyQLwmAjuXRc7JM',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
