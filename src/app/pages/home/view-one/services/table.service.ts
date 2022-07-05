import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {}

  /**
   * GetDataFromGitHub
   */
  public  GetDataFromGitHub(): Observable<any[]> {
    const url = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json';
    const test = 'https://jsonplaceholder.typicode.com/posts'
      return this.http.get<any[]>(
        url
      );
  }
}
