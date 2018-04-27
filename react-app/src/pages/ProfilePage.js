import React, { Component } from 'react';
import { getProfile } from '../store/modules/profile';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import shouldCancel from '../lib/shouldCancel';

class ProfilePage extends Component {
  static preload({ dispatch }) {
    return dispatch(getProfile());
  }

  componentDidMount() {
    if (shouldCancel()) return;
    this.props.getProfile();
  }

  render() {
    const { profile } = this.props;
    if (!profile) return null;
    return (
      <div>
        <Profile {...profile} />
      </div>
    );
  }
}

export default connect(
  state => ({
    profile: state.profile
  }),
  { getProfile } // same as: dispatch => ({ getProfile: () => dispatch(getProfile()) })
)(ProfilePage);
