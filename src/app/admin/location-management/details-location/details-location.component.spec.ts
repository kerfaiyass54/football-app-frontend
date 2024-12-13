import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLocationComponent } from './details-location.component';

describe('DetailsLocationComponent', () => {
  let component: DetailsLocationComponent;
  let fixture: ComponentFixture<DetailsLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
