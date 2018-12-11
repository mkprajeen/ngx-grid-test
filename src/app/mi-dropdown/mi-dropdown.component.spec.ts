import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDropdownComponent } from './mi-dropdown.component';

describe('MiDropdownComponent', () => {
  let component: MiDropdownComponent;
  let fixture: ComponentFixture<MiDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
