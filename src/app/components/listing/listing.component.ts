import { Component, OnInit, Input } from '@angular/core';
import Video from 'src/app/models/Video';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  //Input for the fetched videos from parent
  @Input() listOfVideos: Video[] = [] 
  //Hold result to pass down to video to disable buttons
  result:any = {} as number;
  //Hold result from playylist component to pass down do video to hide/remove buttons
  @Input() result2:any = {} as number;



  constructor(private data: UserDataServiceService) { }

  ngOnInit(): void {

  }

  //Method to check playlist if owner and title match given a video, assign value to disable the buttons
  checkIfAdded(video: Video):number{


  this.result = 0;

    this.data.getPlaylist().forEach(v => {
      if( v['owner.username'] === video['owner.username'] && v['title'] === video['title']){
        this.result = 1
      }
    });

    console.log(this.result)
    return this.result
  }

}
