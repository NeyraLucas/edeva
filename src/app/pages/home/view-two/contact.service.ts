import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from 'src/app/models/contact.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'https://www.mockachino.com/ef1af0cd-3f4c-42/contact';

  constructor(private http: HttpClient) {}

  /**
   * PostContactForm
   */
  public PostContactForm(data: IContact): Observable<IContact> {
    return this.http.post<IContact>(this.url, data);
  }
}
