import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPickComponent } from './weapon-pick.component';

describe('WeaponPickComponent', () => {
  let component: WeaponPickComponent;
  let fixture: ComponentFixture<WeaponPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
