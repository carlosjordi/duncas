import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonFourComponent } from './dungeon-four.component';

describe('DungeonFourComponent', () => {
  let component: DungeonFourComponent;
  let fixture: ComponentFixture<DungeonFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
