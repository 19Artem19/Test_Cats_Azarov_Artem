import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Breeds } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get<Breeds[]>('https://api.thecatapi.com/v1/breeds');
  }

  getCatsImagesByBreed(breedId: string, amount: number) {
    return this.http.get<Breeds>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=${amount}`);
  }


}
