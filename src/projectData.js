import jeopardy from './Images/jeopardy-background.png';
import portfolio from './Images/portfolio-banner.png';
import pizza from './Images/pizza-app.png';

export default [
        {
            name: 'Jeopardy',
            description: "Prove you're smarter than your friends!",
            image: jeopardy,
            githublink: 'https://github.com/jchurley95/Jeopardy',
            deployedlink: 'http://jeoparty.bitballoon.com'
        },
        // {
        //     name: 'ScrapSave',
        //     description: 'A handy tool for smarter builds.',
        //     image: jeopardy,
        //     githublink: 'https://github.com/jchurley95/Jeopardy',
        //     deployedlink: 'http://scrapsave.bitballoon.com' // update with heroku
        // },
        {
            name: 'Portfolio Creator',
            description: "Tech Portfolios made easy!",
            image: portfolio,
            githublink: 'https://github.com/jchurley95/portfolio-creator',
            deployedlink: 'https://portfolio-creator.herokuapp.com/' 
        },
        {
            name: 'React Pizza Store',
            description: "Not all heroes wear capes",
            image: pizza,
            githublink: 'https://github.com/jchurley95/react-pizza-app',
            deployedlink: 'https://jhurley-pizza.herokuapp.com/' 
        }
    ]