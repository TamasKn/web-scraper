# Web Scraper

### Backend

Install

- `npm install`
- `npm run dev` - Development
- `npm start` - Production

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
