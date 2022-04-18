import { writable } from 'svelte/store'

const data = {
  overlays: {
    name: 'Overlays',
    subTitle: 'Alerts and Overlays For Twitch',
    thumbnail: '/img/overlay/overlay-main-right.jpg',
    thumbnail2: '/img/overlay/overlay-start.jpg',
    link: 'https://www.twitch.tv/b1mind',
    repo: 'https://github.com/b1mind/stream-stuff',
    techUsed: ['svelte', 'svg'],
    overview: {
      title: 'Overview',
      content:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
      img: 'https://picsum.photos/300/300?random=0',
      altText: 'img alt text',
    },

    sections: [
      {
        title: 'Challenges',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        list: ['item 1', 'item 2', 'item 3', 'item 4'],
      },

      {
        title: 'Solutions',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'img alt text',
      },

      {
        title: 'Highlight',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },

  knittingpro: {
    name: 'Knitting Pro',
    subTitle: 'A web site made with sveltekit',
    thumbnail: 'https://picsum.photos/800/600?random=1',
    link: 'https://mysfits-challenge5.vercel.app/',
    repo: 'https://github.com/b1mind/mysfits-challenge5',
    techUsed: ['svelte', 'svg', 'json'],
    overview: {
      title: 'Overview',
      content:
        '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
      img: 'https://picsum.photos/300/300?random=2',
      altText: 'img alt text',
    },

    sections: [
      {
        title: 'Challenges',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=3',
        altText: 'img alt text',
      },

      {
        title: 'Solutions',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=4',
        altText: 'img alt text',
      },

      {
        title: 'Highlight',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },

  pizzaapp: {
    name: 'Pizza App',
    subTitle: 'Interactive way to make a pizza',
    thumbnail: '/img/pizza-app/android-full.png',
    thumbnail2: '/img/pizza-app/android-full.png',
    link: 'https://b1mind.github.io/pizza-boy',
    repo: 'https://github.com/b1mind/pizza-boy',
    techUsed: ['svelte', 'svg'],
    overview: {
      title: 'Overview',
      content:
        '<p>Select the size of the pizza (cheese included). Drag and drop toppings onto pizza to add, click an already added topping to remove. </p><p>When you have finished adding toppings hit confirm to see your total, then click order to make a pizza!</p>',
      img: '/img/pizza-app/android-full.png',
      altText: 'pizza app with draggable toppings',
    },

    sections: [
      {
        title: 'Challenges',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: '/img/pizza-app/android-confirm.png',
        altText: 'confirm pizza toppings',
      },

      {
        title: 'Solutions',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        list: ['test', 'test2', 'test3'],
      },

      {
        title: 'Highlight',
        content:
          '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!,</p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo, architecto temporibus aspernatur repellendus saepe vel laborum voluptates molestias rerum ex repellat quas error id ipsa unde nisi optio ad!</p>',
        img: 'https://picsum.photos/300/300?random=5',
        altText: 'img alt text',
      },
    ],
  },
}

export let projectsStore = writable(data)
