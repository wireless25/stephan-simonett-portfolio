const data = {
    title: 'Hi, my name is Stephan',
    byline: 'I’m a senior project manager and passionate frontend developer',
    project: {
        headline: 'Recent projects'
    },
    projects: [
        // {
        //     title: 'Med Ping',
        //     desc: 'A simple but powerfull PWA to help patients remember their medications.',
        //     image: '/med-ping.png',
        //     icons: [
        //         '<i class="devicon-vuejs-plain"></i>',
        //         '<i class="devicon-nodejs-plain"></i>',
        //         '<i class="devicon-javascript-plain"></i>',
        //     ],
        //     url: "https://medping.ch",
        //     repo: 'https://github.com',
        //     locked: false
        // },
        // {
        //     title: 'Swiss drugs Rest JSON:API',
        //     desc: 'A Rest layer built on JSON:API specs for a XML webservice listing all approved drugs in Switzerland.',
        //     image: '/swissmedic-api.png',
        //     icons: [
        //         '<i class="devicon-nodejs-plain"></i>',
        //         '<i class="devicon-javascript-plain"></i>',
        //     ],
        //     url: "https://swissmedic-rest.ch",
        //     repo: 'https://github.com',
        //     locked: false
        // },
        {
            title: 'Celsius Weather App',
            desc: `A simple yet beautiful weather app realized as a PWA. The weather data is delivered by Open Weather Map, one of the bigest meteo data providers on the globe. The frontend is built with Nuxt and Vue. To save favorites and some settings of each user the application uses Cloud Firestore as database and the Firebase Authentication service for user authentiction handling.
            
            For organizing the API requests a backend service written in Node is statically hosted and distributed via a CDN, similar to AWS Lambdas, serverless functions they call them. Maybe you stubled over the term JAM Stack so far, this would be exactly that setup. TL;DR - Its the short cut for JavaScript, API, Markup, a modern approach of serving only static files for websites and applications to the client. If you are interessted I recommend you check out this post
            from XY as a starting point`,
            image: '/celsius-mockups.jpg',
            icons: [
                '<i class="devicon-vuejs-plain"></i>',
                '<i class="devicon-nodejs-plain"></i>',
                '<i class="devicon-javascript-plain"></i>',
            ],
            url: 'https://weather.northway.blog',
            repo: "https://github.com/wireless25/weather-app",
            locked: true
        },
        {
            title: 'Meribel Ski Transfers',
            desc: `Meribel Ski Transfers is a small transfer business in the French Alps. It is specialized in bringing people from airports directly to the ski resorts.

            The project is based on Wordpress with a custom frontend. It is possible to book and pay directly on the website. For this, a booking backend was implemented to check availability directly and make sure there are no double or overbookings. The user can pay conveniently by credit card to book his transfer. The card is only charged after the booking is proofed by an employee.
            
            Not only the winterish and cold feeling was important but also to stick out of the crowd as there are a lot of players in the market. This was achieved with a modern look and feel as well with some animations and transitions to make the site feel fresh and living.
            
            The business is very successful thanks to online bookings. In the meantime, the company was sold and therefore the site was changed and adapted by other instances and is not in the shape as it was back when I delivered it.`,
            image: '/meribel-transfer-car.jpg',
            icons: [
                '<i class="devicon-wordpress-plain"></i>',
                '<i class="devicon-php-plain"></i>',
                '<i class="devicon-javascript-plain"></i>',
                '<svg class="devicon-stripe-plain" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M3.14754098,21.947541 C3.14754098,21.4754098 3.61967213,21.2393443 4.24918033,21.2393443 C5.19344262,21.2393443 6.45245902,21.5540984 7.39672131,22.104918 L7.39672131,19.1147541 C6.37377049,18.7213115 5.27213115,18.4852459 4.24918033,18.4852459 C1.73114754,18.4852459 0,19.8229508 0,22.104918 C0,25.5672131 4.72131148,24.9377049 4.72131148,26.5114754 C4.72131148,27.0622951 4.24918033,27.2983607 3.54098361,27.2983607 C2.51803279,27.2983607 1.18032787,26.8262295 0.157377049,26.2754098 L0.157377049,29.2655738 C1.33770492,29.7377049 2.43934426,29.9737705 3.54098361,29.9737705 C6.13770492,29.9737705 7.86885246,28.7147541 7.86885246,26.4327869 C7.94754098,22.6557377 3.14754098,23.3639344 3.14754098,21.947541 Z" id="Path" fill="#505050" fill-rule="nonzero"></path><polygon id="Path" fill="#505050" fill-rule="nonzero" points="22.7409836 29.7377049 25.8885246 29.7377049 25.8885246 18.7213115 22.7409836 18.7213115"></polygon><path d="M12.0393443,16.1245902 L8.9704918,16.7540984 L8.9704918,26.6688525 C8.9704918,28.557377 10.3868852,29.895082 12.1967213,29.895082 C13.2196721,29.895082 14.0065574,29.7377049 14.4,29.5016393 L14.4,26.9836066 C14.0065574,27.1409836 12.0393443,27.6918033 12.0393443,25.8819672 L12.0393443,21.3967213 L14.4,21.3967213 L14.4,18.7213115 L12.0393443,18.7213115 L12.0393443,16.1245902 Z" id="Path" fill="#505050" fill-rule="nonzero"></path><path d="M18.6491803,19.6655738 L18.5704918,18.7213115 L15.7377049,18.7213115 L15.7377049,29.7377049 L18.8852459,29.7377049 L18.8852459,22.2622951 C19.6721311,21.3180328 21.0098361,21.4754098 21.4032787,21.6327869 L21.4032787,18.7213115 C21.0098361,18.5639344 19.4360656,18.3278689 18.6491803,19.6655738 L18.6491803,19.6655738 Z" id="Path" fill="#505050" fill-rule="nonzero"></path><polygon id="Path" fill="#505050" fill-rule="nonzero" points="22.7409836 17.8557377 25.8885246 17.2262295 25.8885246 14.6295082 22.7409836 15.2590164 22.7409836 17.8557377"></polygon><path d="M47.2918033,24.2295082 C47.2918033,24.5442623 47.2918033,25.1737705 47.2131148,25.3311475 L41.0754098,25.3311475 C41.2327869,26.8262295 42.2557377,27.2983607 43.5147541,27.2983607 C44.7737705,27.2983607 45.7180328,27.0622951 46.5836066,26.5901639 L46.5836066,29.0295082 C45.7180328,29.5803279 44.6163934,29.895082 43.1213115,29.895082 C40.052459,29.895082 37.9278689,28.0065574 37.9278689,24.2295082 C37.9278689,21.0032787 39.7377049,18.4852459 42.7278689,18.4852459 C45.7180328,18.4852459 47.2918033,21.0032787 47.2918033,24.2295082 Z M41.0754098,23.0491803 L44.3016393,23.0491803 C44.3016393,21.6327869 43.5147541,21.0819672 42.7278689,21.0819672 C41.9409836,21.0819672 41.0754098,21.6327869 41.0754098,23.0491803 Z" id="Combined-Shape" fill="#505050" fill-rule="nonzero"></path><path d="M32.8131148,18.4852459 C35.0163934,18.4852459 37.0622951,20.5311475 37.1409836,24.1508197 C37.1409836,28.1639344 35.095082,29.9737705 32.8131148,29.9737705 C31.7114754,29.9737705 31.0819672,29.5016393 30.6098361,29.1868852 L30.6098361,32.7278689 L27.4622951,33.2786885 L27.4622951,18.7213115 L30.295082,18.7213115 L30.3737705,19.5081967 C30.8459016,19.0360656 31.5540984,18.4852459 32.8131148,18.4852459 Z M32.0262295,27.1409836 C33.2065574,27.1409836 33.9934426,25.8819672 33.9934426,24.1508197 C33.9934426,22.4983607 33.2065574,21.2393443 32.0262295,21.2393443 C31.3180328,21.2393443 30.8459016,21.4754098 30.5311475,21.8688525 L30.5311475,26.5114754 C30.8459016,26.904918 31.3180328,27.1409836 32.0262295,27.1409836 Z" id="Combined-Shape" fill="#505050" fill-rule="nonzero"></path></g></svg>'
            ],
            url: "https://www.meribel-ski-transfers.com",
            repo: '',
            locked: true
        },
        {
            title: 'Vantripper',
            desc: `Vantriper is a small company located in Western France. These guys are renting out campervans to travel the west coast of France. This area is a well know surf paradise and therefore the camper is a good travel companion for the surfers who want to catch the best waves in different spots.

            Vantripper needed a new responsive website with good search engine ranking, modern design and the ability to book a campervan online.
            
            The client got more bookings with the new site right away and the ranking in Google increased. Since the project was delivered the client worked on his own on the site.`,
            image: '/vantripper.jpg',
            icons: [
                '<i class="devicon-wordpress-plain"></i>',
                '<i class="devicon-php-plain"></i>',
                '<i class="devicon-javascript-plain"></i>',
            ],
            url: "http://www.vantripper.com/rental",
            repo: '',
            locked: true
        }
    ],
    about: {
        headline: 'Some words about me',
        code:
        `
        // my-life.js
        import studies from 'university-of-basel.js'
        import workExperiences from 'workExperiences.js'

        let stephan = {}

        const toBeBorn = async (father, mother) => {
            const birth = await pregnancy(father, mother);
            const child = await birth.json();
            return child
        }
        
        const education = async (...disciplines) => {
            const bachelor = await studies(...disciplines)
            const degree = await bachelor.json()
            return degree
        }

        const myLive = async () => {
            const child = await toBeBorn(christophSimonett, rosannaSimonett);
            const stephan = await child.json();
            console.log(stephan.birthday); // 25.9.1987

            const bachelorOfArts = await education(socialAnthropology, economics);
            const degree = await bachelorOfArts.json();

            return {stephan, bachelorOfArts}
        }

        myLive()
        `,
        content: `Starting out in the late 90s with HTML and CSS I fell in love with JavaScript in the past few years with the rising of frameworks like <a href="https://vuejs.org/">Vue</a> and <a href="https://svelte.dev/">Svelte</a>, which is the base for this page you are starring at, BTW. To be precise its <a href="https://sapper.svelte.dev/">Sapper</a>, the SSR framework of Svelte. If you havn't heared of it its worth checking out anyway. Working as a technical project manager at <a href="https://www.wearewondrous.com">WONDROUS</a> for over 5 years I was able to grow from an intern to the head of project management leading all technical realization projects as a director. In all those years frontend development was the one thing I loved the most. Learning this stuff myself and developing projects is the perfect compensation to my day job as a manager.`
    }
}
export default data