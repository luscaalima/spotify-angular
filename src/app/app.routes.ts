import { AutenticadoGuard } from './guards/autenticado.guard';
import { Routes } from "@angular/router";

export const  appRotas:Routes=[
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(x=>x.PlayerModule),
        canLoad:[AutenticadoGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x=>x.LoginModule)
    }

]