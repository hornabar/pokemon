import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PokemonDetail from './PokemonDetail';
import './pokemon.css';


class PokemonItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
        };

        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    openDetail(e) {
        this.setState({
            isOpened: true,
        });
    }

    closeDetail(e) {
        e.stopPropagation();
        this.setState({
            isOpened: false,
        });
    }

    render() {
        const {isOpened} = this.state;
        const {pokemon} = this.props;

        return (
            <div className={'pokemon'}>
                <div className={'pokemon__link'} onClick={this.openDetail}>
                    {pokemon.name}
                </div>
                <CSSTransition
                    in={isOpened}
                    timeout={300}
                    classNames="transition--opacity"
                    unmountOnExit
                >
                    <PokemonDetail pokemon={pokemon} onClose={this.closeDetail} key={pokemon.name} />
                </CSSTransition>
            </div>
        )
    }
}

export default PokemonItem;
