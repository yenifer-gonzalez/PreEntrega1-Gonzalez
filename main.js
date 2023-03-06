const calcularPromedio = () => {
  let nombre = "";
  let apellido = "";
  let cantidadMaterias = 0;
  let materia = "";
  let nota = 0;
  let sumaNotas = 0;
  let promedio = 0;

  do {
    nombre = prompt("Ingrese su nombre.");
  } while (esLetra(nombre));

  do {
    apellido = prompt("Ingrese su apellido.");
  } while (esLetra(apellido));

  do {
    do {
      materia = prompt("Ingrese una materia. (Por favor, no utilice tildes).");
    } while (esMateria(materia));

    do {
      nota = parseInt(prompt("Ingrese la nota de la materia " + materia + "."));
    } while (esNumero(nota));

    sumaNotas = sumaNotas + nota;

    cantidadMaterias++;

    seguirIngresando = confirm("¿Querés agregar otra materia?");
  } while (seguirIngresando);

  promedio = sumaNotas / cantidadMaterias;

  document.write(
    "El promedio final de " +
      nombre +
      " " +
      apellido +
      " es de " +
      promedio.toFixed(2)
  );
};

function esLetra(letras) {
  let regex = /^[a-zA-Z]+$/;
  if (regex.test(letras)) {
    return false;
  } else {
    alert("Por favor, ingrese solo letras.");
    return true;
  }
}

function esMateria(materia) {
  switch (materia) {
    case "Ingles":
      return false;
    case "Matematica":
      return false;
    case "Biologia":
      return false;
    case "Quimica":
      return false;
    case "Programacion":
      return false;
    default:
      alert("Ingrese una materia válida. Recuerde no usar tildes.");
      return true;
  }
}

function esNumero(nota) {
  if (nota >= 1 && nota <= 10) {
    return false;
  } else {
    alert("Por favor, ingrese un número válido entre 1 y 10.");
    return true;
  }
}

calcularPromedio();
