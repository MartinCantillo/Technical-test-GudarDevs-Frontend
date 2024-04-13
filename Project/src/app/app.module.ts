import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';
import { CHomeComponent } from './Components/chome/chome.component';

import { SContactService } from './Services/scontact.service';
import { CFormSaveComponent } from './Components/cform-save/cform-save.component';
import { CUpdateComponent } from './Components/cupdate/cupdate.component';
import { JwtInterceptorService } from './Services/jwt-interceptor.service';
import { AuthServiceService } from './Services/auth-service.service';


//Roustes

@NgModule({
  declarations: [
    AppComponent,
    CloginComponentComponent,
    CHomeComponent,
    CFormSaveComponent,
    CUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [SContactService, AuthServiceService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
