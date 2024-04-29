import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = localStorage.getItem('token') !== null; // Verifica si el token existe en el localStorage
    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión si no está autenticado
    }
    return isAuthenticated;
  }
}
