import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStadiumComponent } from './set-stadium.component';

describe('SetStadiumComponent', () => {
  let component: SetStadiumComponent;
  let fixture: ComponentFixture<SetStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetStadiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
