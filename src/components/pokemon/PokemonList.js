import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import Loader from 'components/loader/Loader';
import Error from "components/error/Error";
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
            return <Error text={error.message} />
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
            return <Loader />
        }
    }
}

export default PokemonList;
