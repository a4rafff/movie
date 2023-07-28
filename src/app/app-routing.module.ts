
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { gardGuard } from './gard.guard';
import { MoviedetalisComponent } from './moviedetalis/moviedetalis.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = 
[

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", canActivate:[gardGuard], component:HomeComponent},
  {path:"trending",canActivate:[gardGuard], component:TrendingComponent},
  {path:'moviedetalis/:id',canActivate:[gardGuard], component:MoviedetalisComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
