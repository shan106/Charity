import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ProfileDialogComponent } from '../../profile/profile-dialog/profile-dialog.component';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule, MatIconModule, MatMenuModule, CommonModule  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user: User | null = null;

  constructor(
    private auth: Auth,
    private router: Router,
    private dialog: MatDialog
  ) {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  openProfile() {
    if (this.user) {
      this.dialog.open(ProfileDialogComponent, {
        data: this.user,
        width: '350px'
      });
    }
  }

  logout() {
  this.auth.signOut().then(() => {
    this.router.navigate(['/']);
  });
}


}
