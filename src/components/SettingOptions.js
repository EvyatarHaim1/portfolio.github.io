import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default function Switches() {

    const darkmode = useSelector((state) => state.setting.darkmode);
    const dispatch = useDispatch();

    const handleChangeDarkMode = () => {
        dispatch({ type: 'SWITCH_TO_DARKMODE', payload: !darkmode });
    };

    return (
        <Div>
            <DarkMode>
                <WbSunnyIcon color="primary" />
                <Switch
                    checked={darkmode}
                    onChange={handleChangeDarkMode}
                    color="secondary"
                    name="checkedDarkmode"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Brightness3Icon color="primary" />
            </DarkMode>
        </Div>
    );
}

const Div = styled.div`
display: flex;
justify-content:center;
width: 100%;
align-items:center;

@media (max-width:480px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
}
`

const UnitSwitch = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-left: 33%;
@media (max-width:480px){
    align-items:center;
    justify-content:flex-start;
    margin-left:0;
    width:80%;
}
`
const DarkMode = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-left: 10%;
@media (max-width:480px){
    align-items:center;
    justify-content:flex-start;
    margin-left:0;
    width:86%;
}
`