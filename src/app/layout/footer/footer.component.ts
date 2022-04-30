import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imageSrc = '~/../assets/FB_IMG_1650791485531.jpg' ;
  constructor() { }

  ngOnInit(): void {
  }
  public slideIndex:number = 1;
    plusSlides(n: number) {
      this.showSlides(this.slideIndex += n);
    }
     currentSlide(n: number) {
      this.showSlides(this.slideIndex = n);
    }
     showSlides(n: number) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}    
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].getElementsByClassName("problem");
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex-1].getElementsByClassName("problem1");  
      dots[this.slideIndex-1].className += " active";
    }
}
