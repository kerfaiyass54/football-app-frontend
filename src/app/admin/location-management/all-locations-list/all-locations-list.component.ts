import { Component, OnInit } from '@angular/core';
import { CustomListComponent } from "../../../Shared/shared-ui/custom-list/custom-list.component";
import { PreviousButtonComponent } from "../../../components/buttons/previous-button/previous-button.component";
import { TableColumn } from "../../../components/generic-table/generic-table.component";
import { LOCATION_TABLE_COLUMNS } from "../../../core/constants/location.constants";
import {LocationService} from "../../services/location.service";

@Component({
  selector: 'app-locations-list',
  standalone: true,
  imports: [
    CustomListComponent,
    PreviousButtonComponent
  ],
  templateUrl: './all-locations-list.component.html',
  styleUrl: './all-locations-list.component.css',
})
export class AllLocationsListComponent implements OnInit {

  columns: TableColumn<any>[] = LOCATION_TABLE_COLUMNS;
  data: any[] = [];

  page: number = 1;     // UI page starts at 1
  size: number = 5;

  totalElements: number = 0;

  constructor(private locationService:
              LocationService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    // Backend pagination starts at 0
    this.locationService.getPaged(this.page - 1, this.size).subscribe({
      next: (res: any) => {
        this.data = res.content;               // Page content
        this.totalElements = res.totalElements; // Total count from backend
      },
      error: (err: any) => {
        console.error('Error loading locations:', err);
      }
    });
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadLocations();
  }
}
