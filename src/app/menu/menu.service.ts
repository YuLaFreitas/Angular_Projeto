import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { 
    
  }


  getImagem(){
   return [
      'https://img.icons8.com/fluency/48/000000/shop.png',
      'https://img.icons8.com/clouds/100/000000/tips-app.png',
      'https://img.icons8.com/fluency/48/000000/add-user-group-woman-man.png',
      'https://img.icons8.com/external-konkapp-flat-konkapp/64/000000/external-login-work-from-home-konkapp-flat-konkapp.png'
    ]
  }

  getLabel(){
   return ['Dicas', 'minhaLojinha', 'CADASTRO', 'Login'];   
  }
}
