import { Component, OnInit, Input } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  //Input variable for video passed from listing
  @Input() video: any = {} as Video;
  //Input variable for video passed from listing to disable button
  @Input() result:any = {} as boolean;
  //Input variable for video passed from listing to hide/display button
  @Input() resultPl:any = {} as number;



  constructor(
    private data: UserDataServiceService
  ) { }

  ngOnInit(): void {
  }

  //Adds a video to the playlist
  addPlaylist(){
    this.data.addToPlaylist(this.video)
  }

}
