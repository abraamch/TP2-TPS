const fs = require('fs').promises;

fs.readFile('package.json', 'utf8')
  .then(packageJson => {
    const packageObj = JSON.parse(packageJson);
    const info = {
      contenidoStr: packageJson,
      contenidoObj: packageObj,
      size: Buffer.from(packageJson).length
    };
    
    console.log(info);

    return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
  })
  .then(() => {
    console.log('info.txt creado correctamente.');
  })
  .catch(error => {
    console.log('Error:', error.message);
  });