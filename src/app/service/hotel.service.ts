import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl: string = "http://localhost:8080/api/hoteles";
  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data; charset=utf-8; boundary="---"');


  constructor(private httpClient: HttpClient) { }

  // Get list
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }


  // Get one by id
  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create new
  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }
  // Create new hotel by auth
  createByAuth(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/auth`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Update
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(this.apiUrl + `/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  //Get by nombre
  getByNombre(nombre: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?nombre_like=${nombre}`).pipe(
      catchError(this.handleError)
    )
  }
  //Get by ciudad
  getByCiudad(ciudad: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/ciudad/${ciudad}`).pipe(
      catchError(this.handleError)
    )
  }

  //Get by cuenta
  getByCuenta(cuenta: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?cuenta_like=${cuenta}`).pipe(
      catchError(this.handleError)
    )
  }

  //Subir foto hotel
  subirFotoHotel(id: number, file: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/file/add/${id}`, file, {headers: this.headers}).pipe(
      catchError(this.handleError)
    )
  }

  //Handle errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error: ', error.error.message)
    } else {
      console.error(
        `Backend  returned code ${error.status},
        body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Ha ocurrido un error, intentelo de nuevo más tarde.'));
  }




}
