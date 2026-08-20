import { Component, signal } from '@angular/core';
import { CorridaService } from '../../service/corrida/corrida-service';
import { Corrida } from '../../models/corrida';

@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {

  listaCorridas = signal<Corrida[]>([]);

  constructor(private corridaService: CorridaService) { }

  ngOnInit() {
    this.listar();
  }


  // LISTAR CORRIDAS
  listar() {

    this.corridaService.listarCorridas()
      .subscribe({

        next: (dadosCorrida: Corrida[]) => {

          this.listaCorridas.set([...dadosCorrida]);

        },

        error: (msgErro: any) => {

          console.log(msgErro);

        }

      });
  }


  // INSCREVER-SE NA CORRIDA
  inscrever(objCorrida: Corrida) {

    console.log('Corrida selecionada:', objCorrida);

    alert(`Você selecionou a corrida: ${objCorrida.descricao_corrida}`);

  }

  // EXCLUIR CORRIDA
excluir(objCorrida: Corrida) {

  if (confirm(`Deseja realmente excluir a corrida "${objCorrida.descricao_corrida}"?`)) {

    this.corridaService.excluirCorrida(objCorrida.id)
      .subscribe({

        next: () => {

          alert('Corrida excluída com sucesso!');

          this.listar();

        },

        error: (erro) => {

          console.error('Erro ao excluir corrida:', erro);

          alert('Erro ao excluir corrida.');

        }

      });

  }

}

}