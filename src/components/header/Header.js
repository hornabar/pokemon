// @flow

import React from 'react';
import './header.css';

const Header = (props: object): React.Node => (
	<header className="header">
		<div className="header__container">
			<div className="header__logo">
				Pokemons App
			</div>
		</div>
	</header>
);

export default Header;
