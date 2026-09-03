import { Component,ChangeDetectorRef } from '@angular/core';
import { Atleta } from '../../models/Atleta';

import { AtletaService } from '../../service/atleta-service';
import { Router } from '@angular/router';

import { signal } from '@angular/core'


@Component({
  selector: 'app-lista-atleta',
  imports: [],
  templateUrl: './lista-atleta.html',
  styleUrl: './lista-atleta.css',
})
export class ListaAtleta {

    //listaAtletas: Atleta[] = [];
    listaAtletas = signal<Atleta[]>([]);
  
    constructor(
      private listaService: AtletaService,
      private router: Router,
      private cdr: ChangeDetectorRef 

      ) {}
  
    ngOnInit(){
      this.listar();
    }
  
    listar(){
      this.listaService.listarAtletas()
      .subscribe({
        next: (dadosAtletas: Atleta[]) => {
          //this.listaAtletas = [...dadosAtletas].sort((a, b) => a.nome.localeCompare(b.nome));
            this.listaAtletas.set([...dadosAtletas].sort((a,b) =>
             a.nome.localeCompare(b.nome)))

             this.cdr.detectChanges()
        },
        error: (msgErro: any) => {
          console.log("Erro ao listar Atletas", msgErro);
        }
      })

    }
  
    excluir(id: number) {
      if(confirm("Deseja Excluir o Atleta?")){
        this.listaService.excluirAtleta(id)
        .subscribe({
          next: (resposta)=> {
            console.log("Excluído com Sucesso!!", resposta)
            this.listar()
          },
          error:(msgErro)=>{
            console.log("Erro ao listar Atletas", msgErro)
          }
        })
      }
    }
     

    calcularIdade(dataNascimento: string){
      return this.listaService.calcularIdade(dataNascimento)
    }
   
    carregaDadosAtletaForm(atleta: Atleta) {
      this.router.navigate(['/cadastroAtleta', atleta.idpessoa])
      
    }
   
    calcularIMC(peso: number, altura: number){
      return this.listaService.calcularIMC(peso, altura);
  }
  
    classificarIMC(peso: number, altura: number){
      const imc = this.calcularIMC(peso, altura);
      return this.listaService.classificarIMC(imc);
  }

  }
  