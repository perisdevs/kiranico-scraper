import jsdom from 'jsdom';
import { BowgunIndeces, BowIndeces, GunlanceIndeces, HuntingHornIndeces, InsectGlaiveIndeces, PhialIndeces, StandardIndeces } from './consts.js';
import { downloadWeapon } from './lib.js';
const { JSDOM } = jsdom;

export function scrapeResponseForGreatSwords(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/great_swords', weaponObj);
    });
}

export function scrapeResponseForSwordAndShield(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/sword_and_shields', weaponObj);
    });
}

export function scrapeResponseForDualBlades(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/dual_blades', weaponObj);
    });
}

export function scrapeResponseForHammers(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/hammers', weaponObj);
    });
}

export function scrapeResponseForLongSwords(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/long_swords', weaponObj);
    });
}

export function scrapeResponseForHuntingHorns(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, HuntingHornIndeces);
        weaponObj.melodies = scrapeRowForMelodies(row, HuntingHornIndeces);
        downloadWeapon('data/hunting_horns', weaponObj);
    });
}

export function scrapeResponseForLances(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, StandardIndeces);
        downloadWeapon('data/lances', weaponObj);
    });
}

export function scrapeResponseForGunlances(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, GunlanceIndeces);
        weaponObj.shell = scrapeRowForShell(row, GunlanceIndeces);
        downloadWeapon('data/gunlances', weaponObj);
    });
}

export function scrapeResponseForSwitchAxes(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, PhialIndeces);
        weaponObj.phial = scrapeRowForPhial(row, PhialIndeces);
        downloadWeapon('data/switch_axes', weaponObj);
    });
}

export function scrapeResponseForChargeBlades(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, PhialIndeces);
        weaponObj.phial = scrapeRowForPhial(row, PhialIndeces);
        downloadWeapon('data/charge_blades', weaponObj);
    });
}

export function scrapeResponseForInsectGlaives(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, InsectGlaiveIndeces);
        weaponObj.kinsect = scrapeRowForKinsect(row, InsectGlaiveIndeces);
        downloadWeapon('data/insect_glaives', weaponObj);
    });
}

export function scrapeResponseForBows(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, BowIndeces);
        weaponObj.chargeShots = scrapeRowForChargeShots(row, BowIndeces);
        weaponObj.coatings = scrapeRowForCoatings(row, BowIndeces);
        downloadWeapon('data/bows', weaponObj);
    });
}

export function scrapeResponseForHeavyBowguns(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, BowgunIndeces);        
        downloadWeapon('data/heavy_bowguns', weaponObj);
    });
}

export function scrapeResponseForLightBowguns(response) {

    const { document } = (new JSDOM(response)).window;
    let table = document.querySelector('tbody');
    let rows = Array.from(table.children);

    rows.forEach((row) => {
        let weaponObj = scrapeRowForWeaponProps(row, BowgunIndeces);        
        downloadWeapon('data/light_bowguns', weaponObj);
    });
}

function scrapeRowForCoatings(row, indeces) {
    let weaponInfo = Array.from(row.children);
    let coatingsContainer = weaponInfo[indeces.Coatings].querySelector('small').querySelector('div');
    let coatings = [];
    Array.from(coatingsContainer.children).forEach((coating) => {        
        if (coating.className != 'text-gray-400') {
            coatings.push(coating.textContent);
        }
    });
    return coatings;
}

function scrapeRowForChargeShots(row, indeces) {
    let weaponInfo = Array.from(row.children);
    let chargeShotContainer = weaponInfo[indeces.ChargeShots].querySelector('small');
    let chargeShots = [];
    Array.from(chargeShotContainer.children).forEach((shot) => {
        chargeShots.push(shot.textContent.trim());
    });
    return chargeShots;
}

function scrapeRowForKinsect(row, indeces) {
    let weaponInfo = Array.from(row.children);
    let kinsect = weaponInfo[indeces.Kinsect].textContent.trim();
    return kinsect;
}

function scrapeRowForPhial(row, indeces) {
    let weaponInfo = Array.from(row.children);
    let phial = weaponInfo[indeces.Phial].textContent.trim();
    return phial;
}

function scrapeRowForShell(row, indeces) {
    let weaponInfo = Array.from(row.children);
    let shell = weaponInfo[indeces.Shell].textContent.trim();
    return shell;
    
}

function scrapeRowForMelodies(row, indeces) {
    let weaponInfo = Array.from(row.children);

    let melodyContainers = Array.from(weaponInfo[indeces.Melodies].querySelector('.columns-3').children);

    let melodies = [];
    melodyContainers.forEach((melody) => {
        melodies.push(melody.textContent);
    });
    
    return melodies;
}

