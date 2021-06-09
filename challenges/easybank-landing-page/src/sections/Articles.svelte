<script>
  // components
  import Card from '../components/Card.svelte';
  import Container from '../components/Container.svelte';

  // props
  const articles = [
    {image:'currency',author:'Claire Robinson', title:'Receive money in any currency with no fees', description:'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single'},
    {image:'restaurant',author:'Wilson Hutton', title:'Treat yourself without worrying about money', description:'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you'},
    {image:'plane',author:'Wilson Hutton', title:'Take your Easybank card wherever you go', description:'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you'},
    {image:'confetti',author:'Claire Robinson', title:'Our invite-only Beta accounts are now live!', description:'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site'},
  ]
</script>

  <div class="flex justify-between py-[82px] pb-[100px] lg:pb-[56px]">
    <Container>
      <div class="flex flex-col">
        <div class="text-center text-[30px] lg:text-left lg:text-[38px]">Latest Articles</div>
        <div class="grid grid-cols-1 mt-[28px] gap-[35px] lg:grid-cols-4 lg:gap-[30px]">
          {#each articles as {image, author, title, description}}
            <Card>
              <a on:click|preventDefault href="/blog/{title.toLowerCase().replace(/\s/g,'-')}" class="flex flex-col group">
                <img src="./image-{image}.jpg" alt={image} class="h-[200px] object-cover lg:h-[215px]" />
                <div class="flex flex-col items-start p-[31px] lg:px-[25px]">
                  <div class="text-gray-500 text-[9.5px] leading-[9.5px]">By {author}</div>
                  <div class="text-[15.25px] leading-[20px] mt-[11px] transition duration-200 group-hover:text-green">{title}</div>
                  <div class="text-gray-500 text-[12.6px] leading-[18px] mt-[8px]">{description} ...</div>
                </div>
              </a>
            </Card>
          {/each}
        </div>
      </div>
    </Container>
  </div>