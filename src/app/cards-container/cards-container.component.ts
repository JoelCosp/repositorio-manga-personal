import { Component } from '@angular/core';

import { MangaCardComponent } from '../manga-card/manga-card.component';  // Componente de manga-card

const GLOBAL_MATERIALS = [MangaCardComponent];

@Component({
  selector: 'app-cards-container',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {

}
