import { SongService } from './../../../services/song.service';
import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash-es';

@Component({
  selector: 'app-tunes-search-form',
  styleUrls: ['./tunes-search-form.component.scss'],
  templateUrl: './tunes-search-form.component.html'
})


export class TunesSearchFormComponent implements OnInit {
	constructor(private songService: SongService) {}
	ngOnInit(): void {}

	getMusic(query: string): void {
    this.songService.getSongs(query);
		event?.preventDefault();
	}

	search = debounce((query: string): void => {
		this.getMusic(query)
	}, 500)
}
