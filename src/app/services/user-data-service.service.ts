import { Injectable } from '@angular/core';
import Video from '../models/Video';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  //Create array for playlist
  playlist: any[] = [];
  constructor() { }

  //Method to retrieve playlist of type video
  getPlaylist(): Video[]{

    return this.playlist;
  }

  //Method to push a video to the playlist
  addToPlaylist(video: Video){
    this.playlist.push(video);
  }
  
}
