import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { axiosBase } from './api/api';

function App() {
  useEffect(() => {
    axiosBase.get('/').then(({ data }) => console.log(data))
  }, [])
  return (
    <div className="App">
      <h3>Hello</h3>

    </div>
  );
}

export default App;
