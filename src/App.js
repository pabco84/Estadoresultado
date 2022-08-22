import './App.css';
import Input from'./components/Input';
import React, {useState} from 'react';
import Button from './components/Button';

function App() {
  const [password, ] = useState('252525');
  const [isPasswordValid, setIsPasswordValid] = useState(false);


  return (
    <>
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input password={password} setIsPasswordValid={setIsPasswordValid} />
      {isPasswordValid ? <Button /> : null}
    </>
  );
}

export default App;
