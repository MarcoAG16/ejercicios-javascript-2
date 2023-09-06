//generar una funcion para validar si el usuario ya esta registrado o no 

let nombreUsuario = prompt ("Hola, introduce tu nombre de usuario:");

function estaUsuarioRegistrado(nombreUsuario, listaUsuarios) {
    return listaUsuarios.includes(nombreUsuario);
  }
  
  // lista de usuarios:
  var listaDeUsuariosRegistrados = ["usuario1", "usuario2", "usuario3"];
  
  var nombreDeUsuarioBuscado = nombreUsuario;
  if (estaUsuarioRegistrado(nombreDeUsuarioBuscado, listaDeUsuariosRegistrados)) {
    console.log("El usuario está registrado.");
  } else {
    console.log("El usuario no está registrado.");
  }