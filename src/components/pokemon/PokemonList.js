// @flow

import React, { Component } from 'react';
import './pokemon-list.css';
import PokemonItem from "./PokemonItem";

class PokemonList extends Component {


    constructor(props: object) {
        super(props);

        this.state = {
            isLoaded: false,
            pokemons: []
        };

        this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        this.limit = 9;
    }

    parsePokemonId(pokemon: Array): number {
        const re = /\/pokemon\/(\d+)/;
        const match =  pokemon.url.match(re);
        return match ? match[1] : null;
    }

    createPokemon(pokemon: Array): object {
        return {'id': this.parsePokemonId(pokemon), 'name' : pokemon.name}
    }

    addPokemons(pokemons: Array) {
        let newPokemons = [];
        pokemons.forEach((pokemon) => (
           newPokemons.push(this.createPokemon(pokemon))
        ));

        this.setState({
            isLoaded: true,
            pokemons: newPokemons

        });
    }

    componentDidMount() {
        fetch(`${this.apiUrl}?limit=${this.limit}` )
            .then(res => res.json())
            .then(
                (result) => {
                    this.addPokemons(result.results)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(): React.Node {
        const { error, isLoaded, pokemons } = this.state;

        if (error) {
            return <div className="pokemon-list__empty">Error: {error.message}</div>
        } else if (isLoaded){
            return (
                <div className={'pokemon-list__list'}>
                    {pokemons.map( (pokemon) => (
                        <div className={'pokemon-list__item'} key={pokemon.id}>
                            <PokemonItem pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            )
        } else {
            return <div className="pokemon-list__empty">Fetching...</div>
        }
    }
}

export default PokemonList;
