// manga.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; // Para interactuar con Firestore
import { Observable } from 'rxjs'; // Para manejar observables
import { getDocs, addDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private firestore: Firestore) {}

  // Método para obtener todos los mangas de Firebase
  getMangas(): Observable<any[]> {
    const mangasCollection = collection(this.firestore, 'Mangas');  // Referencia a la colección 'Mangas' en Firebase
    return collectionData(mangasCollection, { idField: 'id' });     // Devuelve los datos de la colección
  }
}
