import { Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';




@Injectable({providedIn: 'root'})




export class PostsService{
    constructor(private http: HttpClient) {}

    fetchPosts(lat,lng){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('latitude',lat);
        searchParams = searchParams.append('longitude', lng);
        searchParams = searchParams.append('localityLanguage', 'en');
        return this.http
        .get< {[key: string]: Post }>('https://api.bigdatacloud.net/data/reverse-geocode-client', {params: searchParams})
        .pipe(
            map(responseData => {
                const postsArray: Post[] = [];
               postsArray.push(responseData.countryName,responseData.principalSubdivision,responseData.locality);

                return postsArray;

            }));
    }



   
  

}