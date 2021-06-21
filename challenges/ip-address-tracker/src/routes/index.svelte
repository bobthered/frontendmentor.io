<script>
  // _imports
  import { onMount } from 'svelte';

  // component
  import Header from '../components/Header.svelte';
  import Map from '../components/Map.svelte';
  import Stats from '../components/Stats.svelte';

  // methods
  const getIPAddress = async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    ipAddress = data.ip;
  }
  const getStats = async () => {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_3jXsO93HdgiuhAhMMQfeZQupdsHaO&ipAddress=${ipAddress}`);
    const data = await response.json();
    stats = {
      ipAddress : data.ip,
      location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng
    }
  }

  // props ( internal )
  let ipAddress = '192.212.174.101';
  let init = false;
  let stats = {
    ipAddress: '',
    location: '',
    timezone: '',
    isp: '',
    lat: 0,
    lng: 0,
  };

  onMount(async () => {
    await getIPAddress();
    await getStats();
    init = true;
  })
</script>

<svelte:head>
  <title>IP Address Tracker - Frontendmentor.io</title>
</svelte:head>

<Header bind:ipAddress bind:init bind:stats {getStats} />
<Stats bind:stats bind:init />
<Map bind:stats />