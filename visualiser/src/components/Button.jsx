import React from 'react';

export default ({ children }) => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{children}</button>
      <p>{count}</p>
    </>
  );
};
