import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Егор | JS developer', // e.g: 'Name | Developer'
  lang: 'ru', // e.g: en, es, fr, jp
  description: 'JavaScript developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Добрый день ! Меня зовут ',
  name: 'Егор.',
  subtitle: 'Я - Javasript разработчик.',
  cta: 'Ну или планирую им стать :-)',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutme.webp',
  paragraphOne:
    'Я начал изучать JavaSript разработку в 2019 году.',
  paragraphTwo: `И это меня увлекло.`,
  paragraphThree: ' ',
  resume: 'https://ekaterinburg.hh.ru/resume/dd37e7f8ff086e618e0039ed1f323635306275',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'Workplace planner',
    info: 'Рассадка сотрудников в офисе.',
    info2: 'Technologies: React, Redux, Webpack и немного TS.',
    url: 'https://blissful-torvalds-09138c.netlify.app/',
    repo: 'https://github.com/Egor18032019/PlaningWorkSpaceOnOffice', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Yandexmap app',
    info: 'Одностроничный сайт, на котором можно выбрать несколько маршрутов и увидеть их на экране.',
    info2: 'Technologies: React.',
    url: 'https://goofy-swartz-e16c87.netlify.app/',
    repo: 'https://github.com/Egor18032019/TeachYandexApiMap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4.png',
    title: 'Game app',
    info:
      'Игра, в которой нужно передвинуть кубики на базу за наименьшее количество шагов.',
    info2: 'Technologies: JS, Phaser, Express, MongoDB.',
    info3: 'Логин:test3@test.com Пароль:123',
    info4: 'Долгая загрузка <= бесплатный хостинг.',
    url: 'https://purrfect-autumn-linseed.glitch.me/login',
    repo: 'https://github.com/Egor18032019/game-bubble-on-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.png',
    title: 'Game Danger Bombs app',
    info: 'Игра, в которой нужно собрать звезды, не коснувшись бобмы.',
    info2: 'Technologies: JS, Phaser, Express, MongoDB.',
    info3: 'Логин:test3@test.com Пароль:123',
    info4: 'Долгая загрузка <= бесплатный хостинг.',
    url: 'https://loud-horse-mackerel.glitch.me/',
    repo: 'https://github.com/Egor18032019/game-bubble-on-js', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: 'Написать мне',
  email: 'goro4@mail.ru',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'vk',
      url: 'https://vk.com/egorviktorovichprishedko',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/Egor_from_Ekaterinburg',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Egor18032019/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
