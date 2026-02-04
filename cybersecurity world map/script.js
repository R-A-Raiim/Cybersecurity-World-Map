const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap & Carto'
}).addTo(map);


function safe(text) {
  return text.replace(/[<>]/g, '');
}

countries.forEach(country => {
  const marker = L.marker([country.lat, country.lng]).addTo(map);

  marker.on('click', () => {
    document.getElementById('countryName').innerText = safe(country.name);
    document.getElementById('level').innerText = safe(country.level);
    document.getElementById('tech').innerText = safe(country.tech);
    document.getElementById('rank').innerText = country.rank;
    document.getElementById('uni').innerText = safe(country.uni);
    document.getElementById('agency').innerText = safe(country.agency);
  });
});
