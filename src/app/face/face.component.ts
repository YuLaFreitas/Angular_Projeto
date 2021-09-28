import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  urlImamgem = 'http://lorempixel.com/g/400/200/nature';
  
  constructor() {



       }

  ngOnInit(): void {
  }

}
