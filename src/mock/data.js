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
  name: 'Егор',
  subtitle: 'Я Javasript разработчик',
  cta: 'Ну или планирую им стать :-)',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutme.webp',
  paragraphOne:
    'Добрый день. Меня зовут Егор. Я начал изучать JavaSript разработку в 2019 году.И это меня увлекло.',
  paragraphTwo: `Можно что еще написать.`,
  paragraphThree: 'Ниже резюме с hh.',
  resume: 'https://ekaterinburg.hh.ru/resume/dd37e7f8ff086e618e0039ed1f323635306275',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'workplace planner',
    info: 'Рассадка сотрудников в офисе',
    info2: 'Technologies: React, Redux, Webpack и немного TS',
    url: 'https://blissful-torvalds-09138c.netlify.app/',
    repo: 'https://github.com/Egor18032019/PlaningWorkSpaceOnOffice', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Yandexmap app',
    info: 'Одностроничный сайт где можно выбрать несколько маршрутов и в живую увидеть их',
    info2: 'Technologies: React.',
    url: 'https://goofy-swartz-e16c87.netlify.app/',
    repo: 'https://github.com/Egor18032019/TeachYandexApiMap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-4.png',
    title: 'Game Cloun app',
    info:
      'Игра про кубики.Только один уровень. И прошу прощения за долгую загрузку=бесплатный хостинг',
    info2: 'Technologies: JS, Phaser, Express, MongoDB',
    info3: 'Логин:test3@test.com Пароль:123',
    url: 'https://purrfect-autumn-linseed.glitch.me/login',
    repo: 'https://github.com/Egor18032019/game-bubble-on-js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.png',
    title: 'Game Danger Bombs app',
    info: 'Игра где нужно собрать звезды и не коснуться бобмы.',
    info2: 'Technologies: JS, Phaser, Express, MongoDB',
    info3: 'Логин:test3@test.com Пароль:123',
    info4: 'И прошу прощения за долгую загрузку=бесплатный хостинг',
    url: 'https://loud-horse-mackerel.glitch.me/',
    repo: 'https://github.com/Egor18032019/game-bubble-on-js', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Написать мне на эл.почту',
  btn: 'почта',
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
