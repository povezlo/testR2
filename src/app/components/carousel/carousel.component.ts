import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {FbService} from '../../services/fb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('lastItem') nextBtn: ElementRef;
  @ViewChild('firstItem') prevBtn: ElementRef;
  @ViewChild('carousel') carouselItem: ElementRef;
  width = 230;
  maxEl = 150;
  position = 0;
  books = [];
  constructor(public breakpointObserver: BreakpointObserver, private fb: FbService) { }

  ngOnInit(): void {
    this.fb.getBooks().subscribe(res => {

      this.books = res;
    });
    this.breakpointObserver
      .observe(['(min-width: 969px)', '(max-width: 968px)', '(max-width: 767px)', '(max-width: 550px)', '(max-width: 539px)',
        '(max-width: 376px)', '(max-width: 320px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(max-width: 300px)']) {
          this.width = 60;
          this.maxEl = 10;
        } else if (state.breakpoints['(max-width: 320px)']) {
          this.width = 110;
          this.maxEl = 90;
        } else if (state.breakpoints['(max-width: 376px)']) {
          this.width = 136;
          this.maxEl = 110;
        } else if (state.breakpoints['(max-width: 539px)']) {
          this.width = 165;
          this.maxEl = 130;
        } else if (state.breakpoints['(max-width: 767px)']) {
          this.width = 200;
          this.maxEl = 150;
        } else if (state.breakpoints['(max-width: 968px)']) {
          this.width = 165;
          this.maxEl = 100;
        } else if (state.breakpoints['(min-width: 969px)']) {
          this.width = 230;
          this.maxEl = 150;
        }
      });
  }

  next(): void {
    if (this.position >= -this.books.length * this.maxEl) {
      this.prevBtn.nativeElement.style.backgroundColor = '#F0DCE0';
      this.prevBtn.nativeElement.style.color = '#D93146';
      this.prevBtn.nativeElement.style.cursor = 'pointer';
      this.position = this.position - this.width;
      this.carouselItem.nativeElement.style.marginLeft = this.position + 'px';
      this.carouselItem.nativeElement.style.transition = 'all 300ms ease';
    } else {
      this.nextBtn.nativeElement.style.backgroundColor = '#eaeaea';
      this.nextBtn.nativeElement.style.color = 'rgb(188 188 188)';
      this.nextBtn.nativeElement.style.cursor = 'none';
    }
  }
  prev(): void {
    if ( this.position > this.width || this.position !== 0) {
      this.nextBtn.nativeElement.style.backgroundColor = '#F0DCE0';
      this.nextBtn.nativeElement.style.color = '#D93146';
      this.nextBtn.nativeElement.style.cursor = 'pointer';
      this.position += this.width;
      this.carouselItem.nativeElement.style.marginLeft = this.position + 'px';
      this.carouselItem.nativeElement.style.transition = 'all 300ms ease';
    } else {
      this.prevBtn.nativeElement.style.backgroundColor = '#eaeaea';
      this.prevBtn.nativeElement.style.color = 'rgb(188 188 188)';
      this.prevBtn.nativeElement.style.cursor = 'none';
    }
  }

}
