import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notes} from '../interface';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(private http: HttpClient) { }

  createNotes(notes: Notes): Observable<any> {
    return this.http.post(`${environment.firebaseDataBase}/notes.json`, notes)
      .pipe(map((response: any) => {
        return {
          ...notes,
          id: response.name
        };
      }));
  }
  getBooks(): Observable<any> {
    return this.http.get(`${environment.firebaseDataBase}/books.json`).pipe(map(res => res['-MLlVDIEpcEOR8Lg8kw8']));
  }

  getNotes(): Observable<any> {
    return this.http.get(`${environment.firebaseDataBase}/notes.json`)
      .pipe(map((response: { [key: string]: any }) => {
      return Object
        .keys(response)
        .map(key => ({
          ...response[key],
          id: key
        }));
    }));
  }
  patch(id: string, objChanged?: any): Observable<any> {
    return this.http.patch(`${environment.firebaseDataBase}/notes/${id}.json`, objChanged);
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseDataBase}/notes/${id}.json`);
  }
}
