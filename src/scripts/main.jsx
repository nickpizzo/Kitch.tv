window.$ = window.jQuery = $;
require('bootstrap');

import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';

Parse.initialize(
  "EaJ7PRSxYQaLXTgu4uT14OneQw8obZmes4UcZDju",
  "0fGqYiYFkr9OSbsj5gS56J98b7xSOhmxmq3VKHdU"
);

import Router from './router';
import App from './components/App.jsx';

$(() => {
  let router = new Router();

  ReactDOM.render(
    <App router={router} />,
    document.getElementById('app')
  );
});

window.Parse = Parse;
