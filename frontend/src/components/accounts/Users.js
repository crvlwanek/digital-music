import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers } from '../../actions/auth';
import UserProfileTile from '../layout/fragments/UserProfileTile';

import { Grid } from '@material-ui/core';

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
            <Grid container
                direction="column"
                display="flex"
                alignItems="center"
                justify="center"
                spacing={2}
                maxWidth="xs"
            >
            {this.props.users.map(user => (
                <Grid item xs={12}>
                    <UserProfileTile user={user} />
                </Grid>
            ))}
            </Grid>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.auth.users,
  });
  
  export default connect(mapStateToProps, { getUsers })(Users);