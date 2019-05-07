import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private urlAPI: string = 'https://api.themoviedb.org/3';
  private apikey: string = '67f2745bfbab836b3214ba02776d32ba';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=pt-br&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=pt-br&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getDiscoverMovie() {
    return this.getQuery('/discover/movie?').pipe(
      map((data: any) => data.results)
    );
  }

  getSearchMovie(input: string) {
    return this.getQuery(
      `/search/movie?query=${input}`
    ).pipe(map((data: any) => data.results));
  }

  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

}
