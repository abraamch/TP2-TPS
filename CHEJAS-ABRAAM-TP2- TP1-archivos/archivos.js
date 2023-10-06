const fs = require('fs');

function leerArchivoComoString(ruta) {
  try {
    return fs.readFileSync(ruta, 'utf8');
  } catch (error) {
    throw new Error('Error al leer el archivo');
  }
}

function escribirTextoEnArchivo(ruta, texto, flag) {
  try {
    if (flag) {
      fs.writeFileSync(ruta, texto);
    } else {
      throw new Error('El archivo no existe');
    }
  } catch (error) {
    throw error;
  }
}

function transformarStringEnArrayDeNumeros(texto, separador) {
  const partes = texto.split(separador);
  const numeros = partes
    .map((parte) => parseInt(parte))
    .filter((numero) => !isNaN(numero));
  return numeros;
}

function transformarArrayDeNumerosAUnSoloString(array, separador) {
  return array.join(separador);
}

function combinarDosArrays(array1, array2) {
  return Array.from(new Set([...array1, ...array2])).sort((a, b) => a - b);
}

function combinarNArrays(arrays) {
  const combinedArray = [].concat(...arrays);
  return Array.from(new Set(combinedArray)).sort((a, b) => a - b);
}

module.exports = {
  leerArchivoComoString,
  escribirTextoEnArchivo,
  transformarStringEnArrayDeNumeros,
  transformarArrayDeNumerosAUnSoloString,
  combinarDosArrays,
  combinarNArrays,
};
