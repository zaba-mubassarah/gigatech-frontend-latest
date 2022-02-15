import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: 'portal',
    loadChildren: () => import('./gigatech-portal/gigatech-portal.module').then(m => m.GigatechPortalModule),
  },
  {
    path: '',
    redirectTo: 'portal/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
