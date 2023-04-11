import React from 'react';

const ResetButton = (props) => {
  const handleReset = () => {
    /* Reset logic here */
  }

  return (
    <button className="reset-button" onClick={handleReset}>
      {/* Reset button content here */}
    </button>
  );
}

export default ResetButton;
