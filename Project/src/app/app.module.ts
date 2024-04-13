import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';
import { CHomeComponent } from './Components/chome/chome.component';
import { CLogoutComponent } from './Components/clogout/clogout.component';
import { SContactService } from './Services/scontact.service';
import { CFormSaveComponent } from './Components/cform-save/cform-save.component';

//Roustes

@NgModule({
  declarations: [
    AppComponent,
    CloginComponentComponent,
    CHomeComponent,
    CLogoutComponent,
    CFormSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [SContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
