import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
   const router = inject(Router);

   if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
         return true;
      } else {
         router.navigate(['/auth/home']);
         return false;
      }
   } else {
      router.navigate(['/auth/home']);
      return false;
   }
};