import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPublisherComponent } from './features-publisher.component';

describe('FeaturesPublisherComponent', () => {
  let component: FeaturesPublisherComponent;
  let fixture: ComponentFixture<FeaturesPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
