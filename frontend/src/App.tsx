import React from 'react';
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import AuthPanel from './components/AuthPanel';

function App() {

  const [isAuth, setIsAuth] = React.useState(false);



  return (
    <>
      <Header />
      <AuthPanel />
      <Home />
    </>
  )
}

export default App
