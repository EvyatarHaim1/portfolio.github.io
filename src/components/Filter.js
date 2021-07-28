import React from 'react'
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux'
import react from '../images/techTypes/react.png';
import reactnative from '../images/techTypes/react-native.png';
import Unity from '../images/techTypes/unity.png';
import Wordpress from '../images/techTypes/wordpress.png';

export default function Filter() {

    const dispatch = useDispatch();

    const reactjs = useSelector((state) => state.setting.reactjs);
    const reactNative = useSelector((state) => state.setting.reactNative);
    const unity = useSelector((state) => state.setting.unity);
    const wordpress = useSelector((state) => state.setting.wordpress);

    const darkmode = useSelector((state) => state.setting.darkmode);

    const handleChange = (projectType) => {
        console.log(projectType)
        dispatch({ type: 'FILTER_BY_PROJECT_TYPE', payload: projectType });
    };

    return (
        <Div>
            <Row>
                <Checkbox
                    checked={reactjs}
                    color="primary"
                    onChange={() => handleChange('reactjs')}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <h4>React</h4>
                <Img src={react} alt="react" />
            </Row>
            <Row>
                <Checkbox
                    checked={reactNative}
                    color="primary"
                    onChange={() => handleChange('reactNative')}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <h4>React-Native</h4>
                <Img src={reactnative} alt="reactNative" />
            </Row>
            <Row>
                <Checkbox
                    checked={unity}
                    color="primary"
                    onChange={() => handleChange('unity')}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <h4>Unity</h4>
                <Img src={Unity} alt="Unity" />
            </Row>
            <Row>
                <Checkbox
                    checked={wordpress}
                    color="primary"
                    onChange={() => handleChange('wordpress')}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <h4>Wordpress</h4>
                <Img src={Wordpress} alt="Wordpress" />
            </Row>
        </Div>
    )
}

const Div = styled.div`
max-width: 100%;
 justify-content: center; 
align-items: center; 
margin-left: auto;
margin-right: auto;
`
const Img = styled.img`
  width:35%;
  object-fit:contain;
`
const Row = styled.div`
display: flex;
flex-direction:row;
align-items: center;
width:12%;
justify-content:space-between;
margin-left: auto;
margin-right: auto;
margin-bottom: 0.5%;
`