import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeamsComponent } from './search-teams.component';

describe('SearchTeamsComponent', () => {
  let component: SearchTeamsComponent;
  let fixture: ComponentFixture<SearchTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTeamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
