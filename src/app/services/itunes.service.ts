import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class iTunesService {
	// settings
  private limit: number = 5;
  private url: string = `
		https://itunes.apple.com/search
			?term=%QUERY%
			&entity=musicTrack
			&limit=${this.limit}
	`;

	// init
	constructor(private httpClient: HttpClient) {}

	getData(query: string) {
    const url: string = this.url
      .replace('%QUERY%', encodeURI(query))
      .replace(/\s/g, '');

    return this.sendRequest(url);
	}

	sendRequest(url: string) {
    return this.httpClient.get(url);
	}
}
