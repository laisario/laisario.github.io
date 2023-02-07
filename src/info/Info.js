import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
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
    firstName: "Laísa",
    lastName: "Rio",
    initials: "lr", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Front End Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🐶',
            text: 'Mom of three'
        },
        {
            emoji: '🌎',
            text: 'Based in Brazil'
        },
        {
            emoji: "💼",
            text: "Web Development Student at Trybe"
        },
        {
            emoji: "📧",
            text: "laisa.rioverde@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/laisa_maral/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/laisario",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/laisa-rio/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! My name is Laísa and I'm a student of web development at Trybe. After meet someone from the same area, I started to be interested in programming languages ​​and logic, point that, in June 2022, I decided to take my studies to a more serious degree, enrolling in Trybe. I am very happy for having chosen this profession, because in a short time, with a lot of willpower and discipline, I'm already developing projects front-end using React and methodologies agile like Scrum and Kanban.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'redux', 'html5', 'css3', 'soft skills'],
            exposedTo: ['nodejs', 'figma', 'kanban', 'scrum']
        }
    ,
    hobbies: [
        {
            label: 'write with ‼️‼️',
            emoji: '💻'
        },
        {
            label: 'play and walk with my dogs',
            emoji: '🐕‍🦺'
        },
        {
            label: 'documentaries and hunger games 🏹',
            emoji: '🎥'
        },
        {
            label: 'seek new experiences',
            emoji: '🔎'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "TrybeWallet",
            live: "/TrybeWallet/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/laisario/TrybeWallet", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Trybetunes",
            live: "laisario.github.io/trybetunes/",
            source: "https://github.com/laisario/trybetunes",
            image: mock2
        },
        // {
        //     title: "Front-end Online Store",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Pixels Art",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Solar System",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}