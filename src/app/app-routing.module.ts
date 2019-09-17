import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';


const routes: Routes = [

  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "progress", component: ProgressComponent },
  { path: "graficas", component: Graficas1Component },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: NoPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }