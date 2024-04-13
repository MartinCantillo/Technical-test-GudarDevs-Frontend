import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHomeComponent } from './Components/chome/chome.component';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';
import { CFormSaveComponent } from './Components/cform-save/cform-save.component';
import { CUpdateComponent } from './Components/cupdate/cupdate.component';
import { ContactGuardGuard } from './Guard/contact-guard.guard';


const routes: Routes = [{ path: "loggin", component: CloginComponentComponent },
{ path: "Home",  canActivate: [ContactGuardGuard], component: CHomeComponent },
{ path: "Form",  canActivate: [ContactGuardGuard], component: CFormSaveComponent },
{ path: "Update",  canActivate: [ContactGuardGuard],component: CUpdateComponent },
{ path: "",  canActivate: [ContactGuardGuard],component: CloginComponentComponent }]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
