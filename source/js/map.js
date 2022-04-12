const mapBlock = document.querySelector('.js-map');
const coords = {
  lat: 59.938635,
  lng: 30.323118,
};
// создаем карту
const map = L.map(mapBlock);

// кастомная иконка главного маркера
let myIcon = L.icon({
  iconUrl: 'img/map/map-marker.svg',
  iconSize: [36, 36],
});

let marker = L.marker(
  coords,
  {
    icon: myIcon
  }
);

map.setView(coords, 14);

// добавляем слои карты с openstreetmap
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// добавляем маркер на карту
marker.addTo(map);
