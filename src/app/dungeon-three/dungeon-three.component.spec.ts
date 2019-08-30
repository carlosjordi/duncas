import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonThreeComponent } from './dungeon-three.component';

describe('DungeonThreeComponent', () => {
  let component: DungeonThreeComponent;
  let fixture: ComponentFixture<DungeonThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
