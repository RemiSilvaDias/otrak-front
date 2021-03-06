/* eslint-disable react/prop-types */

// Import NPM
import React from 'react';

// Import the spring library (fade in modal entry effect)
import { useSpring, animated } from 'react-spring';


const Fade = React.forwardRef((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0, outline: 'none' },
    to: { opacity: open ? 1 : 0, outline: 'none' },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default Fade;
