import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


@NgModule({
declarations:[
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent,
    BreadcrumbsComponent
],
exports:[
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent,
    BreadcrumbsComponent
]
})
export class SharedModule { }