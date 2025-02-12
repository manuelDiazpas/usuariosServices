import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'usuario', component: UsuariosComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: '**', redirectTo: '/' },
];
