// Ejercicio JavaScript

const usuariosArray = ['Ana', 'Luis', 'María'];
console.log(usuariosArray[1]); // ¿Qué nombre aparece aquí?

// El nombre que aparece en la consola es "Luis", porque esta en el indice 1 de el attay de usuarios

// Ejercicio Numero 4
// Agregar un nuevo usuario

let nuevoUsuario = 'Carlos';
usuariosArray.push(nuevoUsuario);
console.log(nuevoUsuario); 
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

// El nombre que aparece en la consola es nuevamente "Luis", porque hacemos el llamado a la propiedad de "usuario2" del objeto usuarioObjetos.


// Ejercicio Numero 3

//¿Cuál estructura es más fácil de recorrer si quiero mostrar todos los usuarios?

// la manera mas facil de recorrer a todo los usuarios es con el array, ya que podemos usar elementos como for o forEach para recorrerlo.

// ¿Cuál es más adecuada para una lista que puede crecer o cambiar de tamaño?

// La estructura más adecuada para una lista que puede crecer o cambiar de tamaño es un array, ya que permite agregar o eliminar elementos de manera sencilla.

