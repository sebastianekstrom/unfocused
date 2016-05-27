/* global window, Modernizr, document */
'use strict';

var $ = require('jQuery'),
    Unfocused = require('unfocused');

window.jQuery = window.$ = $;

$(document).ready(function() {
    var unfocused = new Unfocused();
    unfocused.init("I'm not focused!");
});
