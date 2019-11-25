document.getElementById('boto2').addEventListener('click',validatedatos)
function validatedatos() {
  let nomb = document.getElementById('namee').value
  let cont = document.getElementById('contr').value
  if (nomb ==='Luis' && cont ==='ABC'){
    alert('Bienvenido '+nomb)
  }
}
