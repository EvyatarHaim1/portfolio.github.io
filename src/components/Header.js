import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar:{
        backgroundColor:"#A79344",
    },
    menuButton: {
      marginRight: theme.spacing(110),
    },
    btn: {
        marginRight: "35px",
        color: "white",
    },
  }));

function Header() {

    const classes = useStyles();

    return (
    <Div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link style={{textDecoration: 'inherit'}} className={classes.btn} to="/resume">
              <Button color="inherit">Resume</Button>
        </Link>
          <Link style={{textDecoration: 'inherit'}} className={classes.btn} to="/about_me">
              <Button color="inherit">About mMe</Button>
         </Link>
          <Link style={{textDecoration: 'inherit'}} className={classes.btn} to="/projects">
              <Button color="inherit">Projects</Button>
          </Link>
          <Link style={{textDecoration: 'inherit'}} className={classes.btn} to="/contact">
              <Button color="inherit">Contact</Button>
          </Link>
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
`