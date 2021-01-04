import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Song } from '../../../types';

@Component({
  selector: 'app-tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss'],
  animations: [
		trigger('songAnim', [
			transition(':enter', [
				style({
					opacity: 0,
					transform: 'scale(0.85)'
				}),
				animate('0.4s ease')
			]),
			transition(':leave', [
				animate(
					'0.4s ease',
					style({
						opacity: 0,
						transform: 'scale(0.85)'
					})
				)
			])
		])
	]
})

export class TunesSongComponent implements OnInit {
  @Input() song: Song
  constructor() { }

  ngOnInit(): void {
  }

}
