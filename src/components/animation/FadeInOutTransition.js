import React from 'react';
import {Transition, TransitionGroup} from 'react-transition-group'

const FadeInOutTransition = ({children, duration: number, inProp: bool}): React.Node => {

    const defaultStyle = {
        transition: `${this.duration}ms ease-in`,
        transitionProperty: 'opacity, transform'
    };

    const transitionStyles = {
        entering: {
            opacity: 0,
        },
        entered: {
            opacity: 1,
        }
    };

    return (
        <TransitionGroup>
            <Transition in={this.inProp} timeout={{enter: 300, exit: this.duration}}>
                {(state) => (
                         <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                              }}>
                                I'm a fade Transition!
                              </div>
                       )}
            </Transition>
        </TransitionGroup>
    )
};

export default FadeInOutTransition;
