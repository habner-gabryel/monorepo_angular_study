import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    itemFlag = false;
    mostrarTitulo = false;

    atualizaItemFlag(valor :boolean){
      this.itemFlag = valor;
    }

    submit(){
      console.log("Clickado");
    }
}
