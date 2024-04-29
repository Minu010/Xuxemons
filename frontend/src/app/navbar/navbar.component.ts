import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public userService: UsersService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/home'); // Redirige al usuario a la página de inicio
  }
}
