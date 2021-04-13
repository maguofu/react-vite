import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import style from './App.module.css';
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    fetch('/omsdata/company/deliverarea').then(res => {
      return res.json();
    }).then(res2 => {
      console.log(res2);
    }).catch(e=>{
      console.log(e);
    })
  }, []);
  return (
    <div className={style.App}>
      <header className={style['App-header']}>
        <img src={logo} className={style['App-logo']} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={style['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={style['App-link']}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
