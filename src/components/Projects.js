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

function Home() {
    return (
        <Div>
            <Home_section>
                 <Card 
                      src={airbnb}
                      title="Airbnb-React"
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
                      appUrl=" https://evyatar-1ea31.web.app/"
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
                      appUrl="https://netflix-evyatar.web.app/"
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
                      src={''}
                      title="Soon"
                      github="https://github.com/EvyatarHaim1/Instagram-React"
                      appUrl=" https://instagram-evyatar.web.app/"
                />

                <Card 
                      src={''}
                      title="Soon"
                      github="https://github.com/EvyatarHaim1/Facebook-Messenger-React"
                      appUrl="https://netflix-evyatar.web.app/"
                />
               </Home_section>
        </Div>
    )
}

export default Home;

const Div = styled.div`
width:100%100vw;
margin-left: auto;
justify-content: center;
align-items: center;
height: 100%;
background-color: #F8EDE9;


`
const Home_section = styled.div`
display: flex;
padding: 100px;
`
