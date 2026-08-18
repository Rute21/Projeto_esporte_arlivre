import { Component, OnInit } from '@angular/core';
import { Atleta } from '../../models/Atleta';
import { AtletaService } from '../../service/atleta-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-atleta',
  imports: [],
  templateUrl: './lista-atleta.html',
  styleUrl: './lista-atleta.css',
})
export class ListaAtleta implements OnInit {

    listaAtletas: Atleta[] = [];
  
    constructor(
      private listaService: AtletaService,
      private router: Router
    ) {}
  
    ngOnInit(): void {
      this.listar();
    }
  
    listar(): void {
      this.listaService.listarAtletas().subscribe({
        next: (dadosAtletas: Atleta[]) => {
          this.listaAtletas = [...dadosAtletas].sort((a, b) =>
            a.nome.localeCompare(b.nome)
          );
  
          console.table(this.listaAtletas);
        },
        error: (msgErro: any) => {
          console.log("Erro ao listar Atletas", msgErro);
        }
      });
    }
  
    // Adicione este método para tratar a exclusão
    excluir(id: number) {
      console.log('Excluir atleta com id:', id);
      // Adicione aqui a chamada para o seu service (ex: this.listaService.deletar(id)...)
    }
  
    // Adicione este método para carregar o formulário de alteração
    carregaDadosAtletaForm(atleta: Atleta) {
      console.log('Carregar dados do atleta:', atleta);
      // Adicione aqui a lógica de navegação ou edição
    }
  }
  