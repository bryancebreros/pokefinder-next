export interface Ability {
    ability: {
        name: string
        url: string
    }
    is_hidden: boolean
}

export interface Stat {
    base_stat: number
}

export interface Type {
    type: {
        name: string

    }
}

export interface Pokemon {
    name: string
    abilities: Ability[]
    id: number
    sprites: {
        other: {
            home: {
                front_default: string
            }
        }
    }
    stats: Stat[]
    types: Type[]
    url: string 
}
export interface UnoPokemon{
    singlePokemon: Pokemon
}