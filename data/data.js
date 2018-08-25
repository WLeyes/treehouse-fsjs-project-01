QuoteCtrl = (() => {
  return {
    quoteData: () => {
      data = [
        {
          "category": "Star Wars",
          quotes: [
            {
              "quote": "Help me, Obi-Wan Kenobi. You’re my only hope.",
              "source": "Leia Organa",
              "citation": "Star Wars: A New Hope",
              "year": "1977"
            },
            {
              "quote": "I find your lack of faith disturbing.",
              "source": "Darth Vader",
              "citation": "Star Wars: A New Hope",
              "year": "1977"
            },
            {
              "quote": "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.",
              "source": "Han Solo",
              "citation": "Star Wars: A New Hope",
              "year": "1977"
            },
            {
              "quote": "The Force will be with you. Always.",
              "source": "Obi-Wan Kenobi",
              "citation": "Star Wars: A New Hope",
              "year": "1977"
            },
            {
              "quote": "Why, you stuck-up, half-witted, scruffy-looking nerf herder!",
              "source": "Leia Organa",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1980"
            },
            {
              "quote": "Never tell me the odds!",
              "source": "Han Solo",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1980"
            },
            {
              "quote": "Do. Or do not. There is no try.",
              "source": "Yoda",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1980"
            },
            {
              "quote": "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.",
              "source": "Yoda",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1983"
            },
            {
              "quote": "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.",
              "source": "Luke Skywalker",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1983"
            },
            {
              "quote": "Now, young Skywalker, you will die.",
              "source": "Emperor Palpatine",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1983"
            },
            {
              "quote": "Just for once, let me look on you with my own eyes.",
              "source": "Anakin Skywalker",
              "citation": "Star Wars: The Empire Strikes Back",
              "year": "1983"
            },
          ]
        }, // End of Star Wars data object
        {
          "category": "Indiana Jones",
          quotes: [
            {
              "quote": "Fortune and glory, kid. Fortune and glory.",
              "source": "Indiana Jones",
              "citation": "Indiana Jones and the Temple of Doom",
              "year": "1984"
            },
            {
              "quote": "I keep telling you, you listen to me more, you live longer!",
              "source": "Short Round",
              "citation": "Indiana Jones and the Temple of Doom",
              "year": "1984"
            },
            {
              "quote": "Hang on lady, we going for a ride!",
              "source": "Short Round",
              "citation": "Indiana Jones and the Temple of Doom",
              "year": "1984"
            },
            {
              "quote": "I think it’s time to ask yourself; what do you believe in?",
              "source": "Indiana Jones",
              "citation": "Indiana Jones and the Last Crusade",
              "year": "1989"
            },
            {
              "quote": "Sallah, I said *no* camels. That's *five* camels. Can't you count?",
              "source": "Indiana Jones",
              "citation": "Indiana Jones and the Last Crusade",
              "year": "1989"
            },
            {
              "quote": "Snakes. Why’d it have to be snakes?",
              "source": "Indiana Jones",
              "citation": "Indiana Jones and the Last Crusade",
              "year": "1981"
            },
          ]
        }
      ]
    }, // end quoteData

    // Random background colors
    colors: [
      '#3F3EFF', '#3966E8', '#4BA8FF', '#39C1E8', '#3EFFF7', '#3628EF', '#FF5DEF', '#8747FE', '#088FFE', '#03A6CE'
    ],

    // Create the getRandomQuuote function and name it getRandomQuote
    getRandomQuote: () => {
      QuoteCtrl.quoteData();
      console.log("Complete Data object:", data);

      // Pick a random category from data and Assign to variable
      dataObject = data[Math.floor(Math.random() * data.length)];

      // Assign category to a variable
      let category = dataObject.category
      console.log(`Random Category: ${category}`);

      // Pick Random Quote from the dataObject and assign to variable
      let quoteObject = dataObject.quotes[Math.floor(Math.random() * dataObject.quotes.length)];
      console.log("Complete random quote Object:", quoteObject);


      // Get UI selectors 
      const UISelectors = UICtrl.getSelectors();

      // Assign source to a variable
      let quote = quoteObject.quote;
      console.log(`Quote: ${quote}`);

      // Assign source to a variable
      let source = quoteObject.source;
      console.log(`Source: ${source}`);

      // Assign citation to a variable
      let citation = quoteObject.citation;
      console.log(`Citation: ${citation}`);

      // Assign year to a variable
      let year = quoteObject.year;
      console.log(`Year: ${year}`);

      // Replace innerHtml of #quote-box
      let output = `
        <h1 class="category">Category: ${category}</h1>
        <p class="quote">${quote}</p>
        <p class="source">${source}<span class="citation">${citation}</span><span class="year">${year}</span></p>
      `
      document.querySelector(UISelectors.quoteBox).innerHTML = output;
      document.body.style.backgroundColor = QuoteCtrl.colors[Math.floor(Math.random() * QuoteCtrl.colors.length)];
    }
  }
})();