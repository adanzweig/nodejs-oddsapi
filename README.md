# Sports Betting Odds API Project

This Node.js project retrieves sports betting odds using the Odds API. It demonstrates the use of Axios for HTTP requests, asynchronous programming in JavaScript, and the handling of environment variables for secure storage of API keys.

## Features

- Retrieve sports betting odds for different sports including NFL and soccer.
- Utilize Axios for efficient HTTP requests.
- Employ async/await for asynchronous API calls.
- Secure API key storage using environment variables.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed.
- An API key from the Odds API. Sign up at [The Odds API](https://the-odds-api.com/) to obtain your key.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/adanzweig/nodejs-oddsapi.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs-oddsapi
   ```
3. Install the required npm packages:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the project root directory.
2. Add your Odds API key to the `.env` file:
   ```
   API_KEY=your_api_key_here
   ```

## Usage

To run the script, use the following command in the terminal:

```bash
node index.js
```

The script will fetch and log betting odds for NFL and soccer. You can modify the script to fetch odds for other sports supported by the Odds API.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.