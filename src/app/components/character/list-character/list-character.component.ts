import { Component } from '@angular/core';
import { take } from 'rxjs';
import { Character } from 'src/app/model/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css'],
})
export class ListCharacterComponent {
  characters: Character[] = [];

  constructor(private service: CharacterService) {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.service
      .getAllCharacters()
      .pipe(take(1))
      .subscribe((res: any) => {
        const { info, results } = res;
        this.characters = [...results];
      });
  }
}
