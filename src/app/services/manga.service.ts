// manga.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; // Para interactuar con Firestore
import { Observable } from 'rxjs'; // Para manejar observables
import { getDocs, addDoc } from 'firebase/firestore';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root' // Este servicio estara disponible en toda la app
})
export class MangaService {

  constructor(private firestore: Firestore) {}

  // Método para obtener todos los mangas de Firebase
  getMangas(): Observable<any[]> {
    const mangasCollection = collection(this.firestore, 'Mangas');  // Referencia a la colección 'Mangas' en Firebase
    return collectionData(mangasCollection, { idField: 'id' });     // Devuelve los datos de la colección
  }

  // Metodo para añadir un manga a la bbdd
  async addManga(manga: { title: string; description: string; gender: string; author: string; publication_date: string; state: string; img_url: string; qualification: number;  }) {
    // Crea una referencia a la colección 'Mangas'
    const mangasCollection = collection(this.firestore, 'Mangas');

    try {
      // Usa `addDoc` para agregar un nuevo documento a la colección
      await addDoc(mangasCollection, manga);

      // Muestra un mensaje en la consola si se añade correctamente
      console.log('Manga añadido exitosamente:', manga);
    } catch (error) {
      // Captura cualquier error que ocurra durante el proceso
      console.error('Error al añadir el manga:', error);

      // Relanza el error para que pueda ser manejado por quien llame a esta función
      throw error;
    }
  }
}
