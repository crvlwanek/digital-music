import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Paper, Typography, Button } from '@material-ui/core';

const UserProfileTile = props => {
    return (
        <Paper>
            <Button component={RouterLink} to={`/users/${props.user.username}`}>
                {props.user.username}
            </Button>
        </Paper>
    )
}

export default UserProfileTile;