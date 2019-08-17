import L from "leaflet";

export const createMarker = (coords, map, icon, withPopup = false, popupData = null) => {
  let marker = L.marker(coords, {
    icon: icon
  });
  if (withPopup) {
    marker.bindPopup(popupData);
  }
  return marker;
};

export const createMarkerIcon = color => {
  let icon = new L.Icon({
    iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41]
  });
  return icon;
};
