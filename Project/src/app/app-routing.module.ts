import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHomeComponent } from './Components/chome/chome.component';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';
import { CFormSaveComponent } from './Components/cform-save/cform-save.component';

const routes: Routes = [{ path: "loggin", component: CloginComponentComponent },
{ path: "Home", component: CHomeComponent },
{ path: "Form", component: CFormSaveComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
