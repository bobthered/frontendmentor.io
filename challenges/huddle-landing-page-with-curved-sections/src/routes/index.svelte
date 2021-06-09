<script>
  // components
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  // css
  import '../css/style.css';

  // sections
  import FlowingConversations from '../sections/FlowingConversations.svelte'
  import GrowTogether from '../sections/GrowTogether.svelte'
  import Hero from '../sections/Hero.svelte'
  import Ready from '../sections/Ready.svelte'
  import YourUsers from '../sections/YourUsers.svelte'
</script>

<svelte:head>
  <title>Huddle Landing Page With Curved Sections - Frontendmentor.io</title>
</svelte:head>


<main class="relative flex flex-col text-cyan">
  <Header />
  <Hero />
  <GrowTogether />
  <FlowingConversations />
  <YourUsers />
  <Ready />
  <Footer />
</main>