import React from 'react';

const Button = (props) => {
  return <button onClick={props.callApi}>
    Click to generate a quote.
  </button>;
}

export default Button;