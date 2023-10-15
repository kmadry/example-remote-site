import React from 'react';
import style from './App.module.css';
import _ from 'lodash';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className={style.App}>
      <Button variant="contained">Klik example-remote-site</Button>    
      Remote site - content changes
      <p>
        Lodash v - {_.VERSION}
      </p>
    </div>
  );
}

export default App;
