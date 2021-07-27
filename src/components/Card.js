import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import AppsIcon from '@material-ui/icons/Apps';

function Card({ src, title, github ,appUrl }) {
 
    return (
        <Div>
             <a href={appUrl} target="_blank">
            <img src={src}
                 alt="projectImg"
            />
            <div className="card_info">
                <h2>{title}</h2>
                <div className="links">
                     <a href={github} target="_blank">
                         <GitHubIcon className="github"/>
                     </a>
                     <a href={appUrl} target="_blank">
                         <AppsIcon className="appUrl"/>
                     </a>
                </div>
            </div>
            </a>
        </Div>
    )
}

export default Card;

const Div = styled.div`
margin: 10px;
border-radius: 10px;
width: 100%;
overflow: hidden;
box-shadow: 0px 6px 18px -9px rgba(0,0,0,0.75);
transition: transform 100ms ease-in;
:hover{
    transform: scale(1.07);
}
img {
    object-fit: fill;
    height: 300px;
    width: 100%;
    
}
.card_info {
    position: relative; 
    margin-top:-9px;
    border-radius: 10px;
    padding: 20px;
    padding-top: 20px;
    border: 1;
    p{
        display:flex;
        justify-content: space-between;
        width: 50px;
        }
    h2{
        font-size: 18px;
        font-weight: 600;
    }
    h4{
        font-size: 14px;
        font-weight: 300px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .price-rating{
        display: flex;
        position: sticky;
        bottom: 0;
        h3{flex: 1;}
        p{ flex: 0;}
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        .appUrl, .github{
            color: #24292E;
        }
    }
}
`