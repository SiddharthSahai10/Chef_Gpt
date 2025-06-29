import { useState, useEffect } from 'react'
import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('🎯 App component mounted successfully');
  }, []);

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
