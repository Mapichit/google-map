import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coords } from './post-cords.models';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostCoords{

    constructor(private http: HttpClient) {}

    addCoords(aLat, aLng){
        const postData: Coords = {lat: aLat, lng: aLng}
        this.http
        .post<{name: string}>('https://map-project-d2522.firebaseio.com/posts.json', postData)
        .subscribe(responseData => {
        });

        
    }

    fetchCoords(){
        return this.http
        .get< {[name: string]: Coords }>('https://map-project-d2522.firebaseio.com/posts.json')
        .pipe(
          map(responseData => {
          const coordsArray: Coords[] = [];
          for (const key in responseData) {
            if(responseData.hasOwnProperty(key)){
             coordsArray.push({...responseData[key], id: key});
            }
          }
    

          return coordsArray;
        }));
    }

    deleteCoords(){
       return this.http.delete('https://map-project-d2522.firebaseio.com/posts.json')
    }

    deleteMarker(keyId: string){         
        return this.http.delete('https://map-project-d2522.firebaseio.com/posts/' + keyId +'.json');
        
    }
}