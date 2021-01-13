import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example2RoutingModule } from './example-2-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './pages/form/form.component';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    Example2RoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ]
})
export class Example2Module { }
