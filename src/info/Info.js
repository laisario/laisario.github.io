import self from '../img/self.png';
import mock1 from "../img/mock1.png";
import mock3 from '../img/mock3.png';
import mock4 from "../img/mock4.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";

// Gradient colors for accents throughout the site
export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
  firstName: 'Laísa',
  lastName: 'Rio',
  initials: 'lr',
  position: 'Full Stack Developer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '💼',
      text: '3+ anos de experiência em desenvolvimento full stack',
    },
    {
      emoji: '🛠️',
      text: 'Disponível para trabalhos freelancer',
    },
    {
      emoji: '🌎',
      text: 'Rio de Janeiro, Brazil',
    },
    {
      emoji: '📧',
      text: 'laisa.rioverde@gmail.com',
    },
  ],
  socials: [
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
  ],
  bio: 'Full Stack Developer with 3+ years of experience designing, building, and operating end-to-end software systems. Strong background in JavaScript/TypeScript and Python, with hands-on experience across backend, frontend, DevOps, and system architecture. I have delivered production systems for real businesses, taking full ownership of each project—from requirements and architecture to implementation, containerization, CI/CD, and deployment. I am passionate about technology and transforming ideas into working products. I value clean architecture, automation, and reliability, and thrive in collaborative environments focused on continuous learning and practical impact.',
  skills: {
    proficientWith: [
      'JavaScript',
      'TypeScript',
      'Python',
      'React',
      'Next.js',
      'SvelteKit',
      'Node.js',
      'NestJS',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Docker',
      'CI/CD',
      'Linux',
      'Git',
      'REST APIs',
      'Tailwind CSS',
    ],
  },
  hobbies: [
    {
      label: 'thinking about business ideas and starting to code (not always finished haha)',
      emoji: '💻',
    },
    {
      label: 'playing with my dogs',
      emoji: '🐕‍🦺',
    },
    {
      label: 'training archery',
      emoji: '🏹',
    },
    {
      label: 'exploring new places',
      emoji: '🏍️',
    },
  ],
  portfolio: [
    {
      title: 'Kometro',
      live: 'https://www.kometro.com.br/',
      source: 'https://github.com/laisario/bef-backend',
      image: mock3,
      description: 'Corporate management system with focus on scalability, REST APIs, async processing, Docker containerization, and CI/CD pipelines.',
    },
    {
      title: 'Porteiras Abertas',
      live: 'https://porteirasabertas.netlify.app/',
      source: 'https://github.com/laisario/devs-impacto',
      image: mock7,
      description: 'AI-driven platform using RAG pipeline to guide family farmers through formalization. Built with FastAPI, React, MongoDB, and OpenAI integration.',
    },
    {
      title: 'Hidralpress',
      live: 'https://github.com/laisario/hidralpress-backend',
      source: 'https://github.com/laisario/hidralpress-backend',
      image: mock4,
      description: 'Mobile app for automating maintenance documentation with automatic image classification. Python app on Linux VM with SMB network integration.',
    },
    {
      title: 'A Casa da Mata',
      live: 'https://www.acasadamata.com.br/',
      source: 'https://github.com/laisario/acasadamata-landingpage',
      image: mock6,
      description: 'Landing page for eco-tourism business with modern design and responsive layout.',
    },
    {
      title: 'Intersul Cópias',
      live: 'https://www.intersulcopias.com/',
      source: 'https://github.com/laisario/intersul',
      image: mock1,
      description: 'Corporate management system with focus on scalability, REST APIs, Docker containerization, and CI/CD pipelines.',
    },
  ],
};
