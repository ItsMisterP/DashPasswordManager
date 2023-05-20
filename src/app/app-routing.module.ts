import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

const routes: Routes = [
  { path: '', component: WelcomeViewComponent },
  { path: 'login', component: LoginViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
