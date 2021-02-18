import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/auth';
import UserProfileTile from '../layout/fragments/UserProfileTile';

import { Grid, Typography, Box,  } from '@material-ui/core';

const styles = {
    title: {
        backgroundColor: "#e8eae6",
        textAlign: "center",
        padding: "40px 0 40px",
    },
    holder: {
        backgroundColor: "#e8eae6",
        padding: "0 15% 400px",
    },
}

export class Users extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <Fragment>
            <Box textAlign="center" 
                justifyContent="center" 
                display="flex"
                width="100%" 
                padding="20px 0 40px"
                style={styles.title}>
                <Typography variant="h3">User Portfolios</Typography>
            </Box>
            <Grid container
                direction="row"
                display="flex"
                alignItems="center"
                justify="center"
                spacing={2}
                style={styles.holder}
            >
            {this.props.users.length > 0 ? this.props.users.map(user => (
                <Grid item xs={12} sm={6} md={4}>
                    <UserProfileTile user={user} />
                </Grid>
            )) : <Typography>No users found</Typography>}
            </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.auth.users,
  });
  
  export default connect(mapStateToProps, { getUsers })(Users);