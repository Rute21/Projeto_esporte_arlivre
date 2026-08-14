import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  //DECLARANDO ATRIBUTOS
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

//DECLARAÇÃO DE FUNÇÕES
exibirDados(){
  console.log(this.nome, this.cpf, this.sexo, this.cep,
    this.uf, this.ruaLogradouro, this.bairro, this.cidade)
}
  limparDados(){
    this.nome = ''
    this.cpf = 0
    this.sexo = ''
    this.cep = 0
    this.uf = ''
    this.ruaLogradouro = ''
    this.bairro = ''
    this.cidade =''
  }

}
