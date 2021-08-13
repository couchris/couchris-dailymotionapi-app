import { Component, OnInit } from '@angular/core';
import { DailyMotionServiceService } from 'src/app/services/daily-motion-service.service';
import Video from 'src/app/models/Video';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
//Store fetched videos
videos: Video[] = []

  constructor(private data: DailyMotionServiceService) { }

  ngOnInit(): void {
      
  }

  //Method to fetch videos from api, but pass a string value for the users search
  videoSearch(search: string){
    this.data.getVideosFromApi(search).subscribe((data: any) =>{

      this.videos = data['list'];
      console.log(this.videos)

    });

  }

  
}
