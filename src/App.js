import React,{useState} from 'react';
import logo3 from './assets/logo3.png'
import logo2 from './assets/logo2.png'
import { GoRepoForked, GoStar } from "react-icons/go";
import './styles.css'
import api from './services/api'

function App() {

  const [user, setUser] = useState('');
  const [userLabel, setUserLabel] = useState('');
  const [urlImage, setUrl] = useState('');
  const [bio, setBio] = useState('');
  const repos = ['repo', 'repo', 'repo', 'repo'];

  async function requestData(e){
    e.preventDefault();
    try{
      const response = await api.get(`/users/${user}`);

      const avatar_url = response.data.avatar_url;
      const profile_bio = response.data.bio;
      
      setBio(profile_bio);
      setUrl(avatar_url);
      setUserLabel(user);
      console.log(response);
    } catch(err){
      alert('Invalid Username');
    }
  }

  return (
    <div className="full-container">
      <div className="left-container">
        <form className="user-form" onSubmit={requestData}>
          <img src={logo3} alt="img"/>
        <p>Digite um username </p>
        <input placeholder="Username" value={user} onChange={e => setUser(e.target.value)} className="input-class"/>
        <button type="submit" className="button"> Confirmar </button>
        </form>
        </div>
      <div className="right-container">
      <div className="userInfo-container">
        {userLabel !=='' ?(
          <p className="user-p">Bem vindo, {userLabel}</p>
        ): <p className='user-p'> Encotre perfis no Github!</p>}
          <div className= 'div-informations'>
        {userLabel !== '' ? (
          <img src={urlImage} width="150px" height="150px" alt="img"/>           
        ) : <img src={logo2} alt="img"/>}
            <div>
              {userLabel !== '' ? (
                <i>{bio}</i>
              ): <p>Encontre informações sobre perfis do github!</p>}
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
