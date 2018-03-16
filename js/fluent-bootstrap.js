// add css
require('./../scss/fluent-bootstrap.scss');

// add js
require('chart.js');
require('bootstrap');
require('./dashboard');
require('./toggle');
require('./parallax');


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/fluent-bootstrap/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}