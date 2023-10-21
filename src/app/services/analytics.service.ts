import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(private gaService:GoogleAnalyticsService,private httpClient: HttpClient) { }

  sendAnalyticEvent(action: string, category: string, label:any){
    this.gaService.event(action, category, label)
  }

  sendAnalyticPageView(path: string, title: string){
    this.gaService.pageView(path, title)
  }
  
  downloadPDF(url: string): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' };
    return this.httpClient
   .get<Blob>(url, options)
   .pipe(map((res:any) => new Blob([res], { type: 'application/pdf' })));
 }
}
