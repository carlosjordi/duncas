import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonFiveComponent } from './dungeon-five.component';

describe('DungeonFiveComponent', () => {
  let component: DungeonFiveComponent;
  let fixture: ComponentFixture<DungeonFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
