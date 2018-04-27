const express = require('express');

const api = express.Router();

// mock API
api.get('/profile', (req, res) => {
  res.send({
    username: 'velopert',
    thumbnail: 'https://avatars0.githubusercontent.com/u/17202261?s=460&v=4',
    fullname: 'Minjun Kim',
  });
});

api.get('/repo', (req, res) => {
  res.send([
    {
      id: 0,
      name: 'redux-pender',
      description: 'Redux middleware that helps to manages async actions based on promise',
    },
    {
      id: 1,
      name: 'bitimulate',
      description: 'Simulated cryptocurrency trading system https://bitimulate.com/',
    },
    {
      id: 2,
      name: 'velog',
      description: 'Blog platform for developers',
    },
  ]);
});

module.exports = api;
