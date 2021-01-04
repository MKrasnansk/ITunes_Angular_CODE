import { Component, OnInit } from '@angular/core';
import { SongService } from './../../../services/song.service';
import { Song } from './../../../types/index';


@Component({
  selector: 'app-tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit {

  songs: Song[];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.newSongsHaveArrived.subscribe((data: Song[]) => {
      this.songs = data
    });

  }
}
