import { Scrape } from "./scrapers.js";
import { scrapeResponseForBows, scrapeResponseForChargeBlades, scrapeResponseForDualBlades, scrapeResponseForGreatSwords, scrapeResponseForGunlances, scrapeResponseForHammers, scrapeResponseForHeavyBowguns, scrapeResponseForHuntingHorns, scrapeResponseForInsectGlaives, scrapeResponseForLances, scrapeResponseForLightBowguns, scrapeResponseForLongSwords, scrapeResponseForSwitchAxes, scrapeResponseForSwordAndShield } from "./scrapingFunctions.js";

export const Scrapes = [

    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=0', //Great Swords
        scrapingFunction: scrapeResponseForGreatSwords
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=1', //Sword & Shield
        scrapingFunction: scrapeResponseForSwordAndShield
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=2', //Dual Blades
        scrapingFunction: scrapeResponseForDualBlades
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=3', //Long Swords
        scrapingFunction: scrapeResponseForLongSwords
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=4', //Hammers
        scrapingFunction: scrapeResponseForHammers
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=5', //Hunting Horns
        scrapingFunction: scrapeResponseForHuntingHorns
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=6', //Lances
        scrapingFunction: scrapeResponseForLances
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=7', //Gunances
        scrapingFunction: scrapeResponseForGunlances
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=8', //Switch Axes
        scrapingFunction: scrapeResponseForSwitchAxes
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=9', //Charge Blades
        scrapingFunction: scrapeResponseForChargeBlades
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=10', //Insect Glaives
        scrapingFunction: scrapeResponseForInsectGlaives
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=11', //Bows
        scrapingFunction: scrapeResponseForBows
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=12', //HBG
        scrapingFunction: scrapeResponseForHeavyBowguns
    }),
    new Scrape({
        hostname: 'mhrise.kiranico.com',
        path: '/data/weapons?view=13', //LBG
        scrapingFunction: scrapeResponseForLightBowguns
    }),
];