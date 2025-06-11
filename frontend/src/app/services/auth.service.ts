import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

    login(email: string, password: string): Observable<any> {
      return from(signInWithEmailAndPassword(this.auth, email, password));
    }

}
