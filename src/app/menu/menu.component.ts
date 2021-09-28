import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  referencias = new MenuService();
  
  labelBtn: string[] = [];
  imgRef: String[] = [];

  getAlerta(n: any){
    alert(n);
  }

  setTela(){
    let body = Component.caller.arguments.getElementByClass('corpo') as HTMLElement;

    body.innerHTML = "<p>Teste</p>"
  }
  
  getString(n: any) {
    this.labelBtn = this.referencias.getLabel();
    return this.labelBtn[n];
  }

  getImg(n: any){
    this.imgRef = this.referencias.getImagem();
    return this.imgRef[n];
  }


  constructor(private label: MenuService) {
        /*document.getElementById('menuHor').innerHTML = 
      '<div class="novidades btn button-primary"><button>{{ labelBtn[1] }}</button>'+
      +'<img [src]=\'getImg(1)\'/></div>';
      ;*/
       

   }


  ngOnInit(): void {
  }

}
