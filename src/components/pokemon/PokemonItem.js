import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';
import './pokemon.css';
import PokemonDetail from "./PokemonDetail";


class PokemonItem extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isOpened: false
        };

        this.animationProps = {
            startAnimation: true,
            startStyle: { opacity: 0 },
            endStyle: { opacity: 1 },
        };
        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    openDetail(e) {
        e.stopPropagation();
        this.setState({
            isOpened: true
        });
    }

    closeDetail(e) {
        e.stopPropagation();
        this.setState({
            isOpened: false,
        });
    }

    render() {
        const {isOpened } = this.state;
        const { pokemon } = this.props;

        return (
            <div className={'pokemon'}>
                <div className={'pokemon__link'} onClick={this.openDetail}>
                    {pokemon.name}
                </div>
                    <CSSTransition
                        in={isOpened}
                        timeout={300}
                        classNames="animation--opacity"
                        unmountOnExit
                    >
                        <PokemonDetail {...pokemon} onClose={this.closeDetail} key={pokemon.name} />
                    </CSSTransition>
            </div>
        )
    }
}

export default PokemonItem;
