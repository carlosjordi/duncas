import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonOneComponent } from './dungeon-one.component';

describe('DungeonOneComponent', () => {
  let component: DungeonOneComponent;
  let fixture: ComponentFixture<DungeonOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
