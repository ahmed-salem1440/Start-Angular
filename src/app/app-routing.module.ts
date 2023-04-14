import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotFoudComponent } from './not-foud/not-foud.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"portfolio",component:PortfolioComponent,title:"portfolio"},
  {path:"**",component:NotFoudComponent,title:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
