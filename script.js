
const happy = [
    {
        qoute: "There is no path to happiness; happiness is the path.",
        author: 'Buddha'
    },

    {
        qoute: "No medicine cures what happiness cannot.",
        author: 'Gabriel García Márquez'
    },

    {
        qoute: "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
        author: 'Roy T. Bennett'
    },

    {
        qoute: "Happiness is a state of mind. It's just according to the way you look at things.",
        author: 'Walt Disney'
    },

    {
        qoute: "Think of all the beauty still left around you and be happy.",
        author: 'Anne Frank'
    },

    {
        qoute: "Happiness is not a goal...it's a by-product of a life well-lived.",
        author: 'Eleanor Roosevelt'
    },

    {
        qoute: "Happiness depends upon ourselves.",
        author: 'Aristotle'
    }
];

const sad = [
    {
        qoute: "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
        author: 'Henry Wadsworth Longfellow'
    },

    {
        qoute: "You cannot protect yourself from sadness without protecting yourself from happiness.",
        author: 'Jonathan Safran Foer'
    },

    {
        qoute: "Any fool can be happy. It takes a man with real heart to make beauty out of the stuff that makes us weep.",
        author: 'Clive Barker'
    },

    {
        qoute: "Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.",
        author: 'José N. Harris'
    },

    {
        qoute: "Tears are words that need to be written.",
        author: ' Paulo Coelho'
    },

    {
        qoute: "The longer and more carefully we look at a funny story, the sadder it becomes.",
        author: 'Nikolai V. Gogol'
    },

    {
        qoute: "Don't cry over someone who wouldn't cry over you.",
        author: 'Lauren Conrad'
    }
];

const life = [
    {
        qoute: "If you’re always trying to be normal you will never know how amazing you can be.",
        author: 'Maya ANgelou'
    },

    {
        qoute: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: ' Thomas Edison'
    },

    {
        qoute: "The first draft is just you telling yourself the story",
        author: 'Octavia E. Butler'
    },

    {
        qoute: 'Experience is a hard teacher because she gives the test first, the lesson afterwards.',
        author: 'Vernon Sanders Law'
    },

    {
        qoute: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author: 'Dale Carnegie'
    },

    {
        qoute: "The road to success and the road to failure are almost exactly the same.",
        author: 'Colin R. Davis'
    },

    {
        qoute: "Learn as if you will live forever, live like you will die tomorrow.",
        author: 'Mahatma Gandhi'
    }
];

const basketball = [
    {
        qoute: "Something just doesn’t pop under your nose; you have to work for it.",
        author: 'LeBron James'
    },

    {
        qoute: "Don’t let what other people think to decide who you are.",
        author: 'Dennis Rodman.'
    },

    {
        qoute: "Be the best version of yourself in anything you do. You don’t have to live anybody else’s story.",
        author: 'Stephen Curry'
    },

    {
        qoute: 'Everybody has talent, but ability takes hard work.',
        author: 'Michael Jordan'
    },

    {
        qoute: "Everything negative — pressure, challenges — are all an opportunity for me to rise.",
        author: 'Kobe Bryant'
    },

    {
        qoute: "Good, better, best. Never let it rest. Until your good is better and your better is best",
        author: 'Tim Duncan'
    },

    {
        qoute: "Hard work beats talent when talent fails to work hard",
        author: 'Kevin Durant'
    }
];

const textContainer = document.querySelector('.text-box p');
const btn = document.querySelector('.btn-generator button');
const switcher = document.querySelector('.type #qoutes');
const container = document.querySelector('.container');
const font = document.querySelector('.text-box p')


const generateQoutes = () => {  
    const math = Math.floor(Math.random() * 7);
    let template = '';

    template += `<p> ${happy[math].qoute} <span> - ${happy[math].author}  </span> </p>`;
    textContainer.innerHTML = template;
}

btn.addEventListener('click', () => {
    generateQoutes()
})

switcher.addEventListener('input', () => {
    let input = switcher.value;

    btn.addEventListener('click', () => {
        const math = Math.floor(Math.random() * 7);
        let imgSrc = ''
        let template = '';
        
        if(input === 'happy') {
            template = `<p> ${happy[math].qoute} <span> - ${happy[math].author}  </span> </p>`;
            imgSrc = `url('images/happy.jpg')`;
            
        } else if(input === 'sad') {
            template = `<p> ${sad[math].qoute} <span> - ${sad[math].author}  </span> </p>`;
            imgSrc = `url('images/sad.jpg')`;
            font.style.color = 'wheat';
            
        } else if(input === 'life') {
            template = `<p> ${life[math].qoute} <span> - ${life[math].author}  </span> </p>`;
            imgSrc = `url('images/motivation.jpg')`;
            
        } else if(input === 'basketball') {
            template = `<p> ${basketball[math].qoute} <span> - ${basketball[math].author}  </span> </p>`;
            imgSrc = `url('images/bball.jpg')`;
        }

        textContainer.innerHTML = template;
        container.style.backgroundImage = imgSrc
        
    })

    
})

