import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from '../services/client.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditClientDialogComponent } from '../edit-client-dialog/edit-client-dialog.component';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clients: Client[] = [];
  displayedColumns: string[] = ['name', 'birth', 'adres', 'tel', 'email', 'actions'];

  loading = true;

  constructor(private clientService: ClientService, private dialog: MatDialog,) {}

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({
      next: (data) => {
        this.clients = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  deleteClient(client: Client) {
  if (!client.id) {
    alert('Geen geldig ID voor deze klant!');
    return;
  }
  if (confirm(`Weet je zeker dat je ${client.name} wilt verwijderen?`)) {
    this.clientService.deleteClient(client.id).subscribe({
      next: () => {
        this.clients = this.clients.filter(c => c.id !== client.id);
      },
      error: () => alert('Verwijderen mislukt!')
    });
  }
}

openEditDialog(client: Client) {
  const dialogRef = this.dialog.open(EditClientDialogComponent, {
    data: client,
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Stuur update naar backend
      this.clientService.updateClient(result.id, result).subscribe(updated => {
        const idx = this.clients.findIndex(c => c.id === updated.id);
        if (idx > -1) this.clients[idx] = updated;
      });
    }
  });


}}
