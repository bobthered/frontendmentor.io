<script>
  // _imports
  import { onMount } from 'svelte';

  // components
  import Section from '../components/Section.svelte';

  // props ( external )
  export let stats;

  // props ( internal )
  let elem;
  let Leaflet;
  let map;
  let marker;
  let icon;

  // props ( dynamic )
  $: if (stats.lat !== 0) {
    map.setView([stats.lat, stats.lng], 13);
    marker.setLatLng([stats.lat, stats.lng]);
  }

  onMount(async() => {
    const response = await import('leaflet');
    Leaflet = await response.default;
    icon = Leaflet.icon({
      iconUrl: './icon-location.svg',
      iconSize: [46, 56],
      iconAnchor:[23,56]
    });
    map = Leaflet.map(elem);
    marker = Leaflet.marker([0,0], {icon}).addTo(map);
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);
  });
</script>

<Section padding="" class="flex-grow">
  <div bind:this={elem} class="h-full">
    
  </div>
</Section>