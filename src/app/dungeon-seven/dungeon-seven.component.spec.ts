import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonSevenComponent } from './dungeon-seven.component';

describe('DungeonSevenComponent', () => {
  let component: DungeonSevenComponent;
  let fixture: ComponentFixture<DungeonSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
