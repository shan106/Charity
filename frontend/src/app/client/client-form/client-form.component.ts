import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})


export class ClientFormComponent {
  client = {
    name: '',
    birth: '',
    adres: '',
    tel: '',
    email: ''
  };

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit(): void {
    const payload = {
      ...this.client,
      tel: Number(this.client.tel) // Zet om naar nummer voor de backend
    };
    this.clientService.addClient(payload).subscribe(() => {
      alert('Cliënt succesvol geregistreerd!');
      this.router.navigate(['/clients']);
    });
  }

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }
}
