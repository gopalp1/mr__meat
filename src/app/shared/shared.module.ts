import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LocationModalComponent } from './location-modal/location-modal.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LocationModalComponent,
    CategoriesComponent,
    BestSellerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
  ],
  exports:[
    MatIconModule,
    MatDialogModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    LocationModalComponent,
    CategoriesComponent,
    BestSellerComponent
  ]
})
export class SharedModule { }
