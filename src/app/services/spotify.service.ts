import { SpotifyConfiguration } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  // obterUrlLogin(){
    
  //   const authEndpoint=`${SpotifyConfiguration.authEndpoint}?`;
  //   const clientId = `clientId=${SpotifyConfiguration.clientId}&`;
  //   const redirectUrl=`redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
  //   const scopes = `scopes = ${SpotifyConfiguration.scopes.join('%20')}&`;
  //   const responseType=`response_type=token&show_dialog=true`;
  //   console.log('urlLogin',authEndpoint+clientId+redirectUrl+scopes+responseType);
  //   return authEndpoint+clientId+redirectUrl+scopes+responseType;
  // }
  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    console.log(authEndpoint + clientId + redirectUrl + scopes + responseType);
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

}
