import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { UsersService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  error: string | null = null; // Variable para almacenar mensajes de error

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  procesar(event: Event): void {
    event.preventDefault();
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;
      this.userService.login({ email, password }).subscribe(
        () => {
          console.log('Inicio de sesión exitoso');
          alert('Inicio de sesión exitoso');
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);       alert('Error al iniciar sesión:');
          this.error = 'Credenciales inválidas. Por favor, inténtalo de nuevo.';
        }
      );
    } else {
      console.log('El formulario no es válido');
      alert('El formulario no es válido');
    }
  }

  // Método para limpiar el mensaje de error
  clearError(): void {
    this.error = null;
  }

  get email(): FormControl {
    return this.formLogin.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.formLogin.get('password') as FormControl;
  }
}
