let bt_had1 = document.querySelector('.wer_im');
let map_btn = document.querySelector('.map_btn')
let map_btn_container = document.querySelector('.map_btn_container');
let map_container = document.querySelector('#map');
let a = 0

bt_had1.addEventListener('click', function () {
    if (a > 0) {
        map_btn_container.style.display = 'none';
        a = 0
        
    } else {
        map_btn_container.style.display = 'flex';
        a += 1
    }
    
})

map_btn.addEventListener('click', function (){
    map_container.style.display = 'block'
    map_btn.style.display = 'none'

    navigator.geolocation.getCurrentPosition(function(pos) {
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        let map = new OpenLayers.Map('map')
        let map_layer = new OpenLayers.Layer.OSM()
        let fromProj = new OpenLayers.Projection('EPSG:4326')
        let toProj = new OpenLayers.Projection('EPSG:900913')
        let position = new OpenLayers.LonLat(lon, lat).transform(fromProj, toProj)
        let zoom = 18
        map.addLayer(map_layer)
        map.setCenter(position, zoom)

    })
})