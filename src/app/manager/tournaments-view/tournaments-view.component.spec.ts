import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsViewComponent } from './tournaments-view.component';

describe('TournamentsViewComponent', () => {
  let component: TournamentsViewComponent;
  let fixture: ComponentFixture<TournamentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TournamentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
