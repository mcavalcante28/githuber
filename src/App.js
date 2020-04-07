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
  const [name, setName] = useState([]);
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  var repos = [];
  var countStars = [];
  var getIndexStars = [];
  var forkss = [];
  var starss = [];
  
  function getTop4(){
    for( var i = 0; i < 4; i++){
      for(var j=0; j < countStars.length; j++){
        var max = Math.max(...countStars);
        if(countStars[j] === max){
          getIndexStars[i] = j;
          countStars[j] = 0;
        } 
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
      console.log(getRepos);
      getTop4();

      getIndexStars.map((rep, index) => (
        repos[index] = getRepos.data[rep].name
      ))
      getIndexStars.map((rep, index) => (
        starss[index] = getRepos.data[rep].stargazers_count
      ))
      getIndexStars.map((rep, index) => (
        forkss[index] = getRepos.data[rep].forks_count
      ))


      setName(repos);
      setForks(forkss);
      setStars(starss);

      const avatar_url = response.data.avatar_url;
      const profile_bio = response.data.bio;
      const countRepo = response.data.public_repos;
      const countFollows = response.data.followers;


      setRepo(countRepo);
      setFoll(countFollows);
      setBio(profile_bio);
      setUrl(avatar_url);
      setUserLabel(user);
      setUser('');


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
        {name.map((names, index) =>(
          <div key={index}>
            <div>
            <p>{name[index]}</p>
            </div>
          <div>
          <p> 
          <GoRepoForked size={16} color="#F2F2F2" /> {forks[index]}
          </p>
          <p> 
          <GoStar size={16} color="#F2F2F2" /> {stars[index]}
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
