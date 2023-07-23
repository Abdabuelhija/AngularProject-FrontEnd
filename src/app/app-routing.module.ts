import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Router } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
  path: 'about', component: AboutComponent
  },
    {
      path:'profile', component:ProfileComponent,
      children:[
        {path:'', pathMatch:'full',redirectTo:'login'},
        {path:'login',component:LoginComponent},
        { path :'userdetails/:name/:mail/:gender/:birthDate/:userimg', component:UserDetailsComponent},
        {path:'register',component:RegisterComponent}
      ]
    },
  
    {
      path :'catalog', component:CatalogComponent
    }, 
    {
      path :'cart', component:CartComponent
    },
    {
      path:'**', component: PageNotFoundComponent
      },
  ];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

