import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import myImage from '../images/myImage.jpg'

function MyImage() {


  return (
    <Div>
      <Avatar className="img" alt="my-img"
        src={myImage} />
    </Div>
  )
}

export default MyImage;

const Div = styled.div`
display: flex;
width: 100%;
height: 40%;
margin-bottom: 2%;
justify-content: center;
  align-items: center;
.img{
  margin-top: 2%;
  object-fit: contain;
  height: 250px;
  width: 250px;
  @media(max-width: 420px){
    height: 180px;
  width: 180px;
  }
  @media(max-width: 250px){
    height: 120px;
  width: 120px;
  }
}
`