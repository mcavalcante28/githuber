import React from 'react';

import './styles.css'
function App() {
  return (
    <div className="full-container">
      <div className="left-container">
        <form className="user-form">
        <p> Githuber </p>
        <input placeholder="Digite um username" className="input-class"/>
        <button type="submit" className="button"> Confirmar </button>
        </form>
        <div className="userInfo-container">
        </div>
        </div>
      <div className="right-container"> 
      <section className="section-items">
        section
      </section>
      </div>
    </div>

  );
}

export default App;
