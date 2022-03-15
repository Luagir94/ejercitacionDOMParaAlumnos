const listaPokemon = [
    {
        id: 01,
        name: "Bulbasaur",
        description: `Este pokemon es ...`,
        type: "grass"
    },
    {
        id: 02,
        name: "Yvysaur",
        description: `Este pokemon es ...`,
        type: "grass"
    },
    {
        id: 03,
        name: "Venasaur",
        description: `Este pokemon es ...`,
        type: "grass"
    },
    {
        id: 004,
        name: "Charmander",
        description: `Este pokemon es ...`,
        type: "fire"
    },
    {
        id: 05,
        name: "Charmeleon",
        description: `Este pokemon es ...`,
        type: "fire"
    },
    {
        id: 06,
        name: "Charizard",
        description: `Este pokemon es ...`,
        type: "fire"
    },
    {
        id: 07,
        name: "Squirtle",
        description: `Este pokemon es ...`,
        type: "water"
    },
    {
        id: 08,
        name: "Warturtle",
        description: `Este pokemon es ...`,
        type: "water"
    },
    {
        id: 09,
        name: "Blastoise",
        description: `Este pokemon es ...`,
        type: "water"
    },
    {
        id: 10,
        name: "Caterpie",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 11,
        name: "Metapod",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 12,
        name: "Butterfree",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 13,
        name: "Weedle",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 14,
        name: "Kakuna",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 15,
        name: "Beedrill",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 16,
        name: "Pidgey",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 17,
        name: "Pidgeotto",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 18,
        name: "Pidgeot",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 19,
        name: "Ratatta",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 20,
        name: "Raticate",
        description: `Este pokemon es ...`,
        
        type: "normal"
    }, {
        id: 21,
        name: "Spearow",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 22,
        name: "Fearow",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 23,
        name: "Ekans",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 24,
        name: "Arbok",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 25,
        name: "Pikachu",
        description: `Este pokemon es ...`,
        
        type: "electric"
    },
    {
        id: 26,
        name: "Raichu",
        description: `Este pokemon es ...`,
        
        type: "electric"
    },
    {
        id: 27,
        name: "Sandshrew",
        description: `Este pokemon es ...`,
        
        type: "ground"
    },
    {
        id: 28,
        name: "Sandslash",
        description: `Este pokemon es ...`,
        
        type: "ground"
    },
    {
        id: 29,
        name: "Nidoran♀",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 30,
        name: "Nidorina",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 31,
        name: "Nidoqueen",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 32,
        name: "Nidoran♂",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 33,
        name: "Nidorino",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 34,
        name: "Nidoking",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 35,
        name: "Clefairy",
        description: `Este pokemon es ...`,
        
        type: "fairy"
    },
    {
        id: 36,
        name: "Clefable",
        description: `Este pokemon es ...`,
        
        type: "fairy"
    },
    {
        id: 37,
        name: "Vulpix",
        description: `Este pokemon es ...`,
        
        type: "fire"
    },
    {
        id: 38,
        name: "Ninetales",
        description: `Este pokemon es ...`,
        
        type: "fire"
    },
    {
        id: 39,
        name: "Jigglypuff",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 40,
        name: "Wigglytuff",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 41,
        name: "Zubat",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 42,
        name: "Golbat",
        description: `Este pokemon es ...`,
        
        type: "poison"
    },
    {
        id: 43,
        name: "Odish",
        description: `Este pokemon es ...`,
        
        type: "grass"
    },
    {
        id: 44,
        name: "Gloom",
        description: `Este pokemon es ...`,
        
        type: "grass"
    },
    {
        id: 45,
        name: "Vileplume",
        description: `Este pokemon es ...`,
        
        type: "grass"
    },
    {
        id: 46,
        name: "Paras",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 47,
        name: "Parasect",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 48,
        name: "Venonat",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 49,
        name: "Venomoth",
        description: `Este pokemon es ...`,
        
        type: "bug"
    },
    {
        id: 50,
        name: "Diglett",
        description: `Este pokemon es ...`,
        
        type: "ground"
    },
    {
        id: 51,
        name: "Dugtrio",
        description: `Este pokemon es ...`,
        
        type: "ground"
    },
    {
        id: 52,
        name: "Meowth",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 53,
        name: "Persian",
        description: `Este pokemon es ...`,
        
        type: "normal"
    },
    {
        id: 54,
        name: "Psyduck",
        description: `Este pokemon es ...`,
        
        type: "water"
    },
    {
        id: 55,
        name: "Golduck",
        description: `Este pokemon es ...`,
        
        type: "water"
    },]

