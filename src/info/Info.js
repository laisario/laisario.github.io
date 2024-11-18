import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import mock4 from "../img/mock4.png";
import eu from '../img/eu.png'

// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Laísa',
  lastName: 'Rio',
  initials: 'lr', // the example uses first and last, but feel free to use three or more if you like.
  position: 'uma desenvolvedora FullStack',
  selfPortrait: eu, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🐶',
      text: 'Amo cachorros especialmente  meus 4',
    },
    {
      emoji: '🌎',
      text: 'Barra Mansa - Rio de Janeiro - Brasil',
    },
    {
      emoji: '📧',
      text: 'laisa.rioverde@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://www.instagram.com/laisa_maral/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/laisario',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/laisa-rio/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: 'Olá leitor, sou Laísa, uma desenvolvedora full-stack. Tenho trabalhado como freelancer em empresas da minha região há mais de um ano, agora estou a procura de um emprego corporativo pra aprimorar minhas habilidades e tabalhar em equipe.',
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'node.js',
      'typescript',
      'django',
      'flask',
      'pytests',
      'jest',
      'html5',
      'css3',
      'git',
      'docker',
      'mySQL',
      'mongoDB',
      'scrumban',
      'material ui',
      'web design responsivo',
    ],
  },
  hobbies: [
    {
      label: 'escrever com exclamação‼️‼️',
      emoji: '💻',
    },
    {
      label: 'brincar e passear com meus cachorros',
      emoji: '🐕‍🦺',
    },
    {
      label: 'rever amigos',
      emoji: '🫂',
    },
    {
      label: 'explorar novos lugares e ter experiências inusitadas',
      emoji: '🏍️',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Kometro',
      live: 'https://www.kometro.com.br/',
      source: 'https://github.com/laisario/bef-backend',
      image: mock3,
    },
    {
        title: "Hidralpress",
        live: "https://github.com/laisario/hidralpress-backend",
        source: "https://github.com/laisario/hidralpress-backend",
        image: mock4
    },
    {
      title: 'TrybeWallet',
      live: '/TrybeWallet/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/laisario/TrybeWallet', // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: 'Trybetunes',
      live: 'https://laisario.github.io/trybetunes/',
      source: 'https://github.com/laisario/trybetunes',
      image: mock2,
    },
    // {
    //     title: "Solar System",
    //     live: "https://paytonpierce.dev",
    //     source: "https://github.com/paytonjewell",
    //     image: mock5
    // }
  ],
};
