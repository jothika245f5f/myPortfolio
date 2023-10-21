import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {

  active = 0
  Experience ={
    "Title":"Experience",
    "Jobs": [{
      "Tab": "Project",
      "Name":"Verizon - MEC - 5G Edge Technology",
      "Title": "UI developer",
      "Organization": "Capgemini",
      "Date": "December 2021 - Present",
      "Description": [
        "Worked with CSS3 and bootstrap to create responsive web designs for multiple departments/pages",
        "Debugging using web developer tools on Chrome, Firefox, and Internet Explorer",
        "Interact with other developers and end users to design and implement new features throughout the framework.",
        "Fixing E2E , Develops Bugs"
      ]
  },]
  } 
    
  constructor(
    public analyticsService: AnalyticsService
  ) { }
}
