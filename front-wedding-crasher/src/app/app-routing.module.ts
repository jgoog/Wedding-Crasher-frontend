import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component: RegisterComponent
  },
  {
  path:"login",
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
