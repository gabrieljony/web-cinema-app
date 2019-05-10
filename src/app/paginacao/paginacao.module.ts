import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginacaoComponent } from './paginacao.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PaginacaoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    PaginacaoComponent
  ]
})
export class PaginacaoModule { }
