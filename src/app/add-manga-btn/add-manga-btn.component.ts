import { Component } from '@angular/core';
import { MangaService } from '../services/manga.service';
import { FormsModule } from '@angular/forms';

const GLOBAL_MATERIALS = [FormsModule];

@Component({
  selector: 'app-add-manga-btn',
  imports: [FormsModule],
  templateUrl: './add-manga-btn.component.html',
  styleUrl: './add-manga-btn.component.css'
})
export class AddMangaBtnComponent {
  manga = {
    title: '',
    author: '',
    gender: '',
    publication_date: '',
    qualification: 0,
    state: '',
    img_url: '',
    description: ''
  };

  constructor(private mangaService: MangaService) {}

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Llamamos al servicio para añadir el manga
    this.mangaService.addManga(this.manga)
      .then(() => {
        console.log('Manga añadido exitosamente');
        // Puedes cerrar el modal o resetear el formulario aquí si lo deseas
      })
      .catch(error => {
        console.error('Error al añadir manga:', error);
      });
  }

  resetForm() {
    this.manga = {
      title: '',
      author: '',
      gender: '',
      publication_date: '',
      qualification: 0,
      state: '',
      img_url: '',
      description: ''
    };
  }
}
