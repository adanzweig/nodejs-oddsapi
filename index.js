// Load the environment variables from the .env file.
require('dotenv').config();

// Import the axios library for making HTTP requests.
const axios = require('axios');

// Define an asynchronous function to get sports betting odds.
async function getSportsBets(sport) {
    try {
        // Make a GET request to the odds API, using the sport parameter and API key from environment variables.
        const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${sport}/odds?regions=us&oddsFormat=american&apiKey=${process.env.API_KEY}`);
        
        // Return the data received from the API.
        return response.data;
    } catch (error) {
        // Log any errors that occur during the API request.
        console.error('error', error);
    }
}

// Self-invoking anonymous function to execute the code immediately.
(async () => {
    // Retrieve NFL betting odds and log specific information about bookmakers and markets.
    const nfl = await getSportsBets('americanfootball_nfl');
    console.log(nfl[0].bookmakers[0].markets[0].outcomes);
    console.log(nfl[0].bookmakers[1].markets[0].outcomes);
    
    // Retrieve soccer betting odds.
    const soccer = await getSportsBets('soccer');
    // Uncomment the next line to log the soccer betting odds.
    // console.log(soccer);
})()
