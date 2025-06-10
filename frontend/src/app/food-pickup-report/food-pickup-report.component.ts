import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { FoodPickupService } from '../services/food-pickup.service';

@Component({
  selector: 'app-food-pickup-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  templateUrl: './food-pickup-report.component.html',
  styleUrl: './food-pickup-report.component.css'
})
export class FoodPickupReportComponent {

  months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];
  places = ['Luxemburg', 'Limburg', 'Brussel', 'Antwerpen']; 
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  place: string = this.places[0];
  pickups: any[] = [];
  loading = false;
  columns = ['name', 'date', 'place'];

  constructor(private foodPickupService: FoodPickupService) {}

  fetchReport() {
    this.loading = true;
    this.pickups = [];
    this.foodPickupService.getPickupsByMonthYear(this.year, this.month, this.place)
      .subscribe({
        next: (data) => {
          this.pickups = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }
}
