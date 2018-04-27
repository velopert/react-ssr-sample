import React, { Component } from 'react';
import { getRepo } from '../store/modules/repo';
import Repo from '../components/Repo';
import { connect } from 'react-redux';
import shouldCancel from '../lib/shouldCancel';

class RepoPage extends Component {
  static preload({ dispatch }) {
    return dispatch(getRepo());
  }

  componentDidMount() {
    if (shouldCancel()) return;
    this.props.getRepo();
  }

  render() {
    if (!this.props.repo) return null;
    return <Repo data={this.props.repo} />;
  }
}
export default connect(
  state => ({
    repo: state.repo
  }),
  {
    getRepo
  }
)(RepoPage);
