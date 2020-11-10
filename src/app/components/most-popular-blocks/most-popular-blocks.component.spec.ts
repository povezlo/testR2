import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularBlocksComponent } from './most-popular-blocks.component';

describe('MostPopularBlocksComponent', () => {
  let component: MostPopularBlocksComponent;
  let fixture: ComponentFixture<MostPopularBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
