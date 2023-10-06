const fs = require('fs').promises;

async function leerInfo () {
    const packageJson = await fs.readFile('package.json', 'utf8');
    const packageObj = JSON.parse(packageJson);
    const info = {
      contenidoStr: packageJson,
      contenidoObj: packageObj,
      size: Buffer.from(packageJson).length
    };

    console.log(info);

    await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
    console.log('info.txt creado correctamente.');
}

leerInfo();
