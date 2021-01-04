import { Song } from './../types/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songify'
})
export class SongifyPipe implements PipeTransform {

  transform(song: Song): string {
    return song.artist + ' - ' + song.title;
  }

}
