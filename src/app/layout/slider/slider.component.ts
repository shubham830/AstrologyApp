import { Component, OnInit } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
  
})
export class SliderComponent implements OnInit {
  slides = [
    { img: 'https://thumbs.dreamstime.com/z/astrology-night-sky-clock-42984888.jpg'  },
    { img: 'https://media.gettyimages.com/photos/zodiac-signs-inside-of-horoscope-circle-astrology-in-the-sky-with-picture-id1199916946?s=2048x2048' },
    { img: 'https://media.gettyimages.com/vectors/occult-hand-vector-id165759771?s=2048x2048' },
    { img: 'https://thumbs.dreamstime.com/z/astrology-27216124.jpg' },
    { img: 'https://media.gettyimages.com/photos/blue-and-yellow-space-stars-picture-id940796400?s=2048x2048' },
  ];
  slideConfig = { autoplay: true, dots: true,slidesToShow: 4, slidesToScroll: 1 };

  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() {
    
   }

  ngOnInit(): void {
   
  }
 
}
