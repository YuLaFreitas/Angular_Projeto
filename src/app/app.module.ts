import { CalculadorComponent } from './calculador/calculador.component';
import { MenuService } from './menu/menu.service';
import { FaceModule } from './face/face.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastroComponent,
    CalculadorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaceModule,
    FormsModule    
  ],
  providers: [
    MenuService,
    CadastroComponent,
    CalculadorComponent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
