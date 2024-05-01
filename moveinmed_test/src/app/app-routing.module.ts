import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: 'patient',
    component: PatientComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'pageIntrouvable',
      component: Page404Component
  },
  {
      path: '**',
      redirectTo: 'landing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
