import { Component, Input } from '@angular/core';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.css'],
})
export class ItemCharacterComponent {
  @Input() character!: Character;
}
