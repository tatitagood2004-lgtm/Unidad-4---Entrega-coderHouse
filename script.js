// Ejercicio JavaScript

const usuariosArray = ['Ana', 'Luis', 'María'];
console.log(usuariosArray[1]); // ¿Qué nombre aparece aquí?

// El nombre que aparecé en la consola es "Luis", porque está en el índice 1 del array de usuarios
 
// Ejercicio Numero 4

// Agregar un nuevo usuario

usuariosArray.push('Carlos');
console.log(usuariosArray); 

// Eliminar un usuario

usuariosArray.shift();
console.log(usuariosArray);

// Ejercicio Numero 2

const usuariosObjeto = {
  usuario1: 'Ana',
  usuario2: 'Luis',
  usuario3: 'María'
};

console.log(usuariosObjeto.usuario2); // ¿Qué nombre aparece aquí?

// El nombre que aparece en la consola es nuevamente "Luis",  hacemos el llamado a la propiedad "usuario2" del objeto.


// Ejercicio Numero 3

//¿Cuál estructura es más fácil de recorrer si quiero mostrar todos los usuarios?

// La manera más fácil de recorrer todos los usuarios es mediante un array, ya que podemos utilizar un for o un forEach para recorrer sus elementos.
// ¿Cuál es más adecuada para una lista que puede crecer o cambiar de tamaño?

// La estructura más adecuada para una lista que puede crecer o cambiar de tamaño es un array, ya que permite agregar o eliminar elementos de manera sencilla.

// Paso 5: ¿Crees que sería igual de sencillo hacer estas operaciones con el objeto? ¿Por qué?
// No sería igual de sencillo, porque los objetos no tienen métodos como push() o shift(). Para agregar una propiedad debemos asignarla manualmente y para eliminarla usamos delete.