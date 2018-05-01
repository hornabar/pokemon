import React from 'react';
import Header from 'components/header/Header';
import './app.css';
import PokemonList from 'components/pokemon/PokemonList';
import Section from 'components/section/Section';
import SectionHeading from 'components/section/SectionHeading';

const App = (props) => (
  <div>
    <Header />
    <main>
        <Section>
            <SectionHeading text={'Pokemons'}/>
            <PokemonList/>
        </Section>
    </main>
  </div>
);

export default App;
