import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonNineComponent } from './dungeon-nine.component';

describe('DungeonNineComponent', () => {
  let component: DungeonNineComponent;
  let fixture: ComponentFixture<DungeonNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
