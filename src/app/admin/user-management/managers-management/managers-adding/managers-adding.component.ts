import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COUNTRIES } from '../../../../Shared/constants/countries';
import { PreviousButtonComponent } from '../../../../components/buttons/previous-button/previous-button.component';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-managers-adding',
  standalone: true,
  imports: [CommonModule, PreviousButtonComponent],
  templateUrl: './managers-adding.component.html',
  styleUrl: './managers-adding.component.css',
})
export class ManagersAddingComponent {

  constructor(private managerService: ManagerService) {}

  /* =========================
     🟣 STEPPER STATE
  ========================== */

  activeStep = signal<number>(0);

  steps: string[] = [
    'Basic Info',
    'Personal Details',
    'Review'
  ];

  /* =========================
     🟢 FORM SIGNALS
  ========================== */

  name = signal<string>('');
  nationality = signal<string>('');
  yearOfBirth = signal<number>(1980);

  nationalities = COUNTRIES;

  /* =========================
     ✅ VALIDATIONS
  ========================== */

  isStep1Valid = computed(() =>
    this.name().trim().length > 2 &&
    this.nationality().trim().length > 0
  );

  isStep2Valid = computed(() =>
    this.yearOfBirth() >= 1940 &&
    this.yearOfBirth() <= new Date().getFullYear() - 18
  );

  isFormValid = computed(() =>
    this.isStep1Valid() &&
    this.isStep2Valid()
  );

  /* =========================
     🔄 NAVIGATION
  ========================== */

  next() {
    if (this.activeStep() < this.steps.length - 1) {
      this.activeStep.update(v => v + 1);
    }
  }

  prev() {
    if (this.activeStep() > 0) {
      this.activeStep.update(v => v - 1);
    }
  }

  /* =========================
     🚀 SUBMIT
  ========================== */

  submit() {
    if (!this.isFormValid()) return;

    const manager = {
      name: this.name(),
      nationality: this.nationality(),
      yearOfBirth: this.yearOfBirth()
    };

    this.managerService.addManager(manager).subscribe(
      ()=>{
      }
    )
  }
}
