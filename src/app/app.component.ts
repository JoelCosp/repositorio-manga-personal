// Importamos las dependencias necesarias de Angular y Firebase
import { Component, inject } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore'; // Para manejar datos de Firestore
import { RouterOutlet } from '@angular/router'; // Para gestionar la navegación en la aplicación
import { collection, getDocs } from 'firebase/firestore'; // Para interactuar con colecciones y obtener documentos de Firestore
import { Observable } from 'rxjs'; // Para trabajar con flujos de datos asíncronos
import { addDoc } from 'firebase/firestore'; // Para agregar documentos a Firestore

// Componente principal de la aplicacion 
@Component({
  selector: 'app-root', // Selector HTML para colocar el componente en la pagina
  imports: [RouterOutlet], // RouterOutlet es necesario para las rutas en la aplicacion
  templateUrl: './app.component.html', // Archivo HTML
  styleUrl: './app.component.css' // Archivo CSS
})

export class AppComponent {
  title = 'ff_project_1'; // Variable para almacenar el titulo de la aplicacion
  items$: Observable<any[]>; // Observable que contiene la lista de videos de FIRESTORE
  newItem = { titulo: '', url: '' }; // Objeto para almacenar los datos del nuevo video que se va a agregar

  // El constructor es donde se inicializan los servicios y datos del componente
  constructor() {
    const firestore = inject(Firestore); // Usamos 'inject' para inyectar Firestore, el servicio de base de datos de Firebase
    const itemsCollection = collection(firestore, 'videos'); // Referenciamos la colección 'videos' en Firestore

    this.items$ = collectionData(itemsCollection); // Asignamos a 'items$' los datos de la colección 'videos' como un flujo de datos (Observable)

    this.addExampleData(firestore); this.addExampleData(firestore);
  }

  // Método asíncrono para agregar datos de ejemplo a la colección 'videos' si está vacía
  async addExampleData(firestore:Firestore) {
    const itemsCollection = collection(firestore, 'videos'); // Referenciamos la colección 'videos' de Firestore nuevamente
    const snapshot = await getDocs(itemsCollection); // Obtenemos los documentos de la colección

    // Si la colección está vacía, agregamos un video de ejemplo
    if(snapshot.empty) {
      const exampleItem =  {
        titulo: 'Video 1',
        url: 'https://www.youtube.com/watch?v=kVs1vVTLtiE',
      }
      try {
        // Agregamos el video de ejemplo a Firestore
        await addDoc(itemsCollection, exampleItem);
        alert('---> Agregado!'); // Mostramos un mensaje de éxito
      } catch (error) {
        console.log('---> No se agregó: ', error); // Si ocurre un error al agregar, lo mostramos en la consola
      }
    }
  }
}
