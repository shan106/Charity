
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

export const authGuard = () => {
  const auth = inject(Auth);
  const router = inject(Router);
  console.log('AuthGuard called!');
  return new Promise<boolean | any>((resolve) => {
    auth.onAuthStateChanged(user => {
      console.log('User:', user);
      if (user) {
        resolve(true);
      } else {
        resolve(router.createUrlTree(['/login']));
      }
    });
  });
};
