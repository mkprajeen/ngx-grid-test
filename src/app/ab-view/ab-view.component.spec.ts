import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbViewComponent } from './ab-view.component';

describe('AbViewComponent', () => {
  let component: AbViewComponent;
  let fixture: ComponentFixture<AbViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
