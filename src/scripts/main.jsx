import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

window.$ = window.jQuery = $;
require('bootstrap');


import Router from './router';
import App from './components/App.jsx';

$(() => {
  console.log('test')
  let router = new Router();

  ReactDOM.render(
    <App router={router} />,
    document.getElementById('app')
  );
});

// _.templateSettings = {
//   interpolate: /\{\{(.+?)\}\}/g
// };
