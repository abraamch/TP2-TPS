const fs = require('fs');

fs.readFile('package.json', 'utf8', (err, packageJson) => {
    
    const packageObj = JSON.parse(packageJson);
    const info = {
      contenidoStr: packageJson,
      contenidoObj: packageObj,
      size: Buffer.from(packageJson).length
    };
    console.log(info);

    fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
       {
        console.log('info.txt creado correctamente.');
      }
    });
});
