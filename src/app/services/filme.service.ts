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

  // QUERY

  getQuery(query: string) {
    const url = `${this.urlAPI}${query}&api_key=${this.apikey}&language=pt-BR&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryforMovies(query: string) {
    const url = `${this.urlAPI}${query}?api_key=${this.apikey}&language=pt-BR&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryVideo(id: string) {
    const url = `${this.urlAPI}/movie/${id}/videos?api_key=${this.apikey}&language=pt-BR&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryPage(page: string) {
    const url = `${this.urlAPI}/discover/movie?api_key=${this.apikey}&language=pt-BR&callback=JSONP_CALLBACK&${page}`;

    return this.http.jsonp(url, '');
  }

  // GET

  getMovieId(id: string) {
    return this.getQueryforMovies(`/movie/${id}`)
    .pipe(map((data: any) => data));
  }

  getLanguages() {
    return this.getQueryforMovies('/configuration/languages')
    .pipe(map((data: any) => data));
  }

  getDiscoverMovie() {
    return this.getQuery('/discover/movie?').pipe(
      map((data: any) => data.results)
    );
  }

  getSearchMovie(input: string) {
    return this.getQuery(`/search/movie?query=${input}`)
    .pipe(map((data: any) => data.results));
  }

  getPage(id: string) {
    return this.getQueryPage(`page=${id}`)
    .pipe(map((data: any) => data.results));
  }

  getVideo(id: string) {
    return this.getQueryVideo(`${id}`)
    .pipe(map((data: any) => data));
  }

}
