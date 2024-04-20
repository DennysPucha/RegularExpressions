export const Expresions = [
    {
      id: crypto.randomUUID(),
      regular_expresion: "^[0-9]{10}$",
      error: "Ingrese un número de cédula valido para el campo",
      nombre: "Cédula"
    },
    {
      id: crypto.randomUUID(),
      regular_expresion: "^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$",
      error: "Ingrese una dirección mac valida",
      nombre: "Mac Address"
    },
    {
      id: crypto.randomUUID(),
      regular_expresion: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$",
      error: "Ingrese un correo valido",
      nombre: "Correo"
    },
    {
      id: crypto.randomUUID(),
      regular_expresion: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
      error: "Ingrese una ipv6 valida",
      nombre: "Ipv6"
    },
    {
      id: crypto.randomUUID(),
      regular_expresion: "^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$",
      error: "Ingrese dos nombres y dos apellidos validos",
      nombre: "Nombre y Apellidos"
    },
    {
      id: crypto.randomUUID(),
      regular_expresion: "^[0-9]{10}$",
      error: "Ingrese un número de celular valido",
      nombre: "Número de Celular"
    }
  ]