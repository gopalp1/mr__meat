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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BannersComponent } from './components/banners/banners.component';
import { BannerContentComponent } from './components/banner-content/banner-content.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LocationModalComponent,
    CategoriesComponent,
    BestSellerComponent,
    BannersComponent,
    BannerContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatButtonToggleModule
  ],
  exports:[
    MatIconModule,
    MatDialogModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    LocationModalComponent,
    CategoriesComponent,
    BestSellerComponent,
    MatButtonToggleModule,
    BannersComponent,
    BannerContentComponent
  ]
})
export class SharedModule { }
