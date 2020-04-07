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
  const [countR, setRepo] = useState('');
  const [countF, setFoll] = useState('');

  const repos = ['repo1', 'repo2', 'repo3', 'repo4'];

  var countStars = [];
  var getIndexStars = [];

  function getIndex(element, index, array){
    for (var i = 0; i < array.length; i++) {
      if(element > array[i]){
        getIndexStars[i] = index;
      }
   }
  }

  async function requestData(e){
    e.preventDefault();
    try{
      const response = await api.get(`/users/${user}`);
      const getRepos = await api.get(`users/${user}/repos`)

      getRepos.data.map((repos, index) =>(
        countStars[index] = getRepos.data[index].stargazers_count
      ))

    console.log(getIndexStars);

      const avatar_url = response.data.avatar_url;
      const profile_bio = response.data.bio;
      const countRepo = response.data.public_repos;
      const countFollows = response.data.followers;


      setRepo(countRepo);
      setFoll(countFollows);
      setBio(profile_bio);
      setUrl(avatar_url);
      setUserLabel(user);


    } catch(err){
      alert('Invalid Username');
    }
    countStars.forEach(getIndex);
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
              {userLabel !== '' ? (
                <div>
                <i>{bio}</i>
                <p>Número de Repositórios: {countR}</p>
                <p>Número de Seguidores: {countF}</p>
                </div>
              ): <p>Encontre informações sobre perfis do github!</p>}
          </div>
        </div> 
      <section className="section-items">
        {repos.map(index =>(
          <div key={index}>
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
