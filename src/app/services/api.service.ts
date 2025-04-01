import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/env.dev';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly host: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public get(path: string, options?: any): Observable<any> {
    return this.http.get(`${this.host}${path}`, options);
  }

  public post(path: string, body: any, options?: any): Observable<any> {
    return this.http.post(`${this.host}${path}`, body, options);
  }

  public put(path: string, body: any, options?: any): Observable<any> {
    return this.http.put(`${this.host}${path}`, body, options);
  }

  public delete(path: string, options?: any): Observable<any> {
    return this.http.delete(`${this.host}${path}`, options);
  }
}
