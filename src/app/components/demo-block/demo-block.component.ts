import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-demo-block',
  templateUrl: './demo-block.component.html',
  styleUrls: ['./demo-block.component.scss']
})

export class DemoBlockComponent  implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  @ViewChild('cover', {static: false}) cover: ElementRef;
  constructor() { }

  init(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit(): void {
    this.init();
    this.video = 'i0ZabxXmH4Y';

    // @ts-ignore
    window.onYouTubeIframeAPIReady = (e) => {
      this.YT = window.YT;
      this.player = new window.YT.Player('player', {
        videoId: this.video,
        width: 200,
        height: 160
      });
    };
  }

  play(): void {
    this.cover.nativeElement.style.display = 'none';
    this.player.playVideo();
  }
}
