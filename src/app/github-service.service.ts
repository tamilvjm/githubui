import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {map, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  private username: string;
  private client_id = '593539d2f886b1fa5907';
  private client_secret = 'fc659ebd86013c2dd7d8c6b0414c7ef9cc0c5099';
  private configUrl = 'http://api.github.com/users/';
  //Meed to move above configs to config file / vault

  constructor(private http: HttpClient) {
  }

  getUser(username) {
          return this.http.get<any>(this.configUrl + username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .pipe(
            catchError(this.handleError)
          );
  }

  getUser1() {
          return this.http.get<any>(this.configUrl + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .pipe(
            catchError(this.handleError)
          );
  }

  getRepos(username) {

          return this.http.get<any>(this.configUrl + username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .pipe(
            catchError(this.handleError)
          );
  }

  private handleError(error: HttpErrorResponse) { //need to optimize
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  updateUser(username:string){
    this.username = username;
  }
}
