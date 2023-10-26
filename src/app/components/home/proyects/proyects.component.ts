import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {

  

 

   @ViewChild('imgContainer') imgContainer : ElementRef ;


constructor(public analyticService:AnalyticsService
    
  ) { }
  
  FeatureProjects = {
    "Title":"My projects",
    "Lable" :"Self Project",
    "Projects" :[
      {
          "Title": "School Single-Page web Application",
          "Description": "A school management system is developed by Anguar, <span class='underline'>a student admission module</span> might handle student data and <span class='underline'>result module </span> displaying student marks while a <span class='underline'>registeration module</span> would store school student details.",
          "imgs": [
              "./assets/images/sclpro1.png",
              "./assets/images/sclpro2.png",
              "./assets/images/sclpro4.png",
              "./assets/images/sclproMark.png",
              
          ],
          "id":"1",
          "Technologies": [ "Angular","Html" ,"CSS", "Angular Material", "Bootstrap", "typeScript"],
          "ghLink": "https://github.com/jothika245f5f/School-Web-Application",
      },
      {
        "Title": "Social-media Application using React",
        "Description": "Social-medial web application developed by using <span class='underline'>React library.</span> It allows users to share different kinds of media, such as <span class='underline'>images and videos.</span>Implemented the functionality to <span class='underline'>create posts , delete, update and view  </span> a single posts.",
        "imgs": [
          "./assets/images/ss1.png",
          "./assets/images/ss2.png",
          "./assets/images/ss3.png"
        ],
        "ghLink":"https://github.com/jothika245f5f/Social-media",
        "id":"1",
        "Technologies": [ "React","Html" ,"CSS", "Bootstrap", "typeScript"]
    },
    {
      "Title": "Shopping cart Application",
      "Description": "A shopping cart allows a website's visitor to view  <span class='underline'>  product pages </span> and <span class='underline'>add items </span> to their basket.The visitor can <span class='underline'> review</span> all of their items and <span class='underline'>update </span> their basket (such as to add or remove items). ",
      "imgs": [
        "./assets/images/im1.png",
        "./assets/images/im2.png",
        "./assets/images/im3.png"
      ],
      "id":"1",
      "Technologies": [ "Angular","Html" ,"CSS", "Angular Material", "Bootstrap", "typeScript"]
  },
      
    
    ]
}

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
