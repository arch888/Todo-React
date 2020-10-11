import React from 'react';
import './App.css';
import Todos from './components/ToDos';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
