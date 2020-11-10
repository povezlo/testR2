import {Component, ComponentFactoryResolver, Inject, OnInit} from '@angular/core';
import {WINDOW} from './services/window.service';
import {FbService} from './services/fb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookApp';
  constructor(
    // private fb: FbService,
    // @Inject(WINDOW) public window: Window,
    // private resolver: ComponentFactoryResolver
  ) {}
  ngOnInit(): void {
  }
}
