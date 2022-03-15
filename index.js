
// Pokemons que voy coleccionando
const pokedex = []
// Elementos del DOM que incorporo al codigo

// Input de busqueda
const pokeSearch = document.getElementById('pokeSearch')
// p Tag con los pokemons que ya poseo
const listaPokedex = document.getElementById('listaPokedex')

// Lista con todos los Pokemon o los filtrados
const pokeList = document.getElementById("pokeList")

//Funcion para Printear los pokemon
const printPokemons = (array) => {
    // Aca limpio la lista
    pokeList.innerHTML = null
    // Itero por cada elemento del array que paso como parametro
    array.forEach((pokemon) => {
        // Creo un elemento <li> por iteracion , me va a generar tantos <li> por pokemons que itere
        let itemList = document.createElement("li")
        // Creo un atributo id por iteracion , me va a generar tantos id por pokemons que itere
        let att = document.createAttribute("id")
        // Le doy un valor a esa id
        att.value = `pokemon${pokemon.id}`
        // Agrego esa id al elemento que genere
        itemList.setAttributeNode(att)
        // Modifico el html de ese elemento que genere, maqueto lo de adentro de cada <li>
        itemList.innerHTML = `<div  id="selectionButton${pokemon.id}">
        <p>${pokemon.name}</p>
        <p>${pokemon.description}</p>
        <p>${pokemon.type}</p>
                    </div>
        <button id="agregar${pokemon.id}">Agregar pokemon a la pokedex</buttton>`
        // Agrego cada <li> al elemento padre que es la <ul> pokeList
        pokeList.appendChild(itemList)
        // Hago un getElementById aca, por que? para generarlo dinamicamente con la iteracion de cada pokemon
        // y captar los id de cada boton
        const botonAgregarPokedex = document.getElementById(`agregar${pokemon.id}`)

        //Este onclick va dentro justamente para matchear ese id con el evento asignado al boton con esa id
        botonAgregarPokedex.onclick = () => {
            //Aca busco si ya tengo ese pokemon en el array pokedex
            const isInPokedex = pokedex.find(x => x.id === pokemon.id)
            if (isInPokedex) {
                //Si ya lo capture me genera este log
              console.log(`Usted ya tiene este pokemon`)  
            } else {
                //Si no lo capture lo agrego al array , mismo aca, reseteo el elemento donde renderizo  la lista para generar la lista actualizada
                listaPokedex.innerHTML = null
                pokedex.push(pokemon)
                // Hago un .map para generar un nuevo array solo con los nombres y que no devuelva todo el objeto
                const pokeNames = pokedex.map( x=> x.name)
                //Actualizo la lista que genere
                listaPokedex.innerHTML = `Usted tiene ${pokedex.length} pokemon, los cuales son: ${pokeNames.join(',')}`
                console.log(`Usted tiene ${pokedex.length} pokemon, los cuales son:`, pokedex)
            }

        }
    })
}

printPokemons(listaPokemon)

// Funcion buscadora, paso todo a minuscula
const buscarName = (search) => listaPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(search))
pokeSearch.oninput = () => {
    // Aca paso a una constante el valor que tiene ese input , el trim elimina los espacios al principio y al final, paso todo a minuscula para evitar problemas de matcheo
    const search = pokeSearch.value.trim().toLowerCase()
    //Constante con el valor retornado, que es un array
    const nameSearch = buscarName(search)
    //Funcion para pintar el DOM con el nuevo array filtrado
    printPokemons(nameSearch)
    console.log(nameSearch)
}