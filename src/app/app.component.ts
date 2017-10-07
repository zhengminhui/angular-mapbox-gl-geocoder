import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor() {
    console.log(mapboxgl);
  }

  ngOnInit() {
    console.log(mapboxgl);
    // mapboxgl.accessToken =
    //   'pk.eyJ1IjoibWF0dHpoZW5nMjUiLCJhIjoiY2o1Y3B3YzBrMGNsZDJ3bzg1ZDBjOGxvbiJ9.HjOovjGYk7y6ExHFt3Rv2w';
    // const map = new mapboxgl.Map({
    //   container: '<your HTML element id>',
    //   style: 'mapbox://styles/mapbox/streets-v9',
    // });
  }
}
