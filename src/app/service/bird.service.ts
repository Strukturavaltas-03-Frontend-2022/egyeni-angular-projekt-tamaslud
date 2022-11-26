import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bird } from '../model/bird';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  apiUrl: string = environment.apiUrl;
  entityName: string = 'birds'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Bird[]> {
    return this.http.get<Bird[]>(`${this.apiUrl}${this.entityName}`);
  }

  get(id: number): Observable<Bird> {
    return this.http.get<Bird>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(
      `${this.apiUrl}${this.entityName}`, bird);
  }

  update(bird: Bird): Observable<Bird> {
    return this.http.patch<Bird>(
      `${this.apiUrl}${this.entityName}/${bird.id}`, bird);
  }

  delete(bird: Bird): Observable<Bird> {
    return this.http.delete<Bird>(
      `${this.apiUrl}${this.entityName}/${bird.id}`
    );
  }

}
