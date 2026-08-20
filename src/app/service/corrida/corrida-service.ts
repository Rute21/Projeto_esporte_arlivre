import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/corrida';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {

  constructor(private http: HttpClient) { }


  // SALVAR CORRIDA
  salvarCorrida(corrida: Corrida): Observable<Corrida> {

    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    return this.http.post<Corrida>(urlAPi, corrida);
  }


  // LISTAR TODAS AS CORRIDAS
  listarCorridas(): Observable<Corrida[]> {

    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    return this.http.get<Corrida[]>(urlAPi);
  }


  // LISTAR UMA CORRIDA PELO ID
  listarCorrida(idCorrida: Number): Observable<Corrida> {

    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.get<Corrida>(urlAPi);
  }


  // EXCLUIR CORRIDA
  excluirCorrida(idCorrida: Number): Observable<Corrida> {

    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.delete<Corrida>(urlAPi);
  }


  // ALTERAR CORRIDA
  alterarCorrida(corrida: Corrida): Observable<Corrida> {

    const urlAPi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    return this.http.put<Corrida>(urlAPi, corrida);
  }

}