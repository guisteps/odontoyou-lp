import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { 
    window.open('/assets/guia-ortodontico.pdf', "_self")
  }

  download() {
    window.open('/assets/Cartaovirtual.pdf')
  }
}
