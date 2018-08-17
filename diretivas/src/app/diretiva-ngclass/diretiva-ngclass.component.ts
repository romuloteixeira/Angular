import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent implements OnInit {

  like: boolean = false;
  dislike: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickLike(){
    this.like = !this.like;

    if(this.like){
      this.dislike = false;
    }
  }

  onClickDislike(){
    this.dislike = !this.dislike;
    
    if(this.dislike){
      this.like = false;
    }
  }

}
