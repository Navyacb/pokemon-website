import { rest } from 'msw';

const fetchCategoryDataMock = [
    rest.get(`https://pokeapi.co/api/v2/type/`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "count": 20,
            "next": null,
            "previous": null,
            "results": [
                {
                    "name": "normal",
                    "url": "https://pokeapi.co/api/v2/type/1/"
                },
                {
                    "name": "fighting",
                    "url": "https://pokeapi.co/api/v2/type/2/"
                },
                {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                },
                {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                },
            ]}
        )
      );
    })
];
export const pokemonList = {
    "count": 5,
    "next": null,
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
    ]}


const fetchPokemonListMock = [
    rest.get(`https://pokeapi.co/api/v2/pokemon`, (_req, res, ctx) => {

        if(_req.url.searchParams.get('limit') === '5'){
            return res(
                ctx.status(200),
        
                ctx.json( pokemonList)
              );
        }
      return res(
        ctx.status(200),
  
        ctx.json(pokemonList ));
    })

];


const fetchSelectedPokemonListMock = [
    rest.get(`https://pokeapi.co/api/v2/type/normal`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "pokemon": [
                {
                    "pokemon": {
                        "name": "bulbasaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/1/"
                    }
                },
                {
                    "pokemon": {
                        "name": "ivysaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/2/"
                    }
                },
                {
                    "pokemon": {
                        "name": "venusaur",
                        "url": "https://pokeapi.co/api/v2/pokemon/3/"
                    }
                },
            ]}
        )
      );
    })
];

const fetchSelectedPokemonList2Mock = [
    rest.get(`https://pokeapi.co/api/v2/type/poison`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "pokemon": [
                {
                    "pokemon": {
                        "name": "charmander",
                        "url": "https://pokeapi.co/api/v2/pokemon/4/"
                    }
                }
            ]}
        )
      );
    })
];

const fetchPokemonImage1Mock = [
    rest.get(`https://pokeapi.co/api/v2/pokemon/1/`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "name": "bulbasaur",
            "sprites": {
                other:{
                    home:{
                        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                    }
                }
            },
            "types": [
                {
                    "slot": 1,
                    "type": {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        }
        )
      );
    })
];

const fetchPokemonImage2Mock = [
    rest.get(`https://pokeapi.co/api/v2/pokemon/2/`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "name": "ivysaur",
            "sprites": {
                other:{
                    home:{
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
                    }
                }
            },
            "types": [
                {
                    "slot": 1,
                    "type": {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        }
        )
      );
    })
];

const fetchPokemonImage3Mock = [
    rest.get(`https://pokeapi.co/api/v2/pokemon/3/`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "name": "venusaur",
            "sprites": {
                other:{
                    home:{
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
                    }
                }
            },
            "types": [
                {
                    "slot": 1,
                    "type": {
                        "name": "grass",
                        "url": "https://pokeapi.co/api/v2/type/12/"
                    }
                },
                {
                    "slot": 2,
                    "type": {
                        "name": "poison",
                        "url": "https://pokeapi.co/api/v2/type/4/"
                    }
                }
            ]
        }
        )
      );
    })
];

const fetchPokemonImage4Mock = [
    rest.get(`https://pokeapi.co/api/v2/pokemon/4/`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
  
        ctx.json( {
            "name": "charmander",
            "sprites": {
                other:{
                    home:{
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
                    }
                }
            },
            "types": [
                {
                    "slot": 1,
                    "type": {
                        "name": "fire",
                        "url": "https://pokeapi.co/api/v2/type/10/"
                    }
                }
            ]
        }
        )
      );
    })
];


export const fetchPokemonImageMock = [
    ...fetchPokemonImage1Mock,
    ...fetchPokemonImage2Mock,
    ...fetchPokemonImage3Mock,
    ...fetchPokemonImage4Mock
]

export const pokemonAPIMock = [
    ...fetchCategoryDataMock,
    ...fetchPokemonListMock,
    ...fetchSelectedPokemonListMock,
    ...fetchSelectedPokemonList2Mock,
    ...fetchPokemonImageMock
]