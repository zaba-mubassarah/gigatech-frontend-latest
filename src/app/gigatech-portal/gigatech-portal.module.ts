import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
     
    ],
  },
  // { path: '', redirectTo: '/d/inventory', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GigatechPortalModule { }
