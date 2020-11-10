import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchActive = false;
  isMenuOpen = false;
  @ViewChild('search', {static: false}) search: ElementRef;
  @ViewChild('menuList', {static: false}) listMenu: ElementRef;
  @ViewChild('quit', {static: false}) listQuit: ElementRef;
  constructor(private r: Renderer2) { }

  ngOnInit(): void {
  }


  openMenu(): void {
    this.r.addClass(this.listMenu.nativeElement, 'header-menu-list-active');
    this.r.setStyle(this.listQuit.nativeElement, 'display', 'block');
    this.isMenuOpen = true;
  }
  closeMenu(): void {
    this.r.removeClass(this.listMenu.nativeElement, 'header-menu-list-active');
    this.r.setStyle(this.listQuit.nativeElement, 'display', 'none');
    this.isMenuOpen = false;
  }

  searchOpen(): void {
    if (!this.isMenuOpen) {
      this.searchActive = true;
    }
  }
}
