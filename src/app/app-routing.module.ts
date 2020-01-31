import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { AuthGuardService as AuthGuard } from './auth-guard.service';
const routes: Routes = [
  { path: 'home', component: HeroesComponent, canActivate: [AuthGuard] },
  //{ path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'form', component: FormComponent , canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
