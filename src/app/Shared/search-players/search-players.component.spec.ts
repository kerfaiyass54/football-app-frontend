import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlayersComponent } from './search-players.component';

describe('SearchPlayersComponent', () => {
  let component: SearchPlayersComponent;
  let fixture: ComponentFixture<SearchPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPlayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
