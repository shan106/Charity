import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FoodPickupService } from '../services/food-pickup.service';
import { ClientService } from '../services/client.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-food-pickup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,MatIconModule, ],
  templateUrl: './food-pickup.component.html',
  styleUrl: './food-pickup.component.css'
})
export class FoodPickupComponent {

  query = '';
  client: any = null;
  alreadyRegistered = false;
  notFound = false;
  place = 'Centrum'; // Of laat de gebruiker kiezen/ingeven

  constructor(
    private foodPickupService: FoodPickupService,
    private clientService: ClientService
  ) {}

  onSearch() {
    this.notFound = false;
    this.client = null;
    this.alreadyRegistered = false;
    this.clientService.findClient(this.query).subscribe({
      next: (client) => {
        if (client) {
          this.client = client;
          this.foodPickupService.getClientPickups(client.id).subscribe(pickups => {
            const today = new Date().toISOString().slice(0, 10);
            this.alreadyRegistered = pickups.some(
              p => p.pickupDate && p.pickupDate.slice(0, 10) === today
            );
          });
        } else {
          this.notFound = true;
        }
      },
      error: () => this.notFound = true
    });
  }

  registerPickup() {
    this.foodPickupService.registerPickup(this.client.id, this.place).subscribe(() => {
      this.alreadyRegistered = true;
      alert('Afhaling geregistreerd!');
    });
  }

}
