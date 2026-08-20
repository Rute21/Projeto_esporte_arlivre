import { Routes } from '@angular/router';

import { AtletaComponent } from './component/atleta-component/atleta-component';

import { HomeComponent } from './component/home-component/home-component';

import { CadastroCorrida } from './component/cadastro-corrida/cadastro-corrida';

import { ListaAtleta } from './component/lista-atleta/lista-atleta';

import { CorridaListaComponent } from './component/corrida-lista-component/corrida-lista-component';

export const routes: Routes = [

    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
        
    },

    {
        path:"home",
        component: HomeComponent,
    },

    {
        path:"cadastroAtleta/:id",
        component: AtletaComponent,
    },

    {
        path:"cadastrocorrida",
        component:CadastroCorrida,
    },

    {
        path:"listaAtleta",
        component:ListaAtleta,
    },

    {
        path:"listacorrida",
        component:CorridaListaComponent,
    }

];
