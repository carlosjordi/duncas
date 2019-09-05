import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonEightComponent } from './dungeon-eight.component';

describe('DungeonEightComponent', () => {
  let component: DungeonEightComponent;
  let fixture: ComponentFixture<DungeonEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
