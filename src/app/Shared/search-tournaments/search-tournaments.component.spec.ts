import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTournamentsComponent } from './search-tournaments.component';

describe('SearchTournamentsComponent', () => {
  let component: SearchTournamentsComponent;
  let fixture: ComponentFixture<SearchTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTournamentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
