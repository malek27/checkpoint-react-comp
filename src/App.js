import React from 'react';
import './App.css';
import ProfilPhoto from './component/profile/ProfilPhoto/ProfilPhoto';
import FullName from './component/profile/FullName/FullName';
import Adress from './component/profile/Adress/Adress';
function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
