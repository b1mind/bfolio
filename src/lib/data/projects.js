import { writable } from 'svelte/store'

let data = {
  twitchoverlay: {
    name: 'Twitch Overlay',
    subTitle: 'Alerts and Overlays for Twitch',
    thumbnail: 'https://picsum.photos/800/600?random=0',
    path: '/twitchoverlay',
    techUsed: ['svelte', 'obs', 'comfyjs'],
    sections: [
      {
        title: 'Overview',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=0',
        altText: 'img alt text',
      },
      {
        title: 'Challenges',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'img alt text',
      },
      {
        title: 'Solutions',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'img alt text',
      },
      {
        title: 'Highlight',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },

  websitedemo: {
    name: 'Website Demo',
    subTitle: 'A web site made with sveltekit',
    thumbnail: 'https://picsum.photos/800/600?random=1',
    path: '/websitedemo',
    sections: [
      {
        title: 'Overview',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=2',
        altText: 'img alt text',
      },
      {
        title: 'Challenges',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'img alt text',
      },
      {
        title: 'Solutions',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'img alt text',
      },
      {
        title: 'Highlight',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },

  pizzaapp: {
    name: 'Pizza App',
    subTitle: 'Interactive way to make a pizza',
    thumbnail: 'https://picsum.photos/800/600?random=3',
    path: '/pizzaapp',
    sections: [
      {
        title: 'Overview',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'img alt text',
      },
      {
        title: 'Challenges',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'img alt text',
      },
      {
        title: 'Solutions',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'img alt text',
      },
      {
        title: 'Highlight',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },
}

export let projectsStore = writable(data)
