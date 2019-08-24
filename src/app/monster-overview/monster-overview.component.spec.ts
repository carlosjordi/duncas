import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterOverviewComponent } from './monster-overview.component';

describe('MonsterOverviewComponent', () => {
  let component: MonsterOverviewComponent;
  let fixture: ComponentFixture<MonsterOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
