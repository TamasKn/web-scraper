# Web Scraper

### Backend

Install

- `cd /server`
- `npm install`
- `npm run dev` - Development
- `npm start` - Production

Testing

- `npm test`
- `npm run test:coverage` - Get test coverage

Server is built on Node.js.

Data processing for site scraping built with node-html-parser. I implemented Cheerio as well but
as the requirements stated that the primary purpose is for large text and DOM, I have found the latter
one slower. Cheerio definitely more robust and versatile solution but HTML parser does the very thing what
the task asked, so I have chosen the better performance.

HTML processing steps:

- HTML parsing to text
- Removing every special characters, number - as stated "word occurrences", new lines and multiple 
  whitespaces
- Splitting the words into an array
- Record the number of occurrences into a hash table
- Sending the dictionary

Authentication added. It is not a proper and secure one but good enough to simulate the UX 
of register and login. Normally I would use JWT and sending token wrapped into cookies for the client.


### Frontend

Install

- `cd /client`
- `npm install`
- `npm start`
- `npm run sass:compile` - CSS preprocessor

Testing

- `npm test`

React.js application, state management handled by Context API. There is no complex data flow across the application,
only the user related data stored globally so Redux would have been an overkill.

Server port: if the server running somewhere else than localhost:5000, you can change in `client/src/utils/helper`.

The Mongoose deprecation warning in the console is a known issue, by the official response it can be safely ignored.
They recommend to use mongoose version 5.11.15, which is already set in the package.json, however at new install it 
can appear again, just install the mentioned version to clear up console.

- `npm install mongoose@5.11.15`
