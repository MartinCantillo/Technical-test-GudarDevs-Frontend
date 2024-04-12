import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHomeComponent } from './Components/chome/chome.component';
import { CloginComponentComponent } from './Components/clogin-component/clogin-component.component';

const routes: Routes = [{ path: "loggin", component: CloginComponentComponent },
{ path: "Home", component: CHomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
