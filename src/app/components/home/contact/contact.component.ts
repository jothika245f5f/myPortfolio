import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    public analyticsService: AnalyticsService
  ) { }

}
