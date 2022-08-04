import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { MultipleCardPostComponent } from './multiple-card-post/multiple-card-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SliderComponent,
    ModalComponent,
    MultipleCardPostComponent,
  ],
  exports: [SliderComponent],

  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class LayoutModule { }
