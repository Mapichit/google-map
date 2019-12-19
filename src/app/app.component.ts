import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostCoords } from './post-coords.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
 latlngIni = [{lat:13.7563, lng: 100.5018}]

  latlng = []

  mapClickToggle = false;

  toggleMarker = "On";



  constructor(private http: HttpClient, private postCoords: PostCoords) { }

  ngOnInit(){

      this.fetchAndDisplay(); 
  }
  

  onChooseLocation(event){
    if(this.mapClickToggle === true){
    this.latlng.push({lat: event.coords.lat, lng: event.coords.lng});

    this.postCoords.addCoords(event.coords.lat, event.coords.lng);

   
    }
  } 

  fetchAndDisplay(){
    this.postCoords.fetchCoords().subscribe(posts => {
      if(posts.length > 0){
       this.latlng = posts;
  
      }
      else{
       this.postCoords.addCoords(13.7563, 100.50187);
       this.latlng = [{lat: 13.7563, lng: 100.50187}]
      } 
     })

  }

  toggleMapClick(){
      this.mapClickToggle = !this.mapClickToggle;
      if (this.mapClickToggle === false){
        this.toggleMarker = "On";
      } else {
        this.toggleMarker ="Off";
      }
     
  }


  deletePosts(){
    this.postCoords.deleteCoords().subscribe(() => {
      this.latlng = [];
    });
  }

  receivedDeleteId($event){
    this.postCoords.deleteMarker($event).subscribe(() => {
      this.fetchAndDisplay();
    });
  }


}
