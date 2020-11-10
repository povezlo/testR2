import { Component, OnInit } from '@angular/core';
import {FbService} from '../../services/fb.service';
import {Books} from '../../interface';
@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {
  constructor(private fb: FbService) { }
  ngOnInit(): void {
  }

}
