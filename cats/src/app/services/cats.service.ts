import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CatImages } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  catsSub$ = new BehaviorSubject<CatImages[]>([]);
  catsSub = this.catsSub$.asObservable();

  private url = 'https://api.thecatapi.com/v1/images/search?limit=20';
  private apiKey = 'live_nuRXiePd6EWzdd8NcqtPemH35sgyCWhFcA0bywPUNvwRZU0FKMbbgbN4oeA3M2MB';
  //  private _url = environment.url;
  //  private _apiKey = environment.apiKey;


  constructor(private http: HttpClient) {
    this.getData().subscribe((cats) => {
      this.catsSub$.next(cats);
    });
  }

  getData(): Observable<CatImages[]> {
    return this.http.get<CatImages[]>(`${this.url}&api_key=${this.apiKey}`)
  }

  getCats(): Observable<CatImages[]> {
    return this.catsSub$
  }

}
