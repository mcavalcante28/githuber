import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
  background-color: ${props => !props.theme.mode ? '#f6f8fa' : '#24292e'};
  color: ${props => !props.theme.mode ? '#24292e' : '#f6f8fa'};
  font: 400 14px Roboto, sans-serif;
  box-sizing: border-box;
}
.full-container{ 
  width:100%;
  max-width:1120px;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 30px;
  flex-direction: row;
  border: ${props => !props.theme.mode ? '2px solid #24292e' : '2px solid #f6f8fa'};
}
.left-container{
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  background-color: ${props => !props.theme.mode ? '#f6f8fa' : '#24292e'};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  transition-duration: 0.3s;

}
.user-form{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.user-form p{
  font-size: 30px;
  color: background-color: ${props => !props.theme.mode ? '#f6f8fa' : '#24292e'};
}

.button{
  border-radius: 30px;
  width: 50%;
  height: 8%;
  transition-duration: 0.2s;
  background-color: ${props => !props.theme.mode ? '#f6f8fa' : '#24292e'};
  font-size: 16px;
  color: ${props => !props.theme.mode ? '#24292e' : '#f6f8fa'};
  font-weight: bold;
  transition-duration: 0.3s;
}

.button:hover{
  background-color: ${props => !props.theme.mode ? '#24292e' : '#f6f8fa'};;
  color: ${props => !props.theme.mode ? '#f6f8fa': '#24292e'};
  transition-duration: 0.3s;
}

.input-class{
  border-radius: 10px;
  width: 70%;
  height: 5%;
  text-align: center;
  font-weight: bold;
  color: #24292e;
}

.right-container{
  background-color: ${props => !props.theme.mode ? '#f6f8fa': '#24292e'};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-top-right-radius: 30px;
  justify-content: space-around;
  align-items: center;
  transition-duration: 0.3s;

}

.section-items{
  background-color:${props => !props.theme.mode ? '#24292e':'#f6f8fa'};
  display: flex;
  width: 90%;
  height: 30%;
  border-radius: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition-duration: 0.3s;
}

.section-items div{
  background-color:${props => !props.theme.mode ? '#f6f8fa': '#24292e'};
  color: ${props => !props.theme.mode ? '#24292e': '#f6f8fa'};
  font-weight: bold;
  height: 60%;
  width: 22%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  align-items: center;
  justify-content: space-around;
  transition-duration: 0.3s;
}

.section-items div div{
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  transition-duration: 0.3s;
}

.section-items div p{
  font-size: 13px;
  text-align: center;
}

.userInfo-container{
  display: flex;
  color: ${props => !props.theme.mode ? '#24292e': '#f6f8fa'};
  flex-direction: column;
  width: 90%;
  height: 50%;
  justify-content: space-between;
  align-items: flex-start;
}

.userInfo-container p.user-p{
  font-size: 30px;
  font-weight: bold;
  text-align: start;
}

.userInfo-container div{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.userInfo-container div div{
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.userInfo-container i{
  font-size: 12px;
  font-weight: lighter;
}
.userInfo-container p{
  font-size: 12px;
  font-weight: lighter;
}
.div-informations{
  justify-content: space-around;
  align-items: center;
  border: ${props => !props.theme.mode ? '2px solid #24292e' : '2px solid #f6f8fa'};
  border-radius: 10px;
  padding: 40px;
}

.switch-style{
  border-radius: 45%;
  background-color: ${props => !props.theme.mode ? '#f6f8fa':'#24292e'};
}

`

