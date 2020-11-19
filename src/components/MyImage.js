import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';



function MyImage() {
   

    return (
        <Div>
             <Avatar className="img" alt="my-img" 
             src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/62071325_10156487581126947_9090027651799711744_o.jpg?_nc_cat=103&ccb=2&_nc_sid=84a396&_nc_ohc=sFrytZxO4mYAX8yW0j8&_nc_ht=scontent.ftlv15-1.fna&oh=b054c403d807595317f3ff264e1a07d1&oe=5FD93FA8" />
        </Div>
    )
}

export default MyImage;

const Div = styled.div`
display: flex;
width: 100vw;
height: 300px;
.img{
  justify-content: center;
  align-items: center;
  object-fit: contain;
  height: 200px;
  width: 200px;
  margin-top: 60px;
  margin-left: 42%;
}

`