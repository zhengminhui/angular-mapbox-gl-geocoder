import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../environments/environment';
import { DATA } from '../../assets/data/sweetgreen';
// import { distance } from '@turf/turf';

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

  constructor() {
  }

  ngOnInit() {
    this.storeData = DATA.features;
    this.selectedLink = null;
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-77.034084, 38.909671], // [lng, lat]
      zoom: 14, // starting zoom
      scrollZoom: true,
    });
    this.map.on('load', e => {
      this.map.addSource('places', {
        type: 'geojson',
        data: DATA,
      });
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        bbox: [-77.210763, 38.803367, -76.853675, 39.052643],
      });
      this.map.addControl(geocoder, 'top-left');
      this.map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [], // Notice that initially there are no features
        },
      });
      this.map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#007cbf',
          'circle-stroke-width': 3,
          'circle-stroke-color': '#fff',
        },
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
        this.flyToStore(marker);
        this.createPopUp(marker);
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
    const popUps = document.getElementsByClassName('mapboxgl-popup');
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
