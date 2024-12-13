import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IewTrounamentComponent } from './iew-trounament.component';

describe('IewTrounamentComponent', () => {
  let component: IewTrounamentComponent;
  let fixture: ComponentFixture<IewTrounamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IewTrounamentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IewTrounamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
