import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPortfolio, deleteSong } from '../../actions/songs';

import { Paper, Typography, Table, TableContainer, TableHead,
  TableRow, TableCell, Link, Button, TableBody,
} from '@material-ui/core';

const styles = {
  header: {
    width: "90%",
  },
  paper: {
    paddingTop: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  table: {
    minWidth: "650",
  },
  tableHeader: {
    fontWeight: "600",
  },
  submit: {
    margin: "15px 0 15px"
  }
}

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
      <Paper style={styles.paper}>
        <Typography style={styles.header} variant="h4">
          My Songs
        </Typography>
      <TableContainer component={Paper}>
        <Table style={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell style={styles.tableHeader}>Name</TableCell>
              <TableCell style={styles.tableHeader}>Song URL</TableCell>
              <TableCell style={styles.tableHeader}>Image URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.songs.map((song) => (
              <TableRow key={song.id}>
                <TableCell>
                  <Button variant="contained" color="secondary"
                  onClick={this.props.deleteSong.bind(this, song.id)}>
                    {' '}
                    Delete
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row">
                  {song.name}
                </TableCell>
                <TableCell><Link href={song.url}>{song.url}</Link></TableCell>
                <TableCell><Link href={song.image}>{song.image}</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Paper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  songs: state.songs.songs,
});

export default connect(mapStateToProps, { getPortfolio, deleteSong })(Portfolio);
