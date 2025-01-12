// Est script permite inicializar la APP en el navegador

// Importamos función para iniciar la app en el navegador
import { bootstrapApplication } from '@angular/platform-browser';
// Importamos la configuración de la app desde app.congig
import { appConfig } from './app/app.config';
// Importamos el componente raíz de la app (punto de entrada a la aplicación)
import { AppComponent } from './app/app.component';

// Inicializamos y arrancamos la app con el componente raiz y su configuración
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
