import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCreationComponent } from './hero-creation/hero-creation.component';


const routes: Routes = [
  {path: '', component: HeroCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
