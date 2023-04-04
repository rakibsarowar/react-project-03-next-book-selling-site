import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* Header */}
      <Outlet></Outlet>
      {/* Footer */}
  </div>
  );
};

export default App;