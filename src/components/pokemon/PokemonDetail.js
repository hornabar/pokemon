import React from 'react';
import './pokemon.css';
import imgClose from '../../images/close.svg';

const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokemonDetail = ({id, name, onClose }) =>  (
    <div className={'pokemon__detail'}>
        <div className={'pokemon__detail__content'}>
            <img className={'pokemon__detail__close'} src={imgClose} alt={'Close'}
                 onClick={onClose}/>
            <img className={'pokemon__detail__img'} src={`${imageUrl}${id}.png`} alt={name}/>
            <div className={'pokemon__detail__name'}>
                {name}
            </div>
        </div>
    </div>
);

export default PokemonDetail;
