import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {

    constructor(private http: HttpClient) { }

    listarAtletas(): Observable<Atleta[]> {
        //const urlApi = 'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta';
        const urlApi = `http://127.0.0.1:8000/pessoa/`;
        return this.http.get<Atleta[]>(urlApi)
    }

    listarAtleta(idAtleta: number): Observable<Atleta> {
        //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;
        const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`
        return this.http.get<Atleta>(urlApi)
    }

    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        //const urlApi = 'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta';
        // return this.http.get<Atleta>(urlApi)
        const urlApi = `http://127.0.0.1:8000/pessoa/`
        return this.http.post<Atleta>(urlApi, atleta)
    }

    excluirAtleta(idAtleta: number): Observable<Atleta> {
        //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;
        const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`
        return this.http.delete<Atleta>(urlApi)
    }

    alterarAtleta(atleta: Atleta): Observable<Atleta> {
        //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`;
        const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.idpessoa}`
        return this.http.put<Atleta>(urlApi, atleta)
    }


    //CALCULO IDADE
    calcularIdade(dataNascimento: string): number {

        const nascimento = new Date(dataNascimento);

        const hoje = new Date();

        let idade = hoje.getFullYear() - nascimento.getFullYear();

        const mes = hoje.getMonth() - nascimento.getMonth();

        if (
            mes < 0 ||
            (mes === 0 && hoje.getDate() < nascimento.getDate())
        ) {
            idade--;
        }

        return idade;
    }

    calcularIMC(peso: number, altura: number): number {
        if (altura <= 0) {
            return 0;
        }
    
        return peso / (altura * altura);
    }

    classificarIMC(imc: number): string {

        if (imc < 18.5) {
            return 'Abaixo do peso';
        }
    
        if (imc < 25) {
            return 'Normal';
        }
    
        if (imc < 30) {
            return 'Sobrepeso';
        }
    
        if (imc < 35) {
            return 'Obesidade GRAU I';
        }
    
        if (imc < 40) {
            return 'Obesidade GRAU II';
        }
    
        return 'Obesidade GRAU III';
    }

}