import { Scraper } from "./scrapers.js";
import { Scrapes } from "./scrapes.js";

let scraper = new Scraper();

Scrapes.forEach((scrape) => {
    scraper.addScrape(scrape);    
});

scraper.scrapeAll();