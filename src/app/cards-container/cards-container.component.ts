import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import { MangaService } from '../services/manga.service';

// Componente para importar
import { MangaCardComponent } from '../manga-card/manga-card.component';  // Componente de manga-card

const GLOBAL_MATERIALS = [MangaCardComponent, CommonModule];

@Component({
  selector: 'app-cards-container',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})

export class CardsContainerComponent implements OnInit {
  mangas: any[] = [];  // Esta variable almacenará la lista de mangas

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {
    this.mangaService.getMangas().subscribe((data) => {
      console.log('Mangas obtenidos:', data);  // Agrega este log para verificar los datos
      this.mangas = data;  // Asigna los mangas obtenidos a la variable 'mangas'
    });
  }
}
