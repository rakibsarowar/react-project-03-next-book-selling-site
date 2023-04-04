import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <h1>This is App</h1>
    {/* To show where children set , need to use place holder in below called OutLet. */}
    <Outlet></Outlet>
  </div>
  );
};

export default App;