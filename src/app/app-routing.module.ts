import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import path from 'path';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { NoPageComponent } from './MyComponents/no-page/no-page.component';
import { profile } from 'console';
import { FormComponent } from './MyComponents/form/form.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'form',component:FormComponent},
  {path:'tasks',component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
