import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import Video from '../models/Video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyMotionServiceService {

  constructor(private http: HttpClient) { }

 //Fetching videos from API
  getVideosFromApi(query: string): Observable<Video[]>{
return this.http.get<Video[]>("https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=" + query)
  }
}
