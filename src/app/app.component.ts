import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private elRef:ElementRef){

  }
  loader = true;
  ngAfterViewInit(): void {
   
  }

  ngOnInit(): void {
    AOS.init(); 
    setTimeout(()=>{                           
      this.loader = false;
  }, 3000);
  
  }

  

  title = 'jothikaportfolio';
 
}
