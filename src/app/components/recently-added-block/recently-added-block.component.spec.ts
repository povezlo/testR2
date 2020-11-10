import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedBlockComponent } from './recently-added-block.component';

describe('RecentlyAddedBlockComponent', () => {
  let component: RecentlyAddedBlockComponent;
  let fixture: ComponentFixture<RecentlyAddedBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAddedBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
