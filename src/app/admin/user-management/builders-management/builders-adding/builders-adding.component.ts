import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COUNTRIES} from "../../../../Shared/constants/countries";

@Component({
  selector: 'app-builders-adding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builders-adding.component.html',
  styleUrl: './builders-adding.component.css',
})
export class BuildersAddingComponent {

  /* =========================
     🟣 STEPPER STATE
  ========================== */

  activeStep = signal<number>(0);

  steps: string[] = [
    'Basic Info',
    'Expertise',
    'Company Details',
    'Review'
  ];

  /* =========================
     🟢 FORM SIGNALS
  ========================== */

  name = signal<string>('');
  nationality = signal<string>('');
  expertise = signal<string>('');
  yearEstablished = signal<number>(2000);
  price = signal<number>(0);

  /* =========================
     🌍 DATA SOURCES
  ========================== */

  nationalities = COUNTRIES;

  expertises: string[] = [
    'STRUCTURE',
    'TURF',
    'DRAINAGE',
    'LIGHTING',
    'SAFETY',
    'PROJECT_MANAGE',
    'REGULATION',
    'INNOVATION',
    'SUSTAINABILITY'
  ];

  /* =========================
     ✅ VALIDATIONS
  ========================== */

  isStep1Valid = computed(() =>
    this.name().trim().length > 2 &&
    this.nationality().trim().length > 0
  );

  isStep2Valid = computed(() =>
    this.expertise().trim().length > 0
  );

  isStep3Valid = computed(() =>
    this.yearEstablished() >= 1950 &&
    this.yearEstablished() <= new Date().getFullYear() &&
    this.price() >= 0
  );

  isFormValid = computed(() =>
    this.isStep1Valid() &&
    this.isStep2Valid() &&
    this.isStep3Valid()
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

    const builder = {
      name: this.name(),
      nationality: this.nationality(),
      expertise: this.expertise(),
      yearEstablished: this.yearEstablished(),
      price: this.price()
    };

    console.log('🏟 Stadium Builder Created:', builder);
  }
}
