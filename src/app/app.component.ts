import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {}

  ngOnInit() {
    console.log(mapboxgl);
    mapboxgl.accessToken = environment.mapbox.accessToken;
    // const map = new mapboxgl.Map({
    //   container: '<your HTML element id>',
    //   style: 'mapbox://styles/mapbox/streets-v9',
    // });
  }
}
