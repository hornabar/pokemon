import TransitionGroup from 'react-transition-group/TransitionGroup'

// ...

<TransitionGroup component={Board}>
    {
        cards.map(card => {
        return (
            <li className="board__item" key={card.id}>
                <Card onRemove={() => {
                    this.removeCard(card.id)
                }}>{card.content}</Card>
            </li>
        )
    })
}
</TransitionGroup>

// ...
But if you run the app and start adding cards, you will notice that cards still pop in and out of existence like before. This is because we haven't yet defined how our cards should behave as they are added or removed. In order to do that, we need to wrap each of our cards in a <Transition /> component.

Using <Transition />
The <Transition /> component from React Transition Group allows us to define how a component should behave when it is rendered or about to be removed from the DOM.

The state of a component being added or removed is handled via an in prop. This prop is a boolean value that indicates if the component should be shown or not. A value of true means the component should be shown, and false means the component should be hidden.

The value of in is provided by <TransitionGroup />, which will set this prop to true when a component is being added, and to false when a component is removed.

A change in the value of the in prop will trigger a series of status changes over a period of time. These status changes allow us to animate a component by applying different styles to it as the status of the transition changes.

We're going to create a <FadeAndSlideTransition /> component that can be used to apply a transition animation to a component as it is mounted and unmounted.

Here is the code for that component:

import Transition from 'react-transition-group/Transition'

// <FadeAndSlideTransition /> is a component that wraps children in
// a <Transition /> component.
// 'children' is the element to be animated.
// 'duration' is the duration of the animation in milliseconds.
// The `in` prop will be provided by <TransitionGroup />.
function FadeAndSlideTransition ({children, duration, in: inProp}) {
    // Styles to set on children which are necessary in order
    // for the animation to work.
    const defaultStyle = {
    // Transition "opacity" and "transform" CSS properties.
    // Set duration of the transition to the duration of the animation.
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform'
}

    // Styles that will be applied to children as the status
    // of the transition changes. Each key of the
    // 'transitionStyles' object matches the name of a
    // 'status' provided by <Transition />.
    const transitionStyles = {
    // Start with component invisible and shifted up by 10%
    entering: {
    opacity: 0,
    transform: 'translateY(-10%)'
},
    // Transition to component being visible and having its position reset.
    entered: {
    opacity: 1,
    transform: 'translateY(0)'
},
    // Fade element out and slide it back up on exit.
    exiting: {
    opacity: 0,
    transform: 'translateY(-10%)'
}
}

    // Wrap child node in <Transition />.
    return (
    <Transition in={inProp} timeout={{
        // Set 'enter' timeout to '0' so that enter animation
        // will start immediately.
        enter: 0,

        // Set 'exit' timeout to 'duration' so that the 'exited'
        // status won't be applied until animation completes.
        exit: duration
    }}>
    {
        // Children is a function that receives the current
        // status of the animation.
        (status) => {
            // Don't render anything if component has 'exited'.
            if (status === 'exited') {
                return null
            }

            // Apply different styles to children based
            // on the current value of 'status'.
            const currentStyles = transitionStyles[status]
            return React.cloneElement(children, {
                style: Object.assign({}, defaultStyle, currentStyles)
            })
        }
    }
    </Transition>
    )
}