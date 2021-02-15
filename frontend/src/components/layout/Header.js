import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AccountBubble from './fragments/AccountBubble';

import MusicNoteIcon from '@material-ui/icons/MusicNote';

import { 
  Button, Grid, Box, Typography,
  AppBar, Toolbar, IconButton, Menu,
  MenuItem, 
} from '@material-ui/core';

const styles = {
  links: {
    margin: "0",
  },
  item: {
    padding: "0",
  },
  icon: {
    fontSize: "2rem",
    color: "grey",
  },
};

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    this.anchorEl = null;
    this.open = Boolean(this.anchorEl);
    const setAnchorEl = value => {
      this.anchorEl = value
    }
    const handleMenu = e => {
      setAnchorEl(e.currentTarget);
      this.open = Boolean(this.anchorEl);
    }
    const handleClose = () => {
      setAnchorEl(null);
    }

    const authLinks = (
      <React.Fragment>
        {/* <Grid item>
          <Typography whiteSpace="nowrap">
            {user ? `Welcome ${user.username}` : ''}
          </Typography>
        </Grid> */}
        <Grid item style={styles.item}>
          <AccountBubble 
            auth={isAuthenticated}
            logout={this.props.logout} />
        </Grid>
      </React.Fragment>
    );

    const guestLinks = (
      <Box>
        <Button color="primary" component={RouterLink} to="/login">
          Login
        </Button>
      </Box>
    );

    return (
      <AppBar color="#e8eae6" position="static"> 
        <Toolbar>
        <Box display={{ xs: 'none', md: 'inline' }} width="300px">
          <Button fullWidth="true" component={RouterLink} to="/">
              {/* <img className={classes.logo} src="../../../static/images/DigitalLogo.png"/> */}
              Intro to Digital Music
          </Button>
        </Box>
        <Box display={{ xs: 'inline', md: 'none' }}>
          <IconButton display={{ md: 'hidden' }} component={RouterLink} to="/">
            <HomeIcon style={styles.icon} />
          </IconButton>
        </Box>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={4}
            style={styles.links}
          >
          <Grid item style={styles.item} >
            <IconButton component={RouterLink} to="/songs">
              <MusicNoteIcon style={styles.icon} />
            </IconButton>
          </Grid>
            {isAuthenticated ? authLinks : guestLinks}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
