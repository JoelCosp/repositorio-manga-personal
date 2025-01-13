import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const GLOBAL_MATERIALS = [CommonModule];

@Component({
  selector: 'app-manga-card',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './manga-card.component.html',
  styleUrl: './manga-card.component.css'
})

export class MangaCardComponent {
  @Input() manga: any;  // Recibe los datos del manga desde el componente padre
}
