import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tela-cadastro', component: TelaCadastroComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
