import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BuilderService } from '../../../services/builder.service';
import {PreviousButtonComponent} from "../../../../components/buttons/previous-button/previous-button.component";
import {COUNTRIES} from "../../../../Shared/constants/countries";

@Component({
  selector: 'app-builder-details',
  standalone: true,
  imports: [CommonModule, PreviousButtonComponent],
  templateUrl: './builder-details.component.html',
  styleUrl: './builder-details.component.css'
})
export class BuilderDetailsComponent implements OnInit {

  builder: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private builderService: BuilderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.builderService.getBuilderById(id).subscribe(res => {
        this.builder = res;
        this.loading = false;
      });
    }
  }

  updatePrice() {
    console.log('Update price clicked');
  }

  deleteBuilder() {
    console.log('Delete clicked');
  }

  get countryCode(): string {
    if (!this.builder?.nationality) return '';

    const country = COUNTRIES.find(
      c => c.name.toLowerCase() === this.builder.nationality.toLowerCase()
    );

    return country ? country.code.toLowerCase() : '';
  }
}
