import jeopardy from './Images/jeopardy-background.png';
import portfolio from './Images/portfolio-banner.png';
import pizza from './Images/pizza-app.png';

export default [
        {
            name: 'Jeopardy',
            description: "First project at GA, practicing vanilla javascript and jquery.",
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
            description: "Second project at GA, my first MEN-Stack app!",
            image: portfolio,
            githublink: 'https://github.com/jchurley95/portfolio-creator',
            deployedlink: 'https://portfolio-creator.herokuapp.com/' 
        },
        {
            name: 'React Pizza Store',
            description: "My first React app! This portfolio is my second.",
            image: pizza,
            githublink: 'https://github.com/jchurley95/react-pizza-app',
            deployedlink: 'https://jhurley-pizza.herokuapp.com/' 
        }
    ]