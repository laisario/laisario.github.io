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
    position: "uma desenvolvedora Front-end",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🐶',
            text: 'Mãe de quatro pets'
        },
        {
            emoji: '🌎',
            text: 'Barra Mansa - Rio de Janeiro - Brasil'
        },
        {
            emoji: "💼",
            text: "Summer de instrução na Trybe"
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
    bio: "Olá! Meu nome é Laísa, tenho 20 anos e sou uma desenvolvedora front-end que está em busca de se tornar uma desenvolvedora full-stack. Após concluir o ensino médio, fui fisgada pelo fascinante mundo da lógica de programação e fiquei intrigada a entender como os computadores executam instruções em diversas linguagens. Esse interesse rapidamente se transformou em uma verdadeira paixão e me impulsionou a me profissionalizar no desenvolvimento web. Seja muito bem-vindo ao meu portfolio!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'node.js', 'typescript', 'html5', 'css3', 'git', 'docker', 'mySQL', 'poo', 'scrumban', 'web design responsivo']
        }
    ,
    hobbies: [
        {
            label: 'escrever com ‼️‼',
            emoji: '💻'
        },
        {
            label: 'brincar e passear com meus cachorros',
            emoji: '🐕‍🦺'
        },
        {
            label: 'tentar ajudar animais que precisam',
            emoji: '🐱'
        },
        {
            label: 'explorar novos lugares de quadriciclo com meu namorado',
            emoji: '🏍️'
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
            live: "https://laisario.github.io/trybetunes/",
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