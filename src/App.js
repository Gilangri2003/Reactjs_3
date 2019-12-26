import React from 'react';
import Kursus from './state/state';
import Materi from './props/props'
import './props/style.css'

function App() {
  return (
    <div className="wrapperapp">
      <Kursus/>
      <p>contoh state</p>
      <hr/>
      <Materi img={require('./props/img1.PNG')} des="belajar seo" harga="Rp.120.000,-"/>
      <Materi img={require('./props/img2.PNG')} des="belajar google adword" harga="Rp.400.000,-"/>
      <Materi img={require('./props/img1.PNG')} des="belajar React JS" harga="Rp.500.000,-"/>

    </div>
  );
}

export default App;