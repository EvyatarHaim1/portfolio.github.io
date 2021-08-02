import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import SettingOptions from './SettingOptions';


function Header() {

  const darkmode = useSelector((state) => state.setting.darkmode);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: '100%',
      flex: 1
    },
    appbar: {
      display: 'flex',
      flex: 1,
      backgroundColor: !darkmode && "#A79344",
    },
    toolar: {
      display: 'flex',
      justifyContent: "space-between",
      alignItems: "center",
    },
    menuButton: {
      marginLeft: theme.spacing(78),
    },
    burgerMenu: {
      color: "white"
    },
    btn: {
      color: "white",
      marginLeft: "45px"
    },
    title: {
      marginLeft: theme.spacing(5),
      color: "white",
      width: '100%',
    }
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Div className={classes.root} >
      <AppBar position="static" color="default" className={classes.appbar}>
        <Toolbar className={classes.toolar}>
          <HeaderLeft>
            <IconButton
              className={classes.burgerMenu}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              aria-haspopup="true"
              style={{ marginTop: '40px' }}
            >


              <Link to="app" smooth={true} duration={1000}>
                <MenuItem className="BurgerIcon"
                  onClick={handleClose}>My Portfolio</MenuItem>
              </Link>
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/cv%2FEvyatar%20Haim.pdf?alt=media&token=7ab18d07-b15d-41df-8e8c-98157af0e60b'
                target='_blank'>
                <MenuItem onClick={handleClose}>CV</MenuItem>
              </a>
              <Link to="Projects" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Link>
              <Link to="AboutMe" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>About Me</MenuItem>
              </Link>
              <Link to="Contact" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Link>
            </Menu>
            <Title>
              <Link to="app" smooth={true} duration={1000}
                className="navLinks">
                <Typography variant="h6" className={classes.title}>
                  My Portfolio
                </Typography>
              </Link>
            </Title>
            <SettingOptions />
          </HeaderLeft>
          <HeaderRight>
            <Toolbar className={classes.menuButton}>
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/cv%2FEvyatar%20Haim.pdf?alt=media&token=7ab18d07-b15d-41df-8e8c-98157af0e60b'
                target='_blank'
                className="navLinks">
                <Button color="inherit" className={classes.btn}>CV</Button>
              </a>
              <Link to="Projects" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>Projects</Button>
              </Link>
              <Link to="AboutMe" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>About Me</Button>
              </Link>
              <Link to="Contact" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>Contact</Button>
              </Link>
            </Toolbar>
          </HeaderRight>
        </Toolbar>
      </AppBar>
    </Div>
  );
}

export default Header;

const Div = styled.div`
display: flex;
position: sticky;
top: 0;
max-width:100%; 
z-index:100;
.MuiToolbar-root, .MuiToolbar-regular, .makeStyles-menuButton-136 ,
.makeStyles-menuButton-124, .makeStyles-menuButton-3, .MuiButtonBase-root MuiButton-root,
.MuiButton-text , .makeStyles-btn-155, .MuiButton-colorInherit{
    margin-left: 0;
}

a{text-decoration: none;}
@media(max-width: 640px){
  .navLinks{
    display: none;
  }
}`

const HeaderLeft = styled.div`
display:flex;
justify-content: flex-start;
width:33%;
align-items: center;
`

const HeaderRight = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
`
const Title = styled.div`
@media (max-width:1100px){
  display:none;
}
`

