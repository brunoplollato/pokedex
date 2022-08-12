import { gql } from "@apollo/client"
import client from "../../apollo-client"

export const searchPokemon = async (pokemon: string) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url: string) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const fetchNext = async (url: string) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("error: ", error)
    }
}

export const searchPokemonGQL = async (pokemon: string) => {
    try {
        const { data } = await client.query({
            query: gql`
                query ($pokemon: String = ${pokemon}) {
                    pokemon_v2_pokemon(where: {name: {_like: $pokemon}}) {
                        id
                        name
                        pokemon_v2_pokemontypes(where: {}) {
                        pokemon_v2_type {
                            name
                        }
                        }
                        pokemon_v2_pokemonsprites(where: {}) {
                        sprites
                        }
                    }
                }
            `,
        })
        return await data;
    } catch (error) {
        console.log("error: ", error)
    }
}