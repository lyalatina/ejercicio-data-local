const boton = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = 
'../data/cohorts/lim-2018-03-pre-core-pw/users.json';   


// permanente
fetch(usersJSON)
.then(response => response.json()) 
.then(data => {
  console.log(data);  //llame a la data
  renderUsers(data); //recibir info de los arreglos de objetos

})

const renderUsers = data => {  //funcion elemento del boton. cuando se aprete el boton
  // devuelva el nombre de cada una
  boton.addEventListener('click', () => {
    const render = data.forEach(element => {  // guardar en una variable  recorre todo el for each inicio a fin//() cada elemento que va a recorrer
      return container.innerHTML += `<p>${element.name}</p>` // concatena += uno tras otro los nombres

    })
      return render;
  })
}




  //For in recorre objetos y accede a las propiedades de ese objeto. for o for each
    // element.name === arreglo[i].name