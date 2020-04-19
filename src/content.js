const data = {
  title:
    '<span class="font-black">Recent</span> <span class="font-light">projects</span>',
  byline: 'I’m a senior project manager and passionate frontend developer',
  project: {
    headline: 'Recent projects',
  },
  projects: [
    {
      title: 'Northway',
      intro:
        'Northway is a small blog writing content related to camping and vanlife',
      desc: `VanIdea sells handmade products and accessoirs for camper vans and transporters. It focusses mainly on the VW T4 community and delivers best in class products.
      
The website is built with Nuxt in the frontend and Node in the backend, hosted on now.sh as a static site with lambda functions for the backend stuff. The cart functionality is built with the Vuex Store and with the use of the local storage the user's experience is pretty smooth`,
      image: '/northway.jpg',
      screenshot: '/northway-screenshot.png',
      url: 'https://vanidea.de',
      categories: 'Blog / Camper life',
    },
    {
      title: 'VanIdea',
      intro: `VanIdea sells handmade products and accessoirs for camper vans and transporters.`,
      desc: `It focusses mainly on the VW T4 community and delivers best in class products. The website is built with Nuxt in the frontend and Node in the backend, hosted on now.sh as a static site with lambda functions for the backend stuff. The cart functionality is built with the Vuex Store and with the use of the local storage the user's experience is pretty smooth`,
      image: '/vanidea.jpg',
      screenshot: '/vanidea-screenshot.png',
      url: 'https://vanidea.de',
      categories: 'Shop / Car parts',
    },
    {
      title: 'Rosannas',
      desc: `VanIdea sells handmade products and accessoirs for camper vans and transporters. It focusses mainly on the VW T4 community and delivers best in class products.
      
The website is built with Nuxt in the frontend and Node in the backend, hosted on now.sh as a static site with lambda functions for the backend stuff. The cart functionality is built with the Vuex Store and with the use of the local storage the user's experience is pretty smooth`,
      image: '/rosannas.jpg',
      screenshot: '/rosannas-screenshot.png',
      url: 'https://vanidea.de',
      categories: 'Website / Accomodation',
    },
    {
      title: 'Catch a hero',
      desc: `VanIdea sells handmade products and accessoirs for camper vans and transporters. It focusses mainly on the VW T4 community and delivers best in class products.
      
The website is built with Nuxt in the frontend and Node in the backend, hosted on now.sh as a static site with lambda functions for the backend stuff. The cart functionality is built with the Vuex Store and with the use of the local storage the user's experience is pretty smooth`,
      image: '/catchahero.jpg',
      screenshot: '/medinf-screenshot.png',
      url: 'https://catch-a-hero.ch',
      categories: 'Website / NPO',
    },
  ],
  about: {
    headline: 'Some words about me',
    content: `Starting out in the late 90s with HTML and CSS I fell in love with JavaScript in the past few years with the rising of frameworks like <a href="https://vuejs.org/">Vue</a> and <a href="https://svelte.dev/">Svelte</a>, which is the base for this page you are starring at, BTW. To be precise its <a href="https://sapper.svelte.dev/">Sapper</a>, the SSR framework of Svelte. If you havn't heared of it its worth checking out anyway. Working as a technical project manager at <a href="https://www.wearewondrous.com">WONDROUS</a> for over 5 years I was able to grow from an intern to the head of project management leading all technical realization projects as a director. In all those years frontend development was the one thing I loved the most. Learning this stuff myself and developing projects is the perfect compensation to my day job as a manager.`,
  },
};
export default data;
