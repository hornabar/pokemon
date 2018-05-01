import React, {Component} from 'react';
import './pokemon.css';
import imgClose from '../../images/close.svg';

class PokemonDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            pokemon: this.props.pokemon,
            error: null,
        };
    }

    componentDidMount() {
        fetch(this.state.pokemon.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pokemon: {
                            ...this.state.pokemon,
                            img: result.sprites.front_default,
                        }
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
        const {error, isLoaded, pokemon} = this.state;
        const {onClose} = this.props;
        let content = '';

        if (error) {
            content = (
                <div className="pokemon-list__empty">Error: {error.message}</div>
            )
        } else if (isLoaded){
            content = (
                <fragment>
                    <img className={'pokemon__detail__img'} src={pokemon.img} alt={pokemon.name} />
                    <div className={'pokemon__detail__name'}>
                        {pokemon.name}
                    </div>
                </fragment>
            )
        } else {
            content = (
                <div className="pokemon-list__empty">Fetching...</div>
            )
        }
        return (
            <div className={'pokemon__detail'}>
                <div className={'pokemon__detail__content'}>
                    <img className={'pokemon__detail__close'} src={imgClose} alt={'Close'} onClick={onClose} />
                    {content}
                </div>
            </div>
        )
    }
}

export default PokemonDetail;
