import React, { useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
    flex: 1
  },
  appbar: {
    display: 'flex',
    flex: 1,
    backgroundColor: "#A79344",
  },
  toolar: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButton: {
    marginLeft: theme.spacing(78),

  },
  btn: {
    color: "white",
    marginLeft: "45px"
  },
  title: {
    marginLeft: theme.spacing(5),
    color: "white",
  }
}));

function Header() {

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
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolar}>
          <HeaderLeft>
            <IconButton
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
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/cv%2FEvyatar%20Haim.pdf?alt=media&token=eeb561dc-08e1-4e4f-9b3d-d9bbd81191cb'
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
            <Link to="app" smooth={true} duration={1000}
              className="navLinks">
              <Typography variant="h6" className={classes.title}>
                My Portfolio
              </Typography>
            </Link>
          </HeaderLeft>
          <HeaderRight>
            <Toolbar className={classes.menuButton}>
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/cv%2FEvyatar%20Haim.pdf?alt=media&token=eeb561dc-08e1-4e4f-9b3d-d9bbd81191cb'
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
justify-content: center;
align-items: center;
`

const HeaderRight = styled.div`
display:flex;
justify-content: center;
align-items: center;
`


