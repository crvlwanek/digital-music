import React from "react";
import { 
  AppBar, Toolbar, IconButton, 
  List, ListItem, ListItemText,
  Link, makeStyles, Container,
  Hidden, Grid,
  Typography
} from "@material-ui/core"
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: 'black'
  }
});

const navLinks = [
  {title: 'songs', path: '/songs'},
  {title: 'portfolios', path: '/portfolios'},
  {title: 'login', path: '/login'},
]

function Navbar() {
    const classes = useStyles();
    return (
    <header>
        <AppBar className="navbar" position="static">
          <Toolbar>
          <Container className={classes.navDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
            <Link href="/" className={classes.linkText}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                {/* <Home fontSize="large" /> */}
              <img className="logo" src="../../static/images/DigitalLogo.png"/>
              </Grid>
              <Hidden smDown>
              <Grid item>
                <Typography className="title">
                  Intro to Digital Music Composition
                </Typography>
              </Grid>
              </Hidden>
            </Grid>
            </Link>
            </IconButton>
            <Hidden smDown>
              <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                  <Link href={path} key={title} className={classes.linkText}>
                    <ListItem button>
                      <ListItemText className="navbarLinkText" primary={title} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks}/>
            </Hidden>
            </Container>
          </Toolbar>
        </AppBar>
    </header>
    )
}

export default Navbar;