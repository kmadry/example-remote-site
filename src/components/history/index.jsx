import React from 'react';
import { Outlet } from 'react-router-dom';

const History = () => {
  return (
    <div>
      History
      <Outlet />
    </div>
  );
}

export default History;
