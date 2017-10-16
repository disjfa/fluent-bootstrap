var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

var Popper = require('popper.js');
window.Popper = Popper;

require('bootstrap/dist/js/bootstrap.js');
require('chart.js');
require('./dashboard');
require('./toggle');
require('./parallax');
