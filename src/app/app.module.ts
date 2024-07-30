import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';
import { TasksComponent } from './MyComponents/tasks/tasks.component';
import { NoPageComponent } from './MyComponents/no-page/no-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './MyComponents/form/form.component';
import { TasksListComponent } from './MyComponents/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    TasksComponent,
    NoPageComponent,
    FormComponent,
    TasksListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };