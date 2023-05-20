import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CipherViewComponent } from './cipher-view/cipher-view.component';
import { CipherItemViewComponent } from './cipher-item-view/cipher-item-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { CipherItemCardComponent } from './cipher-item-card/cipher-item-card.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CipherViewComponent,
    CipherItemViewComponent,
    WelcomeViewComponent,
    LoginViewComponent,
    TabViewComponent,
    CipherItemCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
