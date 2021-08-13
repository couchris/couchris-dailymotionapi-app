import { Component, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-myplaylistscreen',
  templateUrl: './myplaylistscreen.component.html',
  styleUrls: ['./myplaylistscreen.component.css']
})
export class MyplaylistscreenComponent implements OnInit {
  videos: Video[] = []
  //Used to hold result to later use to hide/show buttons    
   resultOG:number = 0;;
  constructor(private data: UserDataServiceService) { }

  //Store playlist into videos
  ngOnInit(): void {
    this.videos = this.data.getPlaylist();
  }

  //Method to clear the playlist
  clear(){
    this.videos.splice(0, this.videos.length)
  }

  //Method to check playlist if owner and title match, assign value to hide the buttons
  removeButtons(videos: Video[]){

    this.resultOG = 0;
  
    let i = 0;
    this.data.getPlaylist().forEach(v => {
      
      if( v['owner.username'] === videos[i]['owner.username'] && v['title'] === videos[i]['title']){
        this.resultOG = 1
      }
      i++
    });

    console.log(this.resultOG + "result OG")
    return this.resultOG
  }


}
