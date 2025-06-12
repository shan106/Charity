import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile, User } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

    login(email: string, password: string): Observable<any> {
      return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    register(email: string, password: string, displayName: string): Observable<User> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
        .then(cred => {
          if (!cred.user) throw new Error('Gebruiker kon niet aangemaakt worden.');
          
          return updateProfile(cred.user, { displayName }).then(() => {
            
            return sendEmailVerification(cred.user).then(() => cred.user);
          });
        })
    );
  }

}
