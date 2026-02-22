import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Builder} from "../../Models/builder";
import {ExpertiseStats} from "../../Models/expertise-stats";
import {YearsMaxMin} from "../../Models/years-max-min";


@Injectable({
  providedIn: 'root'
})
export class BuilderService {

  private baseUrl = 'http://localhost:8053/builder';

  constructor(private http: HttpClient) { }

  // CREATE
  createBuilder(builder: Builder): Observable<Builder> {
    return this.http.post<Builder>(`${this.baseUrl}/`, builder);
  }

  // GET BY ID
  getBuilderById(id: any): Observable<Builder> {
    return this.http.get<Builder>(`${this.baseUrl}/id/${id}`);
  }


  getByNationality(nationality: string): Observable<Builder[]> {
    return this.http.get<Builder[]>(`${this.baseUrl}/nationality/${nationality}`);
  }


  getByExpertise(expertise: string): Observable<Builder[]> {
    return this.http.get<Builder[]>(`${this.baseUrl}/expertise/${expertise}`);
  }


  updatePrice(id: number, price: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/price/${id}/${price}`, {});
  }


  getAll(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?page=${page}&size=${size}`);
  }

  getExpertiseStats(expertise: string): Observable<ExpertiseStats> {
    return this.http.get<ExpertiseStats>(
      `${this.baseUrl}/stats/${expertise}`
    );
  }

  getYearsStats(): Observable<YearsMaxMin> {
    return this.http.get<YearsMaxMin>(
      `${this.baseUrl}/years`
    );
  }

  getMostNationality(): Observable<string> {
    return this.http.get(
      `${this.baseUrl}/nations`,
      { responseType: 'text' }
    );
  }

  deleteBuilder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
