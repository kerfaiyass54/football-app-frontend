import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PlayerDTO} from "../../core/models/player.model";
import {Player} from "../../Models/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = 'http://localhost:8051/player';

  constructor(private http: HttpClient) {}

  // CREATE
  createPlayer(player: PlayerDTO): Observable<Player> {
    return this.http.post<Player>(`${this.baseUrl}/`, player);
  }

  // GET BY ID
  getPlayerById(id: string): Observable<PlayerDTO> {
    return this.http.get<PlayerDTO>(`${this.baseUrl}/${id}`);
  }

  // GET BY NAME
  getPlayerByName(name: string): Observable<PlayerDTO> {
    return this.http.get<PlayerDTO>(
      `${this.baseUrl}/name/${encodeURIComponent(name)}`
    );
  }

  // GET BY NATIONALITY
  getPlayersByNationality(nationality: string): Observable<PlayerDTO[]> {
    return this.http.get<PlayerDTO[]>(
      `${this.baseUrl}/nationality/${nationality}`
    );
  }

  // UPDATE
  updatePlayer(id: string, player: PlayerDTO): Observable<Player> {
    return this.http.put<Player>(`${this.baseUrl}/${id}`, player);
  }

  // DELETE
  deletePlayer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllPlayers(size: number, page: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/?size=${size}&page=${page}`
    );
  }


  getHighestPrice(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/highest`);
  }
}
