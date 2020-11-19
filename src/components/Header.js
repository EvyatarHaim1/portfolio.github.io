import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar:{
        backgroundColor:"#A79344",
    },
    menuButton: {
      marginLeft: theme.spacing(78),
    },
    btn: {
        color: "white",
        marginLeft: "45px"
    },
    title:{
      marginLeft: theme.spacing(5),
      color: "white",
    }
  }));

function Header() {

    const classes = useStyles();

    return (
    <Div className={classes.root} >
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton>
          
          <Link to="app" smooth={true} duration={1000}>
              <Typography variant="h6" className={classes.title}>
               My Portflio
              </Typography>
          </Link>
          <Toolbar className={classes.menuButton}>
          <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/cv%2FEvyatar%20Haim.pdf?alt=media&token=23bfdeaa-5b83-4347-97c4-4384e8ae388e' 
             target='_blank'>
              <Button color="inherit" className={classes.btn}>CV</Button>
          </a>
              <Link to="Projects" smooth={true} duration={1000}>
                 <Button color="inherit" className={classes.btn}>Projects</Button>
              </Link>
              <Link to="AboutMe" smooth={true} duration={1000}>
              <Button color="inherit" className={classes.btn}>About Me</Button>
         </Link>
          <Link to="Contact" smooth={true} duration={1000}>
              <Button color="inherit" className={classes.btn}>Contact</Button>
          </Link>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </Div>
  );
}

export default Header;

const Div = styled.div`
position: sticky;
top: 0;
width:100vw;
z-index:100;
a{text-decoration: none;}
`