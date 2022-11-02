import { SpotifyConfiguration } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi:Spotify.SpotifyWebApiJs=null;



  constructor() {
    this.spotifyApi = new Spotify();
   }


  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    // console.log(authEndpoint + clientId + redirectUrl + scopes + responseType);
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  obtertokenCallback(){
    console.log(window.location.hash);
    if(!window.location.hash){
      return '';
    }
    const params = window.location.href.substring(1).split('&')
    return params[0].split('=')[1];
  }

  definirAcessToken(token:string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token',token);
    this.spotifyApi.skipToNext();
  }

}
