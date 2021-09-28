import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadorComponent } from './calculador.component';
import {EventEmitter } from '@angular/core'


@NgModule({
  declarations: [
    CalculadorComponent
  ],
  imports: [
    CommonModule,
    EventEmitter,
    InputEvent,
    Output
  ]
})
export class CalculadorModule { }
