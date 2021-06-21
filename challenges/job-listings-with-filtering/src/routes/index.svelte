<script>
  // components
  import Filters from '$components/Filters.svelte';
  import Header from '$components/Header.svelte';
  import Listings from '$components/Listings.svelte';

  // props ( internal )
  let listings = [
    {company:'Photosnap',position:'Senior Frontend Developer',isNew:true,isFeatured:true,age:'1d ago',employment:'Full Time',location:'USA only',tags:['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']},
    {company:'Manage',position:'Fullstack Developer',isNew:true,isFeatured:true,age:'1d ago',employment:'Part Time',location:'Remote',tags:['Fullstack', 'Midweight', 'Python', 'React']},
    {company:'Account',position:'Junior Frontend Developer',isNew:true,isFeatured:false,age:'2d ago',employment:'Part Time',location:'USA only',tags:['Frontend', 'Junior', 'React', 'Sass', 'JavaScript']},
    {company:'MyHome',position:'Junior Frontend Developer',isNew:false,isFeatured:false,age:'5d ago',employment:'Contract',location:'USA only',tags:['Frontend', 'Junior','CSS','JavaScript']},
    {company:'Loop Studios',position:'Software Engineer',isNew:false,isFeatured:false,age:'1w ago',employment:'Full Time',location:'Worldwide',tags:['Fullstack', 'Midweight', 'JavaScript', 'Sass', 'Ruby']},
    {company:'FaceIt',position:'Junior Backend Developer',isNew:false,isFeatured:false,age:'2w ago',employment:'Full Time',location:'UK only',tags:['Backend', 'Junior', 'Ruby', 'RoR']},
    {company:'Shortly',position:'Junior Developer',isNew:false,isFeatured:false,age:'2w ago',employment:'Full Time',location:'Worldwide',tags:['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript']},
    {company:'Insure',position:'Junior Frontend Developer',isNew:false,isFeatured:false,age:'2w ago',employment:'Full Time',location:'USA only',tags:['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass']},
    {company:'Eyecam Co.',position:'Full Stack Engineer',isNew:false,isFeatured:false,age:'3w ago',employment:'Full Time',location:'Worldwide',tags:['Fullstack', 'Midweight', 'JavaScript', 'Django', 'Python']},
    {company:'The Air Filter Company',position:'Front-end Dev',isNew:false,isFeatured:false,age:'1mo ago',employment:'Part Time',location:'Worldwide',tags:['Frontend', 'Junior', 'React', 'Sass', 'JavaScript']},
  ]
  let filters = [];

  // props ( dynamic )
  $: filteredListings = filters.length === 0 ? listings : 
    [...listings].filter(listing=>filters.every(f=>listing.tags.includes(f)));
</script>

<svelte:head>
  <title>Job Listings with Filtering - Frontendmentor.io</title>
</svelte:head>

<Header/>
<Filters bind:filters />
<Listings listings={filteredListings} bind:filters />