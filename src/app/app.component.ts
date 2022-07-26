import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  dato: string = "Valore Iniziale";
  dato2 = 1;
  change(){
    this.dato = 'Valore sambiato';
    this.dato2 = 42;
  }
}
