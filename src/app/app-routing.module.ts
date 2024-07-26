import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import path from 'path';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { NoPageComponent } from './MyComponents/no-page/no-page.component';

const routes: Routes = [

  {
    component:ProfileComponent,
    path:'profile'
  },
  {
    component:TasksComponent,
    path:'tasks'
  },
  {
    component:NoPageComponent,
    path:'**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