function scrapeRowForWeaponProps(row, indeces) {
    let weaponInfo = Array.from(row.children);

    let name = weaponInfo[indeces.Name].textContent.replace(/▣/, '').trim();
    
    let slotLevels = [];
    let slotContainer = Array.from(weaponInfo[indeces.Skills].children)[0];
    if(slotContainer.children) {            
        Array.from(slotContainer.children).forEach((slot) => {
            let level = parseInt(slot.getAttribute('src').match(/\d/)[0]);
            slotLevels.push(level);
        });
    }

    let rampageSlotContainer = Array.from(weaponInfo[indeces.Skills].children)[1];
    let rampageSlot = null;
    if (rampageSlotContainer.firstChild) {
        rampageSlot = parseInt(rampageSlotContainer.firstChild.getAttribute('src').match(/\d/)[0]);
    }

    let damage = parseInt(weaponInfo[indeces.Damage].textContent);

    let elementDefenseAffinityContainers = Array.from(weaponInfo[indeces.ElementDefenseAffinity].querySelector('small').children);
    let elementDamage = null;
    let affinity = null;
    let defenseBonus = null;
    elementDefenseAffinityContainers.forEach((c) => {

        if (c.innerHTML.includes('img')) {
            let type = parseInt(c.querySelector('img').getAttribute('src').match(/\d/)[0]);                
            switch (type) {
                case 1: type = 'Fire'; break;
                case 2: type = 'Water'; break;
                case 3: type = 'Thunder'; break;
                case 4: type = 'Ice'; break;
                case 5: type = 'Dragon'; break;
                case 6: type = 'Poison'; break;
                case 7: type = 'Sleep'; break;
                case 8: type = 'Paralysis'; break;
                case 9: type = 'Blast'; break;
            }
            elementDamage = {
                type: type,
                damage: parseInt(c.textContent),
            };   

        } else if (c.textContent.includes('Affinity')) {
            affinity = parseInt(c.textContent.match(/(\+|-)\d+/)[0]);                

        } else if (c.textContent.includes('Defense Bonus')) {
            defenseBonus = parseInt(c.textContent.match(/\d+/)[0]);                
        }
    });

    let topSharpness = null;
    let bottomSharpness = null;

    if (indeces.Sharpness) {

        topSharpness = {};
        let topSharpnessData = Array.from(weaponInfo[indeces.Sharpness].querySelector('small').children)[0];

        Array.from(topSharpnessData.children).forEach((rect) => {
            switch(rect.getAttribute('fill')) {
                case '#BE3843': topSharpness.red = parseInt(rect.getAttribute('width')); break;
                case '#D3673D': topSharpness.orange = parseInt(rect.getAttribute('width')); break;
                case '#C9B232': topSharpness.yellow = parseInt(rect.getAttribute('width')); break;
                case '#81B034': topSharpness.green = parseInt(rect.getAttribute('width')); break;
                case '#3A58D7': topSharpness.blue = parseInt(rect.getAttribute('width')); break;
                case '#E2E2E2': topSharpness.white = parseInt(rect.getAttribute('width')); break;
                case '#885AEC': topSharpness.purple = parseInt(rect.getAttribute('width')); break;
            }
        }); 

        bottomSharpness = {};
        let bottomSharpnessData = Array.from(weaponInfo[indeces.Sharpness].querySelector('small').children)[1];

        Array.from(bottomSharpnessData.children).forEach((rect) => {
            switch(rect.getAttribute('fill')) {
                case '#BE3843': bottomSharpness.red = parseInt(rect.getAttribute('width')); break;
                case '#D3673D': bottomSharpness.orange = parseInt(rect.getAttribute('width')); break;
                case '#C9B232': bottomSharpness.yellow = parseInt(rect.getAttribute('width')); break;
                case '#81B034': bottomSharpness.green = parseInt(rect.getAttribute('width')); break;
                case '#3A58D7': bottomSharpness.blue = parseInt(rect.getAttribute('width')); break;
                case '#E2E2E2': bottomSharpness.white = parseInt(rect.getAttribute('width')); break;
                case '#885AEC': bottomSharpness.purple = parseInt(rect.getAttribute('width')); break;
            }
        });
    }
    
    let rarity = weaponInfo[indeces.Rarity].textContent.match(/\d+/)[0];
    
    return {
        name: name,
        slotLevels: slotLevels,
        rampageSlot: rampageSlot,
        damage: damage,
        elementDamage: elementDamage,
        defenseBonus: defenseBonus,
        affinity: affinity,
        topSharpness: topSharpness,
        bottomSharpness: bottomSharpness,
        rarity: rarity,
    };
}