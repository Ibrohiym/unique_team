var L;
window.onload = function () {
    L.mapquest.key = '5TB5t0zArYbHozfdlkxM2Az3bONaw56G';
    var map = L.mapquest.map('map', {
        center: [53.480759, -2.242631],
        layers: L.mapquest.tileLayer('dark'),
        zoom: 12
    });
    L.marker([53.480759, -2.242631], {
        icon: L.mapquest.icons.marker({
            primaryColor: '#22407F',
            secondaryColor: '#3B5998',
            shadow: true,
            size: 'md',
            symbol: ''
        })
    })
        .bindPopup('This is Manchester!')
        .addTo(map);
}