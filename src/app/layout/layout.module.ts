import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { MultipleCardPostComponent } from './multiple-card-post/multiple-card-post.component';
import { UserProfileRatingComponent } from './user-profile-rating/user-profile-rating.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    ModalComponent,
    MultipleCardPostComponent,
    UserProfileRatingComponent
  ],
  exports: [HeaderComponent,SliderComponent],

  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ]
})
export class LayoutModule { }
