import { Component, Inject } from '@angular/core';
import { User } from 'firebase/auth';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-dialog',
  imports: [
    MatDialogModule, 
    MatIconModule
  ],
  templateUrl: './profile-dialog.component.html',
  styleUrl: './profile-dialog.component.css'
})
export class ProfileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}

}
