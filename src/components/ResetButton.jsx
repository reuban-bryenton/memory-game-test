import React from 'react';

const ResetButton = (props) => {
  const handleReset = () => {
    props.reset();
  }

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset
    </button>
  );
}

export default ResetButton;
