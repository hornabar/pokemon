// @flow

import React from 'react';
import './section.css'

const Section = ({ children}): React.Node => (
    <section className={'section'}>
        {children}
    </section>
);

export default Section;

