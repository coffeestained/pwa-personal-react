import React from 'react';

const Input = ({ children, style, onChange }) => {
  return (
    <input style={style} onChange={onChange}>
      {children}
    </input>
  );
};

export default Input;