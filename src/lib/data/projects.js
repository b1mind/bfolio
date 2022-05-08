import { writable } from 'svelte/store'

const data = {
  overlays: {
    name: 'Overlays',
    subTitle: 'Alerts and scenes for twitch',
    thumbnail: '/img/overlay/overlay-main-right.jpg',
    thumbnail2: '/img/overlay/overlay-overview.jpg',
    link: 'https://www.twitch.tv/b1mind',
    repo: 'https://github.com/b1mind/stream-stuff',
    techUsed: ['svelte', 'svg', 'figma', 'gsap'],
    overview: {
      title: 'Overview',
      content:
        '<p>Always evolving and creating different OBS browser layers and scenes that interact with Twitch. <p>Animations using a mix of CSS, Svelte, and GreenSock. Mostly designed and developed while live streaming and coding in public.</p>',
      img: '/img/overlay/overlay-overview.jpg',
      altText: 'img alt text',
    },

    highlight: ['Custom Alerts', 'Chat Interaction', 'Animated SVG'],

    sections: [
      {
        title: 'Alerts',
        content:
          '<p>Working with Twitch api and learning how to test and mimic alerts. Used a wrapper library ComfyJS to interface with api easier. Then using Svelte stores for state management and animation of the alerts queue.</p>',
        img: '/img/overlay/overlay-overview.jpg',
        altText: 'img alt text',
      },

      {
        title: 'Chat',
        content:
          "<p>Using showMy.chat and custom CSS to have different chats and animations for different overlays. Floating emoji's, chat theme to match design, animations for temparely displaying chat.</p>",
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'Chat example',
      },

      {
        title: 'Animation',
        content:
          '<p>Using GreenShock and SVG elements to create scene animations such as Starting and Ending and Away from keyboard. Designed using Figma.</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'Animations example',
      },
    ],
  },

  knittingpro: {
    name: 'Knitting Pro',
    subTitle: 'Dynamic components and pages',
    thumbnail: '/img/knitting/knitting-main.jpg',
    thumbnail2: '/img/knitting/knitting-overview.jpg',
    link: 'https://mysfits-challenge5.vercel.app/',
    repo: 'https://github.com/b1mind/mysfits-challenge5',
    techUsed: ['svelte', 'json'],
    overview: {
      title: 'Overview',
      content:
        '<p>Knitting Pro course website is a mock website designed by Kevin Powell and given to students as a challenge in his Demystified CSS paid course. Meant to be a CSS class project I took the chance to use SvelteKit and learn how I would handle CSS utility classes and styled components.</p>',
      img: '/img/knitting/knitting-overview.jpg',
      altText: 'Knitting Pro Website',
    },

    highlight: ['Dynamic Routing', 'Responsive CSS', 'Components and Styles'],

    sections: [
      {
        title: 'Dynamic',
        content:
          '<p>Using SvelteKit file based routing to pull data from a mock JSON response. Layouts and error defaults. Dynamic slug value to provide courses from each category. Header changes based on home/category.</p>',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'Dynamic content',
      },

      {
        title: 'Responsive',
        content:
          '<p>The goal of the challenge was to code from a design that provided three resolution to follow. Creating responsive breakpoints and utility classes to meet specifications provided.</p>',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'Show responsive website',
      },

      {
        title: 'Components',
        content:
          '<p>Building a design system using CSS utility classes and component styles. Danmic component styles based on data set values. Responsive components to display correct content for based on view port resolution.</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'Showing components',
      },
    ],
  },

  pizzaapp: {
    name: 'Pizza App',
    subTitle: 'Interactive way to make a pizza',
    thumbnail: '/img/pizza-app/pizza-main.jpg',
    thumbnail2: '/img/pizza-app/pizza-overview.jpg',
    link: 'https://b1mind.github.io/pizza-boy',
    repo: 'https://github.com/b1mind/pizza-boy',
    techUsed: ['svelte', 'svg', 'figma', 'gsap'],
    overview: {
      title: 'Overview',
      content:
        '<p>Wanted to make a fun application to learn different things. What better way than making a pizza (think python make pizza example).</p>',
      img: '/img/pizza-app/pizza-overview.jpg',
      altText: 'pizza app with draggable toppings',
    },

    highlight: ['Sprite Assets', 'Interaction', 'Price Calculation'],

    sections: [
      {
        title: 'Assets',
        content:
          '<p>Using SVG sprites to limit the requests to the user. Using smart naming conventions to allow for small code and easy component state to display correct graphics.</p>',
        img: '/img/pizza-app/pizza-main.jpg',
        altText: 'confirm pizza toppings',
      },

      {
        title: 'Interaction',
        content:
          '<p>Drag and drop animations using GreenSock and Svelte components. Allow users to drag a topping onto the pizza to add as well as click if added to remove toppings.</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'order price calculation',
      },

      {
        title: 'Calculation',
        content:
          '<p>As the user changes the size and toppings of the pizza cost will be reactively updated keeping precise track of what is ready to be ordered.</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'order price calculation',
      },
    ],
  },
}

export let projectsStore = writable(data)
