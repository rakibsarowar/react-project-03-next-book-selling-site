import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './component/Home/Header/Header';

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      <Outlet></Outlet>
      {/* Footer */}
  </div>
  );
};

export default App;