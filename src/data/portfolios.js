import sudoku from '../img/portImages/Sudoku.png'
import msShop from '../img/portImages/MsShop.png'
import contextShop from '../img/portImages/ContextShop.png'
import dashboard from '../img/portImages/Dashboard.png'

const portfolios = [
    {
        id: 1,
        category: 'Shop',
        image: msShop,
        link1: 'https://github.com/MassoudJavadi/massoudshop',
        link2: 'https://massoudshop.herokuapp.com/',
        title: 'ProShop',
        text: 'Full stack shop created with MERN(Including Redux, User Authentication and Authorization(JWT) cutomizing Admin authorities) and Bootstrap.'
    },
    {
        id: 2,
        category: 'Game',
        image: sudoku,
        link1: 'https://github.com/MassoudJavadi/Sudoku',
        link2: 'https://sud0ku.netlify.app/',
        title: `Let's play a Game!!`,
        text: 'Sudoku game created with React(including Redux) and Typescript and styled components. '
    },
    {
        id: 3,
        category: 'Shop',
        image: contextShop,
        link1: 'https://github.com/MassoudJavadi/react-eshop',
        link2: 'https://half-empty-eshop.netlify.app/',
        title: 'My 1st shop!',
        text: 'Shop Created with React(including Context Api) and Strapi'
    },
    {
        id: 4,
        category: 'Dashboard',
        image: dashboard,
        link1: 'https://github.com/MassoudJavadi/Dashboard-v0',
        link2: 'https://admin-dashboard-v0.netlify.app/',
        title: 'Hello World!!',
        text: 'One of my first practices with the react'
    },
    
]

export default portfolios;