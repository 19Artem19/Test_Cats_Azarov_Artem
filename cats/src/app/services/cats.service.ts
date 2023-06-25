import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Breed, Breeds } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private _urlAllBreeds = environment.urlAllBreeds;
  private _urlBreedById = environment.urlBreedById;

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get<Breeds[]>(this._urlAllBreeds)
      .pipe(retry(1), catchError(this.handleError));
  }


  getCatsImagesByBreed(breedId: string[], amount: number) {
    return this.http.get<Breed[]>(this._urlBreedById + `${breedId}&limit=${amount}&api_key=`)
      .pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }

}
