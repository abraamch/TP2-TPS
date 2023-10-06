const fs = require('fs');

contenidoStr = fs.readFileSync('package.json', 'utf8')

  const info = {
    contenidoStr,
    contenidoObj: JSON.parse(contenidoStr),
    size: Buffer.from(contenidoStr).length
  };
  
  console.log(info);
  
  fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
  console.log('info.txt creado correctamente.');
