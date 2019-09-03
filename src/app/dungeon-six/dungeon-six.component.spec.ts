import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonSixComponent } from './dungeon-six.component';

describe('DungeonSixComponent', () => {
  let component: DungeonSixComponent;
  let fixture: ComponentFixture<DungeonSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
