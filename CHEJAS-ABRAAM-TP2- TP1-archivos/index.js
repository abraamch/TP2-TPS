const {
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays,
  } = require('./archivos');

  try {
    const contenido = leerArchivoComoString('ruta_del_archivo.txt');
    console.log('Contenido del archivo:', contenido);
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
  }
  
  try {
    escribirTextoEnArchivo('archivo_nuevo.txt', 'Este es el nuevo contenido', true);
    console.log('Texto escrito en el archivo nuevo.');
  } catch (error) {
    console.error('Error al escribir en el archivo:', error.message);
  }
  
 
  const texto = '123 | 456 | 789 | 1bc | 10';
  const separador = ' | ';
  const numeros = transformarStringEnArrayDeNumeros(texto, separador);
  console.log('Números:', numeros);
  
  const array = [123, 456, 789, 10];
  const separador2 = ',';
  const textoCombinado = transformarArrayDeNumerosAUnSoloString(array, separador2);
  console.log('Texto combinado:', textoCombinado);
  
  const array1 = [1, 5, 10];
  const array2 = [2, 3, 8, 11];
  const resultadoCombinado = combinarDosArrays(array1, array2);
  console.log('Resultado combinado:', resultadoCombinado);

  const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
  const resultadoCombinadoN = combinarNArrays(arrays);
  console.log('Resultado combinado N:', resultadoCombinadoN);
  