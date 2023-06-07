import { v4 } from "uuid";

export const CARDS = [
    {
        id: v4(),
        src: '/public/images/icon-supervisor.svg',
        alt: 'Supervisor',
        color: 'lightblue',
        name: 'Supervisor',
        text: 'Monitors activity to identify project roadblocks.'
    },
    {
        id: v4(),
        src: '/public/images/icon-team-builder.svg',
        alt: 'Team Builder',
        color: 'red',
        name: 'Team Builder',
        text: 'Scans our talent network to create the optimal team for your proyect.'
    },
    {
        id: v4(),
        src: '/public/images/icon-karma.svg',
        alt: 'Karma',
        color: 'orange',
        name: 'Karma',
        text: 'Regularly evaluates our talent to ensure quality.'
    },
    {
        id: v4(),
        src: '/public/images/icon-calculator.svg',
        alt: 'Calculator',
        color: 'darkblue',
        name: 'Calculator',
        text: 'Uses data from past projects to provide better delivery estimates.'
    }
]