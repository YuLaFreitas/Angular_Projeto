import { FormsModule } from '@angular/forms';
import { FaceComponent } from './../face/face.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FaceComponent,
    FormsModule
  ],
  exports:[
    CadastroComponent
  ]
 
})
export class CadastroModule { }
