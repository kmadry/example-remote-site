import React from 'react';
import style from './App.module.css';
import _ from 'lodash';

function App() {
  return (
    <div className={style.App}>
      Remote site - content changes
      <p>
        Lodash v - {_.VERSION}
      </p>
    </div>
  );
}

export default App;
