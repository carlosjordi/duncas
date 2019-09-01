import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCreationComponent } from './hero-creation/hero-creation.component';
import { BasicsComponent } from './basics/basics.component';


const routes: Routes = [
  {path:'', redirectTo:'basics', pathMatch:'full'},
  {path:'basics', component: BasicsComponent},
  {path:'adventure', component: HeroCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
