// @flow

import React from 'react';

const SectionHeading = (props: object): React.Node => (
    <h1 className="section__heading">
        {props.text}
    </h1>
);

export default SectionHeading;
