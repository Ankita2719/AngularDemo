import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isFB:boolean=true;
  isTwit:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleFB(){
    this.isFB=!this.isFB;
    this.isTwit=!this.isTwit;
  }

}
