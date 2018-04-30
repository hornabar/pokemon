import React from 'react';
import Header from '../header/Header';
import './app.css';
import PokemonList from "../pokemon/PokemonList";
import Section from "../section/Section";
import SectionHeading from "../section/SectionHeading";

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
