import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BuilderService } from '../../../services/builder.service';
import { PreviousButtonComponent } from "../../../../components/buttons/previous-button/previous-button.component";
import { LoaderComponent } from "../../../../components/loader/loader.component";
import { ModalComponent } from "../../../../components/modal/modal.component";
import { COUNTRIES } from "../../../../Shared/constants/countries";

@Component({
  selector: 'app-builder-details',
  standalone: true,
  imports: [
    CommonModule,
    PreviousButtonComponent,
    LoaderComponent,
    ModalComponent
  ],
  templateUrl: './builder-details.component.html',
  styleUrl: './builder-details.component.css'
})
export class BuilderDetailsComponent implements OnInit {

  builder: any = null;

  loading = signal(true);
  showDeleteModal = signal(false);

  constructor(
    private route: ActivatedRoute,
    private builderService: BuilderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.builderService.getBuilderById(+id).subscribe({
      next: (res) => {
        this.builder = res;
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  updatePrice() {
    console.log('Update price clicked');
  }

  deleteBuilder() {
    this.showDeleteModal.set(false);

    // Example real delete
    /*
    this.loading.set(true);

    this.builderService.deleteBuilder(this.builder.id).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/admin/builders']);
      },
      error: () => {
        this.loading.set(false);
      }
    });
    */
  }

  get countryCode(): string {
    if (!this.builder?.nationality) return '';

    const country = COUNTRIES.find(
      c => c.name.toLowerCase() === this.builder.nationality.toLowerCase()
    );

    return country ? country.code.toLowerCase() : '';
  }
}
