import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroCreationComponent } from './hero-creation/hero-creation.component';
import { BasicsComponent } from './basics/basics.component';
import { VersionComponent } from './version/version.component';


const routes: Routes = [
  {path:'', redirectTo:'basics', pathMatch:'full'},
  {path:'basics', component: BasicsComponent},
  {path:'version', component: VersionComponent},
  {path:'adventure', component: HeroCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
