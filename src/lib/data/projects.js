import { writable } from 'svelte/store'

const data = {
  overlays: {
    name: 'Overlays',
    subTitle: 'Alerts and scenes for Twitch',
    thumbnail: '/img/overlay/overlay-main-right.jpg',
    thumbnail2: '/img/overlay/overlay-overview.jpg',
    link: 'https://www.twitch.tv/b1mind',
    repo: 'https://github.com/b1mind/stream-stuff',
    techUsed: ['svelte', 'svg', 'figma', 'gsap'],
    overview: {
      title: 'Overview',
      content:
        '<p>An ever evolving project. Different OBS browser layers and scenes that interact with Twitch. A mix of CSS, Svelte transitions, and GreenSock animations. </p> <p>Designed and developed while live streaming and building in public.</p>',
      img: '/img/overlay/overlay-overview.jpg',
      altText: 'starting soon scene',
    },

    highlight: ['Custom Twitch alerts', 'Chat Interaction', 'Animated SVG scenes'],

    sections: [
      {
        title: 'Alerts',
        content:
          '<p>Fully personalized alerts and chat commands using <a href="https://github.com/instafluff/ComfyJS">ComfyJS</a> to interface with Twitch api. Svelte stores allow for a easy state management alert animations and sounds.</p>',
        img: '/img/overlay/overlay-one.jpg',
        altText: 'raid alert displayed on screen',
      },

      {
        title: 'Chat',
        content:
          '<p>Custom CSS themes for <a href="https://showmy.chat">showMy.chat</a> to match interface design system. Theme to only display emotes, for floating on interface.</p>',
        img: '/img/overlay/overlay-two.jpg',
        altText: 'Chat example',
      },

      {
        title: 'Animation',
        content:
          '<p>Animated chat messages and user commands that send alerts. Combined GreenSock and SVG in Svelte for animated scenes and custom notification alerts.</p>',
        img: '/img/overlay/overlay-three.jpg',
        altText: 'Animations example',
      },
    ],

    learned: {
      title: 'Learned',
      content:
        '<p>Streaming hardware and software. The in and outs of the OBS application and how Twitch works. Using different browsers and web pages to overlay and create different scenes. How to code in front of others.</p>',
    },
  },

  knittingpro: {
    name: 'Knitting Pro',
    subTitle: 'Dynamic components and pages',
    thumbnail: '/img/knitting/knitting-main.jpg',
    thumbnail2: '/img/knitting/knitting-overview.jpg',
    link: 'https://mysfits-challenge5.vercel.app/',
    repo: 'https://github.com/b1mind/mysfits-challenge5',
    techUsed: ['svelte', 'json', 'scss', 'html'],
    overview: {
      title: 'Overview',
      content:
        '<p>Knitting Pro course website is a mock website designed by Kevin Powell and given to students as a challenge in his Demystified CSS paid course.</p> <p> Meant to be a CSS class project I took the chance to use SvelteKit and learn how I would handle CSS utility classes and styled components.</p>',
      img: '/img/knitting/knitting-overview.jpg',
      altText: 'Knitting Pro Website',
    },

    highlight: ['Dynamic Routing', 'Responsive CSS', 'Components and Styles'],

    sections: [
      {
        title: 'Dynamic',
        content:
          '<p>Using SvelteKit file based routing to pull data from a mock JSON response. Layouts and error defaults. Dynamic slug value to provide courses from each category. Header changes based on home/category.</p>',
        img: '/img/knitting/knitting-one.jpg',
        altText: 'Dynamic content',
      },

      {
        title: 'Responsive',
        content:
          '<p>The goal of the challenge was to code from a design that provided three resolution to follow. Creating responsive breakpoints and utility classes to meet specifications provided.</p>',
        img: '/img/knitting/knitting-two.jpg',
        altText: 'Show responsive website',
      },

      {
        title: 'Components',
        content:
          '<p>Building a design system using CSS utility classes and component styles. Danmic component styles based on data set values. Responsive components to display correct content for based on view port resolution.</p>',
        img: '/img/knitting/knitting-three.jpg',
        altText: 'Showing components',
      },
    ],

    learned: {
      title: 'Learned',
      content:
        '<p>How to use the new routing and layouts in SvelteKit. Using data-sets for dynamic styling components based on the value of the data. Passing url paramaters as props to get data from a JSON or request response.</p>',
    },
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
        '<p>Wanted to make a fun application to learn different things.</p> <p>What better way than making a pizza (think python make pizza example).</p>',
      img: '/img/pizza-app/pizza-overview.jpg',
      altText: 'pizza app with draggable toppings',
    },

    highlight: ['Sprite Assets', 'Interaction', 'Price Calculation'],

    sections: [
      {
        title: 'Assets',
        content:
          '<p>Using SVG sprites to limit the requests to the user. Using smart naming conventions to allow for small code and easy component state to display correct graphics.</p>',
        img: '/img/pizza-app/pizza-one.jpg',
        altText: 'confirm pizza toppings',
      },

      {
        title: 'Interaction',
        content:
          '<p>Drag and drop animations using GreenSock and Svelte components. Allow users to drag a topping onto the pizza to add as well as click if added to remove toppings.</p>',
        img: '/img/pizza-app/pizza-two.jpg',
        altText: 'order price calculation',
      },

      {
        title: 'Calculation',
        content:
          '<p>As the user changes the size and toppings of the pizza cost will be reactively updated keeping precise track of what is ready to be ordered.</p>',
        img: '/img/pizza-app/pizza-three.jpg',
        altText: 'order price calculation',
      },
    ],

    learned: {
      title: 'Learned',
      content:
        '<p> SVG sprites and how to use them in components. Using data-set to help pass naming conventions along to keep every thing in sync. Wanted to try making HTML details and summary modal for oder confermation screen.</p>',
    },
  },
}

export let projectsStore = writable(data)
