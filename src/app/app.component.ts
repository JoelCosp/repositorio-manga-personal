// Importamos las dependencias necesarias de Angular y Firebase
import { Component, inject, OnInit  } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore'; // Para manejar datos de Firestore
import { RouterOutlet } from '@angular/router'; // Para gestionar la navegación en la aplicación
import { collection, getDocs } from 'firebase/firestore'; // Para interactuar con colecciones y obtener documentos de Firestore
import { Observable } from 'rxjs'; // Para trabajar con flujos de datos asíncronos
import { addDoc } from 'firebase/firestore'; // Para agregar documentos a Firestore
import { initFlowbite } from 'flowbite'; // Para usar FLOWBITE

// Importaciones de componentes
import { MangaCardComponent } from './manga-card/manga-card.component';  // Componente de manga-card
import { CardsContainerComponent } from './cards-container/cards-container.component'; // Componente del contenedor de las cards que contienen la info de los mangas 

const GLOBAL_MATERIALS = [RouterOutlet, MangaCardComponent, CardsContainerComponent]; // RouterOutlet es necesario para las rutas en la aplicacion

// Componente principal de la aplicacion 
@Component({
  selector: 'app-root', // Selector HTML para colocar el componente en la pagina
  imports: [GLOBAL_MATERIALS], 
  templateUrl: './app.component.html', // Archivo HTML
  styleUrl: './app.component.css' // Archivo CSS
})

export class AppComponent implements OnInit {
  title = 'ff_project_1'; // Variable para almacenar el titulo de la aplicacion
  items$: Observable<any[]>; // Observable que contiene la lista de videos de FIRESTORE
  newItem = { title: '', description: '', gender: '', author: '', publication_date: '', state: '', img_url: '', qualification: '' }; // Objeto para almacenar los datos del nuevo video que se va a agregar

  ngOnInit(): void {
    initFlowbite();
  }

  // El constructor es donde se inicializan los servicios y datos del componente
  constructor() {
    const firestore = inject(Firestore); // Usamos 'inject' para inyectar Firestore, el servicio de base de datos de Firebase
    const itemsCollection = collection(firestore, 'Mangas'); // Referenciamos la colección 'videos' en Firestore

    this.items$ = collectionData(itemsCollection); // Asignamos a 'items$' los datos de la colección 'videos' como un flujo de datos (Observable)

    this.addExampleData(firestore); this.addExampleData(firestore);
  }

  // Método asíncrono para agregar datos de ejemplo a la colección 'videos' si está vacía
  async addExampleData(firestore:Firestore) {
    const itemsCollection = collection(firestore, 'Mangas'); // Referenciamos la colección 'videos' de Firestore nuevamente
    const snapshot = await getDocs(itemsCollection); // Obtenemos los documentos de la colección

    // Si la colección está vacía, agregamos un video de ejemplo
    if(snapshot.empty) {
      const exampleItem =  {
        title: 'One piece', 
        description: 'Una tripulación de piratas zarpa a la mar en busca del One Piece', 
        gender: 'Shonen', 
        author: 'Eiichirō Oda', 
        publication_date: '22/07/1997', 
        state: 'Activo', 
        img_url: 'https://pm1.aminoapps.com/8027/bf7d0192f89db68b71b72a718c2a14ebe8f158dar1-1024-1603v2_uhq.jpg', 
        qualification: '4.8'
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
