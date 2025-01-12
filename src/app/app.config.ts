// Este archivo configura los proveedores para la app de ANGULAR.
// Los PROVEEDORES definen los servicios que estaran disponibles en toda la aplicacion.

// Modulos y funciones necesarias de ANGULAR y FIRBASE
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// PROVIDERS para el uso de FIREBASE
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
// Configuracion de FIREBASE desde el archivo environment.ts
import { environment } from '../environments/environment';
// Importamos las rutas definifas en app.routes.ts 
import { routes } from './app.routes';
// Definimos la configuracion de la aplicacion ANGULAR con los proveedores necesarios 
export const appConfig: ApplicationConfig = {
  providers: [
    // Habilitamos la detección de cambios con Zone.js para optimizar el rendimiento
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Configuramos el enrutamiento de la aplicación con las rutas definidas en app.routes.ts
    provideRouter(routes),
    // Proveedor para inicializar la aplicación con Firebase, usando las credenciales del archivo environment.ts
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Proveedor para usar Firestore en la aplicación. `getFirestore()` nos da la referencia a Firestore.
    provideFirestore(() => getFirestore()),
    // Proveedor para usar Firebase Realtime Database en la aplicación. `getDatabase()` nos da la referencia a la base de datos.
    provideDatabase(() => getDatabase())
  ]
};
