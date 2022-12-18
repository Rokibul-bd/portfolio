import React from 'react';
import Typed from 'typed.js';

const TypedReactHooks = () => {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                '<b>React Js</b>',
                '<b>Node Js</b>',
                '<strong>MongoDB</strong>',
                '<strong>Firebase</strong>'
            ],
            typeSpeed: 120,
            backSpeed: 120,
            loop: true,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span className='text-primary' style={{ whiteSpace: 'pre' }} ref={el} />
            </div>
        </div>
    )
};

export default TypedReactHooks;

