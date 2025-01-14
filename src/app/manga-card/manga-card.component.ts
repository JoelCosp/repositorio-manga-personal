import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-manga-card',
  standalone: true, // Declaración de componente standalone
  imports: [CommonModule], // Solo incluye módulos válidos
  templateUrl: './manga-card.component.html',
  styleUrl: './manga-card.component.css',
})
export class MangaCardComponent {
  @Input() manga: any; // Recibe los datos del manga desde el componente padre

  constructor(private mangaService: MangaService) {}

  async deleteManga(id: string) {
    try {
      await this.mangaService.deleteManga(id);
      console.log('Manga eliminado:', id);
    } catch (error) {
      console.error('Error al eliminar el manga:', error);
    }
  }
}
