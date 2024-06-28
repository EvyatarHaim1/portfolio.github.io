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
import Youtube from '../images/Youtube.png';
import tinder from '../images/tinder.png';
import Google from '../images/Google.png';
import slack from '../images/slack.png';
import twitter from '../images/twitter.png';
import whatsapp from '../images/whatsapp.png';
import RocketShip from '../images/RocketShip.png';
import Linkedin from '../images/linkedin.png';
import Basketball from '../images/Basketball.png';
import ArgonAssault from '../images/Argon-Assault.png';
import snapchat from '../images/snapshot.png';
import Gmail from '../images/Gmail.png';
import weatherApp from '../images/weatherapp-react-native.png';
import signal from '../images/signal.png';
import wordpress1 from '../images/wordpress1.png';
import wordpressEmpty from '../images/wordpressEmptyproject.jpg';
import weatherAppReactRedux from '../images/weatherAppReactRedux.png';
import { useSelector } from 'react-redux';
import indigo from '@material-ui/core/colors/indigo';
import Filter from './Filter';

function Home() {

      const darkmode = useSelector((state) => state.setting.darkmode);
      const reactjs = useSelector((state) => state.setting.reactjs);
      const reactNative = useSelector((state) => state.setting.reactNative);
      const unity = useSelector((state) => state.setting.unity);
      const wordpress = useSelector((state) => state.setting.wordpress);

      return (
            <Div id="Projects" style={{ backgroundColor: darkmode ? '#424242' : '#E8E1DE' }}>
                  <h1 style={{ color: darkmode ? 'white' : 'black' }}>OTHER PROJECTS</h1>
                  <Filter />

                  <Home_section>
                        <Card
                              show={reactjs}
                              src={airbnb}
                              title="Airbnb"
                              github="https://github.com/EvyatarHaim1/Airbnb-React"
                              appUrl=" https://airbnb-react-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={amazon}
                              title="Amazon"
                              github="https://github.com/EvyatarHaim1/Amazon"
                              appUrl=" https://evyatar-1ea31.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={netflix}
                              title="Netflix"
                              github="https://github.com/EvyatarHaim1/Netflix-React"
                              appUrl="https://netflix-evyatar.web.app/"
                              className="card"
                        />
                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={spotify}
                              title="Spotify"
                              github="https://github.com/EvyatarHaim1/Spotify-React"
                              appUrl=" https://spotify-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={instagram}
                              title="Instagram-React"
                              github="https://github.com/EvyatarHaim1/Instagram-React"
                              appUrl=" https://instagram-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={COVID19}
                              title="COVID-19 TRACKER"
                              github="https://github.com/EvyatarHaim1/COVID-19-Tracker-React"
                              appUrl="https://covid-19-tracker-evyatar.web.app/"
                              className="card"
                        />


                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={Youtube}
                              title="Youtube"
                              github="https://github.com/EvyatarHaim1/Youtube-React"
                              appUrl="https://you-tube-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={FB_Messenger}
                              title="Facebook Messenger"
                              github="https://github.com/EvyatarHaim1/Facebook-Messenger-React"
                              appUrl="https://facebook-messenger-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src="https://github.com/EvyatarHaim1/MyBurger/raw/master/src/assets/images/view.png?raw=true"
                              title="My-Burger"
                              github="https://github.com/EvyatarHaim1/MyBurger"
                              appUrl="https://react-my-burger-40e0c.web.app/"
                              className="card"
                        />

                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={Linkedin}
                              title="Linkedin"
                              github="https://github.com/EvyatarHaim1/Linkedin-React"
                              appUrl="https://linkedin-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={todoList}
                              title="Todo-List"
                              github="https://github.com/EvyatarHaim1/TODO-React-app"
                              appUrl="https://evyatar-todo-app-react.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={tinder}
                              title="Tinder"
                              github="https://github.com/EvyatarHaim1/Tinder-React"
                              appUrl="https://tinder-evyatar.web.app/"
                              className="card"
                        />
                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={Google}
                              title="Google"
                              github="https://github.com/EvyatarHaim1/Google-React"
                              appUrl="https://g-o-o-g-l-e-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={slack}
                              title="Slack"
                              github="https://github.com/EvyatarHaim1/Slack-React"
                              appUrl="https://slack-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={twitter}
                              title="Twitter"
                              github="https://github.com/EvyatarHaim1/TWITTER-React"
                              appUrl="https://twitter-evyatar.web.app/"
                              className="card"
                        />

                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={whatsapp}
                              title="Whatsapp"
                              github="https://github.com/EvyatarHaim1/Whatsapp-React"
                              appUrl="https://whatsapp-evyatar.web.app/"
                              className="card"
                        />

                        <Card
                              show={unity}
                              src={RocketShip}
                              title="Rocket-Ship - 3D Unity Game"
                              github="https://github.com/EvyatarHaim1/Rocket-Ship"
                              appUrl='https://sharemygame.com/@EvyatarHaim/rocket-ship-evyatar-haim'
                              className="card"
                        />

                        <Card
                              show={unity}
                              src='https://github.com/EvyatarHaim1/Guessing_Languages_Words/raw/master/Assets/view.png?raw=true'
                              title="Guessing Languages Words - Unity 2D"
                              github="https://github.com/EvyatarHaim1/Guessing_Languages_Words"
                              appUrl="https://sharemygame.com/@EvyatarHaim/guessing-languages-words"
                              className="card"
                        />

                  </Home_section>

                  <Home_section>

                        <Card
                              show={unity}
                              src={ArgonAssault}
                              title="Argon-Assault"
                              github="https://github.com/EvyatarHaim1/Argon-Assault"
                              appUrl="https://mb.cision.com/Public/17527/3008319/96abf845cec00b7e_800x800ar.jpg"
                              className="card"
                        />

                        <Card
                              show={unity}
                              src={Basketball}
                              title=" Basketball - 3D Unity Game"
                              github="https://github.com/EvyatarHaim1/Basketball-Game-Unity-3D"
                              appUrl='https://sharemygame.com/@EvyatarHaim/basketball-unity-3d-game'
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={snapchat}
                              title="Snapchat"
                              github="https://github.com/EvyatarHaim1/Snapchat-React"
                              appUrl="https://snapchat-evyatar-haim.web.app/"
                              className="card"
                        />

                  </Home_section>

                  <Home_section>

                        <Card
                              show={reactjs}
                              src={Gmail}
                              title="Gmail"
                              github="https://github.com/EvyatarHaim1/Gmail-React"
                              appUrl="https://g-mail-evyatar-haim.web.app/"
                              className="card"
                        />

                        <Card
                              show={reactNative}
                              src={signal}
                              title=" Signal-React-Native"
                              github="https://github.com/EvyatarHaim1/SIGNAL-React-Native"
                              appUrl='https://signal-evyatar-haim-expo.web.app/'
                              className="card"
                        />

                        <Card
                              show={reactNative}
                              src={weatherApp}
                              title="Weather App- React-Native"
                              github="https://github.com/EvyatarHaim1/Weather-App-React-Native-Expo-"
                              appUrl="https://weather-app-evyatar-haim.web.app/"
                              className="card"
                        />

                  </Home_section>
                  <Home_section>
                        <Card
                              show={wordpress}
                              src={wordpress1}
                              title="Wordpress Ecommerce shop"
                              //     github="https://github.com/EvyatarHaim1/Airbnb-React"
                              appUrl=" https://conceptualdesigns.online/"
                              className="card"
                        />

                        <Card
                              show={reactjs}
                              src={weatherAppReactRedux}
                              title="Weather-app (React & Redux)"
                              github="https://github.com/EvyatarHaim1/Weather-App-React-Redux-Firebase-"
                              appUrl="https://evyatar-haim-weather-app.web.app/"
                              className="card"
                        />

                        <Card
                              show={wordpress}
                              src={wordpressEmpty}
                              title="Wordpress project - soon"
                              //     github="https://github.com/EvyatarHaim1/Amazon"
                              appUrl=""
                              className="card"
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
@media (max-width:481px){
      font-size:15px;
}
h1{ 
      padding-top: 5%;
      padding-bottom: 5%;
@media (max-width:481px){
      font-size:15px;
      padding-top: 8%;
}
}
`
const Home_section = styled.div`
display: flex;
padding: 30px;

@media(max-width: 850px){
   display: flex;
   flex-direction: column;
   justify-content: center;
      }
`
