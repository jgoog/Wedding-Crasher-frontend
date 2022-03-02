import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeComponent } from './qr-code/qr-code.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RestapiService } from './restapi.service';
import { AuthGuard } from './helpers/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    QRCodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
