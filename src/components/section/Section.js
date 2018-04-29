// @flow

import React from 'react';
import './section.css'

const Section = ({ heading,  children}): React.Node => (
    <section className={'section'}>
        {children}
    </section>
);

export default Section;

