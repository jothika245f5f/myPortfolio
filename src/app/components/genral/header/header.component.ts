import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent {

  constructor(private router : Router,public analyticsService: AnalyticsService,
    
    ){

  }
 
 
  responsiveMenuVisible: Boolean = false;
  pageYPosition:any;  
  languageFormControl: FormControl= new FormControl();
  cvName: string = "";

  scroll(el:string) {
    if(document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
    } else{
      this.router.navigate(['/home']).then(()=> document.getElementById(el)?.scrollIntoView({behavior: 'smooth'}) );
    }
    this.responsiveMenuVisible=false;
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event:any) {
      this.pageYPosition=window.pageYOffset;
  }

  downloadCV(){
    
     let url = "/assets/cv/_Jothika_P_Resume_2 yr_.pdf"
      this.analyticsService.downloadPDF(url).subscribe(res => {
        const fileURL = URL.createObjectURL(res);
        window.open(fileURL, '_blank');
      })
  }

}
