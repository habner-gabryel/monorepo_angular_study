import { Component, inject, Input, input } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    private enviaFormularioService = inject(EnviaFormularioService);

    itemFlag = false;
    mostrarTitulo = true;
    nome = "Habner";
    lista = [
      {id: "1", nome: "Boleto"}, {id: "2", nome: "Cartão"}, {id: "3", nome: "Pix"}
    ];

    @Input() minhaPropDeFora!: string;


    atualizaItemFlag(valor :boolean){
      this.itemFlag = valor;
    }

    submit(){
      this.enviaFormularioService.enviaInformacaoParaBackend("Dados");
    }
}
