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
import { useTranslation } from 'react-i18next';
import SwitchLang from './SwitchLang';



function Header({ onChangeLang }) {

  const darkmode = useSelector((state) => state.setting.darkmode);
  const { t } = useTranslation();

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
                  onClick={handleClose}>{t("header.socialProfiles")}</MenuItem>
              </Link>
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/EvyatarHaimCV_2023.pdf?alt=media&token=93a0060f-97e3-43ba-8425-984de65ca38e'
                target='_blank' rel="noreferrer">
                <MenuItem onClick={handleClose}>{t("header.cv")}</MenuItem>
              </a>
              <Link to="Projects" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>{t("header.projects")}</MenuItem>
              </Link>
              <Link to="AboutMe" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>{t("header.aboutMe")}</MenuItem>
              </Link>
              <Link to="Contact" smooth={true} duration={1000}>
                <MenuItem onClick={handleClose}>{t("header.contact")}</MenuItem>
              </Link>
            </Menu>
            <Title>
              <Link to="app" smooth={true} duration={1000}
                className="navLinks">
                <Typography variant="h6" className={classes.title}>
                  {t("header.profile")}
                </Typography>
              </Link>
            </Title>
            <SettingOptions />
          </HeaderLeft>
          <SwitchLang onChangeLang={onChangeLang} />
          <HeaderRight>
            <Toolbar className={classes.menuButton}>
              <a href='https://firebasestorage.googleapis.com/v0/b/certificates-a49e7.appspot.com/o/EvyatarHaimCV_2023.pdf?alt=media&token=93a0060f-97e3-43ba-8425-984de65ca38e'
                target='_blank' rel="noreferrer"
                className="navLinks">
                <Button color="inherit" className={classes.btn}>{t("header.cv")}</Button>
              </a>
              <Link to="Projects" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>{t("header.projects")}</Button>
              </Link>
              <Link to="AboutMe" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>{t("header.aboutMe")}</Button>
              </Link>
              <Link to="Contact" smooth={true} duration={1000}
                className="navLinks">
                <Button color="inherit" className={classes.btn}>{t("header.contact")}</Button>
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

