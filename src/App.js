import React from 'react';
import logo3 from './assets/logo3.png'
import logo2 from './assets/logo2.png'
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
        </div>
      <div className="right-container">
      <div className="userInfo-container">
          <p className="user-p">Bem vindo, USER</p>
          <div>
            <img src={logo2} alt="img"></img> 
            <div>
              <p> Followers: 30</p>
              <p> Repositories: 30 </p>
            </div>
          </div>
          <p className="user-p">Top 4 Repositórios:</p>
        </div> 
      <section className="section-items">
        {repos.map(item =>(
          <div>
          <p> NOME </p>
          <div>
          <p> 
          <GoRepoForked size={16} color="#F2F2F2" />30
          </p>
          <p> 
          <GoStar size={16} color="#F2F2F2" />20
          </p>
          </div>
        </div>
        ))}
      </section>
      </div>
    </div>

  );
}

export default App;
