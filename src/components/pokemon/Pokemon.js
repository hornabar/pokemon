// @flow

import React, { Component } from 'react';
import './pokemon.css';
import imgClose from '../../images/close.svg';


class Pokemon extends Component {

    constructor(props: object) {
        super(props);

        this.state= {
            isOpened: false
        };

        this.imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
        this.openDetail = this.openDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    openDetail(e: Event) {
        e.stopPropagation();
        this.setState({
            isOpened: true
        });
    }

    closeDetail(e: Event) {
        e.stopPropagation();
        this.setState({
            isOpened: false
        });
    }

    render(): React.Node  {
        const {isOpened } = this.state;
        const { name, id } = this.props;
        // const detail =

        return (
            <div className={'pokemon'}>
                <div className={'pokemon__link'} onClick={this.openDetail}>
                    {name}
                </div>

                {isOpened &&
                    <div className={'pokemon__detail'}>
                        <div className={'pokemon__detail__content'}>
                            <img className={'pokemon__detail__close'} src={imgClose} alt={'Close'}
                                 onClick={this.closeDetail}/>
                            <img className={'pokemon__detail__img'} src={`${this.imageUrl}${id}.png`} alt={name}/>
                            <div className={'pokemon__detail__name'}>
                                {name}
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default Pokemon;
