import { useRef, useState } from 'react';
import './App.css';
import data from './data.js';


function App() {

  const [veri, setVeri] = useState([]);
  const sayac = useRef();

  return (
    <div className="App">
     <p className='header'>TIRED OF BORING LOREM IPSUM?</p>
     <div className='middle'>
      <span className='mtext'>Paragraphs</span>
      <input type="number" placeholder="0" className='giris' ref={sayac}/>
      <button className='btn' onClick={(()=>{
        let sira = parseInt(sayac.current.value);
        if (sira > 8) sira = 8;

        setVeri(data.slice(0, sira ));
      })}>generate</button>
     </div>
     <div className='textAlani'>
      {veri.map((item, index)=>{
        return <p className='eleman' key={index}>{item}</p>
      })}
     </div>
    </div>
  );
}

export default App;
