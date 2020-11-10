import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBlockComponent } from './features-block.component';

describe('FeaturesBlockComponent', () => {
  let component: FeaturesBlockComponent;
  let fixture: ComponentFixture<FeaturesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
