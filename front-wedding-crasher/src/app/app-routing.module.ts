import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QRCodeComponent } from './qr-code/qr-code.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path:"",
    component: RegisterComponent
  },
  {
  path:"login",
  component: RegisterComponent
},
{
  path:'qr',
  component: QRCodeComponent,
  // canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
