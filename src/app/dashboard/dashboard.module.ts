import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../layout/slider/slider.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { ModalLoginComponent } from '../layout/modal-login/modal-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    ModalLoginComponent
  ],
  exports: [DashboardComponent],

  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    ReactiveFormsModule, FormsModule,
  ]
})
export class DashboardModule { }
