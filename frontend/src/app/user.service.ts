import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, tap } from 'rxjs';
import { Users } from './interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLoggedIn = false;

  private isAuthenticated = false;

  REST_API: string = 'http://localhost:8000/api/users';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  addUser(data: Users): Observable<any> {
    let API_URL = this.REST_API;
    return this.httpClient.post(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.REST_API).pipe(
      catchError(this.handleError)
    );
  }

  getUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map(res => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  updateUser(id: any, data: Users): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders }).pipe(
      catchError(this.handleError)
    );
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    let API_URL = 'http://localhost:8000/api/login';
    return this.httpClient.post(API_URL, credentials, { headers: this.httpHeaders }).pipe(
      tap(() => this.isLoggedIn = true), // Actualizar el estado de autenticación si el inicio de sesión es exitoso
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n Message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
