import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Menu, MenuItem, IconButton, Button
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
    icon: {
        fontSize: "2rem",
        color: "grey",
    },
}

export default function AccountBubble(props) {
  const auth = props.auth;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        >
        <AccountCircle style={styles.icon} />
        </IconButton>
        <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        >
        <MenuItem onClick={handleClose}>
            <Button component={RouterLink} to="/portfolio">
                Portfolio
            </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Button 
                onClick={props.logout}
                variant="outlined"
                color="secondary"
            >
                Logout
            </Button>
        </MenuItem>
        </Menu>
    </div>
 )}