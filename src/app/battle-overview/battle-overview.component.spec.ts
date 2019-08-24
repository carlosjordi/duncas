import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleOverviewComponent } from './battle-overview.component';

describe('BattleOverviewComponent', () => {
  let component: BattleOverviewComponent;
  let fixture: ComponentFixture<BattleOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
