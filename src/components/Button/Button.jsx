import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
