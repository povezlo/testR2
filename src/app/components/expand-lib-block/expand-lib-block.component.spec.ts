import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandLibBlockComponent } from './expand-lib-block.component';

describe('ExpandLibBlockComponent', () => {
  let component: ExpandLibBlockComponent;
  let fixture: ComponentFixture<ExpandLibBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandLibBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandLibBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
