import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonTenComponent } from './dungeon-ten.component';

describe('DungeonTenComponent', () => {
  let component: DungeonTenComponent;
  let fixture: ComponentFixture<DungeonTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
