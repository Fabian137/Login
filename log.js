document.getElementById('boto2').addEventListener('click',validatedatos)
function validatedatos() {
  let nomb = document.getElementById('namee').value
  let cont = document.getElementById('contr').value
  if (nomb ==='Luis' && cont ==='ABC'){
    alert('Bienvenido '+nomb)
  }
  else if (nomb=== 'Jose' || cont ==='123') {
    alert('Bienvenido '+ nomb)
  }
  else if (nomb === 'Alma' || cont === '1AC') {
    alert('Bienvenido '+ nomb)
  }
  else if (nomb === 'Tito' || cont === 'Constraseña') {
   alert('Bienvenido '+ nomb)
  }
  else{
    alert('Error de los datos')
  }
}
