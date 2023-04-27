import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import { useState } from 'react';
import Num from './components/number';

function App() {
  const [name, setName] = useState('one');

  return (
    <>
      <h2>{name}</h2>
      <h1>Heading1</h1>
      <About />
      <Contact />
      <Num />
    </>
  );
}

export default App;
