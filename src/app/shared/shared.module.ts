import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    ComponentsModule
  ]
})
export class SharedModule { }
