import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { RegisterComponent } from './login/register.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [

  // { path: "", 
  //   component: PagesComponent,
  //   children: [
  //     { path: "dashboard", component: DashboardComponent },
  //     { path: "progress", component: ProgressComponent },
  //     { path: "graficas", component: Graficas1Component },
  //     { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  //   ]

  // },
  
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: NoPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule], //Tuve que agregarlo, sino no cargaba
  exports: [RouterModule]
})
export class AppRoutingModule { }