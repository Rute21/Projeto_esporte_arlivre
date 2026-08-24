import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incricoes',
  imports: [FormsModule],
  templateUrl: './incricoes.html',
  styleUrl: './incricoes.css',
})
export class Incricoes {

  atletaSelecionado: string = '';

  cpf: string = '';

  corridaSelecionada: string = '';

  distancia: number = 0;

  tamanhoCamiseta: string = '';

  categoria: string = 'Geral Masculino / 30-39 anos';

  termosAceitos: boolean = false;


  finalizarInscricao() {

    if (this.atletaSelecionado == '') {
      alert('Selecione o atleta.');
      return;
    }

    if (this.corridaSelecionada == '') {
      alert('Selecione a corrida.');
      return;
    }

    if (this.distancia == 0) {
      alert('Selecione a distância.');
      return;
    }

    if (this.tamanhoCamiseta == '') {
      alert('Selecione o tamanho da camiseta.');
      return;
    }

    if (!this.termosAceitos) {
      alert('Aceite os termos para continuar.');
      return;
    }

    alert('Inscrição realizada com sucesso!');

  }

}