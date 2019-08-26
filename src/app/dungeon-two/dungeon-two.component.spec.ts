import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonTwoComponent } from './dungeon-two.component';

describe('DungeonTwoComponent', () => {
  let component: DungeonTwoComponent;
  let fixture: ComponentFixture<DungeonTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
