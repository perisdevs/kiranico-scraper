import fs from 'fs';

export function downloadWeapon(path, obj) {

    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true});
    }
    
    let fileName = obj.name.replace(/\s/, '-');

    fs.writeFileSync(`${path}/${fileName}.json`, JSON.stringify(obj));
}