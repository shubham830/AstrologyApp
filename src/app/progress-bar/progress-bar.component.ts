import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  tab1: boolean = true;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('.step').each(function (index, element) {
        // element == this
        $(element).not('.active1').addClass('done');
        $('.done').html('<i class="icon-ok"></i>');
        if ($(this).is('.active')) {
          return false;
        }
      });
    });
  }
  tab(id: number) {
    if (id == 1) {
      this.tab1 = true
    }
  }
  btNext(id:number) {
    alert("click")
    $('.step').each(function (index, element) {
      // element == this
      $(element).not('.active').addClass('done');
      $('.done').html('<i class="icon-ok"></i>');
      if ($(this).is('.active')) {
        return false;
      }
    });
  }
}
