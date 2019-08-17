import React from "react";
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { createMarker, createMarkerIcon } from "./Utils";

const BERLIN_LAT_LNG = [52.520008, 13.404954];
const ZOOM_LEVEL = 9;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.simulationMap = null;
  }

  componentDidMount() {
    this.simulationMap = L.map(this.props.id).setView(BERLIN_LAT_LNG, ZOOM_LEVEL);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.simulationMap);
    this.drawOnMap();
  }

  componentDidUpdate() {
    this.drawOnMap();
  }

  drawOnMap = () => {
    if (this.cluster) {
      this.cluster.clearLayers();
    }
    this.cluster = L.markerClusterGroup();
    JSON.parse(this.props.points).features.forEach(point => {
      let markerData = this.prepareMarkerData(point, true);
      let marker = createMarker(markerData.coords, this.simulationMap, markerData.icon, true, markerData.popupData);
      this.cluster.addLayer(marker);
    });
    this.cluster.addTo(this.simulationMap);
  };

  prepareMarkerData = entry => {
    let icon = createMarkerIcon(this.props.markerColor);
    let popupData = entry.properties.name;
    let coords = L.latLng(entry.geometry.coordinates[1], entry.geometry.coordinates[0]);
    return {
      icon: icon,
      popupData: popupData,
      coords: coords
    };
  };

  render() {
    return (
      <div className="map-container">
        <div className="map-title">
          <h3>{this.props.mapTitle}</h3>
        </div>
        <div id={this.props.id} className="map" />
      </div>
    );
  }
}

export default Map;
