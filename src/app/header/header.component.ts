import { Component } from '@angular/core';

import { AddMangaBtnComponent } from '../add-manga-btn/add-manga-btn.component';  // Componente de manga-card

const GLOBAL_MATERIALS = [AddMangaBtnComponent];

@Component({
  selector: 'app-header',
  imports: [GLOBAL_MATERIALS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
