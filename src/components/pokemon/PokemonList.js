// @flow

import React, { Component } from 'react';
import './pokemon-list.css';
import Pokemon from "./Pokemon";

class PokemonList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            pokemons: []
        };

        this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        this.limit = 9;
    }

    componentDidMount() {
        fetch(`${this.apiUrl}?limit=${this.limit}` )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pokemons: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getPokemonId(pokemon: Array): number {
        const re = /\/pokemon\/(\d+)/;
        const match =  pokemon.url.match(re);
        return match ? match[1] : null;
    }


    render() {
        const { error, isLoaded, pokemons } = this.state;

        if (error) {
            return <div className="pokemon-list__empty">Error: {error.message}</div>
        } else if (isLoaded){
            return (
                <div className={'pokemon-list__list'}>
                    {pokemons.map( (pokemon) => (
                        <div className={'pokemon-list__item'} key={pokemon.uniqueId}>
                            <Pokemon id={this.getPokemonId(pokemon)} name={pokemon.name} />
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
