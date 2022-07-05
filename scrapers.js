import https from 'https';

function request(options) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseText = '';

            res.on('data', (d) => {
                responseText += d;
            });

            res.on('end', () => {
                resolve(responseText);
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
}

export class Scrape {
    constructor(props) {
        this.hostname = props.hostname;
        this.path = props.path;
        this.scrapingFunction = props.scrapingFunction;
    }

    async scrape() {
        const options = {
            hostname: this.hostname,
            path: this.path,
            method: 'GET',
        };
        const response = await request(options);

        return this.scrapingFunction(response);
    }
}

export class Scraper {
    constructor() {
        this.scrapes = [];
    }

    addScrape(scrape) {
        this.scrapes.push(scrape);
    }

    scrapeAll() {
        let interval = setInterval(() => {            
            console.log('beginning interval');
            this.scrapes[0].scrape();
            this.scrapes.shift();               
            if (this.scrapes[0] == undefined) clearInterval(interval);   
        }, 1000);
    }
}