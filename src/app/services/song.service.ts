import { Injectable, Output, EventEmitter } from '@angular/core';
import { Song, SongFromITunes } from '../types';
import { iTunesService } from './itunes.service';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  @Output() newSongsHaveArrived: EventEmitter<any> = new EventEmitter();

  private songs: Song[] = [];

	constructor(private iTunes: iTunesService) {}

  public getSongs(query: string) {


    if (query) {
      const newLocal = this.iTunes.getData(query).subscribe(
        (data: any) => {
          this.songs = data.results.filter(
            (song: SongFromITunes) => song.kind === 'song'
          ).map((song: SongFromITunes) => this.extractData(song));


          this.newSongsHaveArrived.emit(this.songs);

        },
        (error: any) => console.error(error),
        () => console.info('done')
      );
    }
  }

  /**
   * extractData
   */
  public extractData({
    trackId: id,
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName: title,
    collectionName: album

  }: SongFromITunes): Song {
    return {id, artist, audioFile, artwork, title, album} as Song;


  }
}
