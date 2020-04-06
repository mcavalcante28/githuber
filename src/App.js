import React from 'react';
import logo3 from './assets/logo3.png'
import logo from './assets/logo.png'
import { GoRepoForked, GoStar } from "react-icons/go";
import './styles.css'

function App() {

  const repos = ['repo', 'repo', 'repo', 'repo'];

  return (
    <div className="full-container">
      <div className="left-container">
        <form className="user-form">
          <img src={logo3} alt="img"></img>
        <p>Digite um username </p>
        <input placeholder="Username" className="input-class"/>
        <button type="submit" className="button"> Confirmar </button>
        </form>
        <div className="userInfo-container">
          <p>Bem vindo, USER</p>
          <img src={logo} alt="img"></img>
          <p> Followers: 30</p>
          <p> Repositories: 30 </p>
        </div>
        </div>
      <div className="right-container"> 
      <section className="section-items">
        {repos.map(item =>(
          <div>
          <p> NOME </p>
          <p> 
          <GoRepoForked size={16} color="#F2F2F2" />
           Forks: 30
          </p>
          <p> 
          <GoStar size={16} color="#F2F2F2" />
           Stars: 20
          </p>
        </div>
        ))}
      </section>
      </div>
    </div>

  );
}

export default App;
