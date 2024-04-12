import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';

//Roustes
const appRoutes: Routes = [
  { path: "loggin", component: CloginComponentComponent },
  //{ //path: "Registrarse", component: CRegistrarseComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CloginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
