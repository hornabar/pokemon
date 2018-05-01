import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './pokemon-list.css';

class PokemonList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            pokemons: [],
            error: null,
        };

        this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        this.limit = 9;
    }

    parsePokemonId(pokemon) {
        const re = /\/pokemon\/(\d+)/;
        const [_, pokemonId] = pokemon.url.match(re);
        return pokemonId    ;
    }

    createPokemon(pokemon) {
        return {"id": this.parsePokemonId(pokemon), "name" : pokemon.name}
    }

    addPokemons(pokemons) {
        let newPokemons = [];
        pokemons.forEach((pokemon) => (
           newPokemons.push(this.createPokemon(pokemon))
        ));

        this.setState({
            isLoaded: true,
            pokemons: newPokemons,

        });
    }

    componentDidMount() {
        fetch(`${this.apiUrl}?limit=${this.limit}` )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pokemons: result.results,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, pokemons} = this.state;

        if (error) {
            return <div className="pokemon-list__empty">Error: {error.message}</div>
        } else if (isLoaded){
            return (
                <div className={'pokemon-list__list'}>
                    {pokemons.map( (pokemon) => (
                        <div className={'pokemon-list__item'} key={pokemon.name}>
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
