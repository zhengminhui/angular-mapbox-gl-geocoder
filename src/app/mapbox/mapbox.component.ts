import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { DATA } from '../../assets/data/sweetgreen';

@Component({
  selector: 'app-mapbox',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
})
export class MapboxComponent implements OnInit {
  storeData: any;
  map: mapboxgl.Map;
  selectedLink: number;

  constructor() {}

  ngOnInit() {
    this.storeData = DATA.features;
    this.selectedLink = null;
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-77.034084, 38.909671], // [lng, lat]
      zoom: 14, // starting zoom
      scrollZoom: false,
    });
    this.map.on('load', e => {
      this.map.addSource('places', {
        type: 'geojson',
        data: DATA,
      });
    });

    this.storeData.forEach((marker, index) => {
      const el = document.createElement('div');
      // Add a class called 'marker' to each div
      el.className = 'marker';
      // By default the image for your custom marker will be anchored
      // by its center. Adjust the position accordingly
      // Create the custom markers, set their position, and add to map
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);

      el.addEventListener('click', e => {
        const activeItem = document.getElementsByClassName('active');
        // 1. Fly to the point
        this.flyToStore(marker);
        // 2. Close all other popups and display popup for clicked store
        this.createPopUp(marker);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        e.stopPropagation();
        this.selectedLink = index;
      });
    });
  }

  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }

  createPopUp(currentFeature) {
    console.log('createPopUp', currentFeature);
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    console.log('popUps', popUps);
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) {
      popUps[0].remove();
    }
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' + '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(this.map);
  }

  moveAndShowInfo(currentFeature, index) {
    this.flyToStore(currentFeature);
    this.createPopUp(currentFeature);
    this.selectedLink = index;
  }
}
