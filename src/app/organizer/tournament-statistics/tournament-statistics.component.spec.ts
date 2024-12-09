import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentStatisticsComponent } from './tournament-statistics.component';

describe('TournamentStatisticsComponent', () => {
  let component: TournamentStatisticsComponent;
  let fixture: ComponentFixture<TournamentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
