import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSong } from '../../actions/songs';

export class Form extends Component {
  state = {
    name: '',
    url: '',
    image: '',
  };

  static propTypes = {
    addSong: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, url, image } = this.state;
    const song = { name, url, image };
    this.props.addSong(song);
    this.setState({
      name: '',
      url: '',
      image: '',
    });
  };

  render() {
    const { name, url, image } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Song</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input
              className="form-control"
              type="url"
              name="url"
              onChange={this.onChange}
              value={url}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="url"
              name="image"
              onChange={this.onChange}
              value={image}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSong })(Form);
