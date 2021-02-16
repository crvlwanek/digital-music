import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserProfile } from '../../actions/songs';

export class UserProfile extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    getUserProfile: PropTypes.func.isRequired
  }
  
  username = this.props.match.params.username

  componentDidMount = () => {
    this.props.getUserProfile(this.username);
  }

  render() {
    return (
      <div>
      <h1>Hello {this.username}</h1>
      {this.props.songs.map(song => (
        <p id={song.id}>{song.name}</p>
      ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs.songs,
});

export default connect(mapStateToProps, { getUserProfile })(UserProfile);