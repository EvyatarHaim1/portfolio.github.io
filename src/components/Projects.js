import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import airbnb from '../images/airbnb.png';
import instagram from '../images/instagram.png';
import amazon from '../images/amazon.png';
import FB_Messenger from '../images/FB_Messenger.png';
import spotify from '../images/spotify.png';
import netflix from '../images/netflix.png';
import todoList from '../images/todoList.png';
import COVID19 from '../images/COVID-19.png';

function Home() {
    return (
        <Div id="Projects">
            <h1>RECENT PROJECTS</h1>
            <Home_section>
                 <Card 
                      src={airbnb}
                      title="Airbnb"
                      github="https://github.com/EvyatarHaim1/Airbnb-React"
                      appUrl=" https://airbnb-react-evyatar.web.app/"
                />

                <Card 
                      src={amazon}
                      title="Amazon"
                      github="https://github.com/EvyatarHaim1/Amazon"
                      appUrl=" https://evyatar-1ea31.web.app/"
                />

                <Card 
                      src={netflix}
                      title="Netflix"
                      github="https://github.com/EvyatarHaim1/Netflix-React"
                      appUrl="https://netflix-evyatar.web.app/"
                />

            </Home_section>

            <Home_section>

                <Card 
                      src={spotify}
                      title="Spotify"
                      github="https://github.com/EvyatarHaim1/Spotify-React"
                      appUrl=" https://spotify-evyatar.web.app/"
                />

                <Card 
                      src={instagram}
                      title="Instagram-React"
                      github="https://github.com/EvyatarHaim1/Instagram-React"
                      appUrl=" https://instagram-evyatar.web.app/"
                />

                <Card 
                      src={FB_Messenger}
                      title="Facebok Messenger"
                      github="https://github.com/EvyatarHaim1/Facebook-Messenger-React"
                      appUrl="https://facebook-messenger-evyatar.web.app/"
                />
               
               </Home_section>

               <Home_section>

               <Card 
                      src={todoList}
                      title="Todo-List"
                      github="https://github.com/EvyatarHaim1/TODO-React-app"
                      appUrl="https://evyatar-todo-app-react.web.app/"
                />

                <Card 
                      src='https://github.com/EvyatarHaim1/Guessing_Languages_Words/raw/master/Assets/view.png?raw=true'
                      title="Guessing Languages Words - Unity 2D"
                      github="https://github.com/EvyatarHaim1/Guessing_Languages_Words"
                      appUrl="https://sharemygame.com/@EvyatarHaim/guessing-languages-words"
                />

               <Card 
                      src="https://github.com/EvyatarHaim1/MyBurger/raw/master/src/assets/images/view.png?raw=true"
                      title="My-Burger"
                      github="https://github.com/EvyatarHaim1/MyBurger"
                      appUrl="https://react-my-burger-40e0c.web.app/"
                />
               
               </Home_section>

               <Home_section>

               <Card 
                      src={COVID19}
                      title="COVID-19 TRACKER"
                      github="https://github.com/EvyatarHaim1/COVID-19-Tracker-React"
                      appUrl="https://covid-19-tracker-evyatar.web.app/"
                />

                <Card 
                      src='https://miro.medium.com/max/2484/0*zLhfw8c-1JwTGHcm.png'
                      title="Tik Tok - soon..."
                      github=""
                      appUrl=""
                />

                <Card 
                      src='https://miro.medium.com/max/2484/0*zLhfw8c-1JwTGHcm.png'
                      title="Memory-Game - soon..."
                      github=""
                      appUrl=""
                />
               </Home_section>
        </Div>
    )
}

export default Home;

const Div = styled.div`
width:100%;
justify-content: center;
align-items: center;
height: 100%;
background-color: #F8EDE9;
h1{ padding-top: 100px;}
`
const Home_section = styled.div`
display: flex;
padding: 30px;
`
