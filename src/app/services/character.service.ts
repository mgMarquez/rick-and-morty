import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private readonly http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.url);
  }
}
