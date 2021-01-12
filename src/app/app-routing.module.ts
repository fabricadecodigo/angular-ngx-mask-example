import { FormComponent } from './example-1/pages/form/form.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'example-1', component: FormComponent },
  { path: 'example-2', loadChildren: () => import('./example-2/example-2.module').then(m => m.Example2Module) },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
