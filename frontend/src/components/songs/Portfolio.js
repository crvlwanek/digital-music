import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPortfolio, deleteSong } from '../../actions/songs';

export class Portfolio extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    getPortfolio: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPortfolio();
  }

  render() {
    return (
      <Fragment>
        <h2>Songs</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Url</th>
              <th>Image</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.songs.map((song) => (
              <tr key={song.id}>
                <td>{song.id}</td>
                <td>{song.name}</td>
                <td>{song.url}</td>
                <td>{song.image}</td>
                <td>
                  <button
                    onClick={this.props.deleteSong.bind(this, song.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {' '}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs.songs,
});

export default connect(mapStateToProps, { getPortfolio, deleteSong })(Portfolio);
