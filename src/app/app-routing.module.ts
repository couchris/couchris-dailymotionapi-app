import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MyplaylistscreenComponent } from './components/myplaylistscreen/myplaylistscreen.component';

const routes: Routes = [
  {path:"home", component:HomescreenComponent},
  {path:"playlist", component:MyplaylistscreenComponent},
  {path:"**", component:HomescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
