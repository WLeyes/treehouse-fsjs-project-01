// FSJS - Random Quote Generator
console.log('connected to scripts.js');

// Create the array of quote objects and name it quotes:  you can find this in data/data.js
const UICtrl = (() => {
  // Cenralized Selectors for the HTML markup
  const UISelectors = {
    quote: '.quote',
    source: '.source',
    citation: '.citation',
    year: '.year',
    quoteBox: '#quote-box',
    btn_loadQuote: '#loadQuote'
  }

  return {

    // Create the printQuote funtion and name it printQuote
    printQuote: () => {

      // Get a random quote
      QuoteCtrl.getRandomQuote();
      document.body.style.backgroundColor = QuoteCtrl.colors[Math.floor(Math.random() * QuoteCtrl.colors.length)];
    },

    // used for mapping the selectors
    getSelectors: () => UISelectors
  }
})()

const App = ((QuoteCtrl, UICtrl) => {
  // load all event listeners
  const loadEventListeners = () => {

    // Get UI selectors 
    const UISelectors = UICtrl.getSelectors();

    // Listen for click event on .loadQuote Button
    document.querySelector(UISelectors.btn_loadQuote)
      .addEventListener('click', UICtrl.printQuote, false);
  }
  return {
    init: () => {
      // Initialize a random quote
      QuoteCtrl.getRandomQuote();

      // Load event listeners
      loadEventListeners();

      // Set Interval to rotate quotes every 3 seconds
      setInterval(() => QuoteCtrl.getRandomQuote(), 3000);
    }
  }
})(QuoteCtrl, UICtrl)

// Ititialize App
App.init();