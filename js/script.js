'use strict';

// FSJS - Random Quote Generator
console.log('connected to scripts.js');

// Create the array of quote objects and name it quotes:  you can find this in data/data.js
var UICtrl = function () {
  // Cenralized Selectors for the HTML markup
  var UISelectors = {
    quote: '.quote',
    source: '.source',
    citation: '.citation',
    year: '.year',
    quoteBox: '#quote-box',
    btn_loadQuote: '#loadQuote'
  };

  return {

    // Create the printQuote funtion and name it printQuote
    printQuote: function printQuote() {

      // Get a random quote
      QuoteCtrl.getRandomQuote();
    },

    // used for mapping the selectors
    getSelectors: function getSelectors() {
      return UISelectors;
    }
  };
}();

var App = function (QuoteCtrl, UICtrl) {
  // load all event listeners
  var loadEventListeners = function loadEventListeners() {

    // Get UI selectors 
    var UISelectors = UICtrl.getSelectors();

    // Listen for click event on .loadQuote Button
    document.querySelector(UISelectors.btn_loadQuote).addEventListener('click', UICtrl.printQuote, false);
  };
  return {
    init: function init() {
      // Initialize a random quote
      QuoteCtrl.getRandomQuote();

      // Load event listeners
      loadEventListeners();

      // Set Interval to rotate quotes every 10 seconds
      setInterval(function () {
        return QuoteCtrl.getRandomQuote();
      }, 10000);
    }
  };
}(QuoteCtrl, UICtrl);

// Ititialize App
App.init();