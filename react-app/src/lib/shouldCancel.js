import React, { Component } from 'react';

let cancel = process.env.APP_ENV === 'browser' && window.__PRELOADED_STATE__;

const shouldCancel = () => {
  return cancel;
};

export class Rendered extends Component {
  componentDidMount() {
    cancel = false;
  }

  render() {
    return null;
  }
}

export default shouldCancel;
