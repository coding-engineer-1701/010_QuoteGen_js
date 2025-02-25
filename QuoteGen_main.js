console.log("Hello, world!")

// Create a Function that generates Quotes
function generateQuote() {
    // gets a quote from quote list or library
    // Returns quote and author as formatted string
}




// create a quotefactory function that will create a quote object
// Create a quote object that contains methods for storing and returning quotes
`
methods
 - change quote - will update the quote
 - print quote - will create the formatted quote
`
const quoteFactory = (Quote, Author='', Date='') => {
    const author_val = Author || "Unknown";
    const date_val = Date || "Unknown";

    return {
        quote: Quote,
        author: author_val,
        date: date_val,
        print_quote() {
            return `${this.quote} 
             - ${this.author}, date ${this.date}`;
        },
    }

}


// Create a library of quotes with Quote and Author?
const fs = require("fs");
const filepathQuoteLib = 'QuoteLibrary.json';

const QuoteLibrary = {

    quotes: [],

    loadQuotes() {
        if (fs.existsSync(filepathQuoteLib)) {
            const rawData = JSON.parse(fs.readFileSync(filepathQuoteLib, 'utf-8'));

            // Convert plain objects back to factory objects
            this.quotes = rawData.map(q => quoteFactory(q.quote, q.author, q.date));
        }
    },

    addQuote(quote, author="", date="") {
        const exists = this.quotes.some(q => q.quote === quote && q.author === author);

        if (!exists) {
            const newQuote = quoteFactory(quote, author, date) ;
            this.quotes.push(newQuote);
            this.saveToFile()    
        }
    },

    saveToFile() {
        fs.writeFileSync(filepathQuoteLib, JSON.stringify(this.quotes))
    }, 

    displayAll() {
        return this.quotes.map(q => q.print_quote()).join("\n");
    },
}


// Load the Quote Library
QuoteLibrary.loadQuotes();
// Add some quotes to the library
QuoteLibrary.addQuote('Do, or Do Not, there is no try', 'Yoda', '')
QuoteLibrary.addQuote("Stay hungry, stay foolish.", "Steve Jobs", 2005);
QuoteLibrary.addQuote("In your actions, don’t procrastinate. In your conversations, don’t confuse. In your thoughts, don’t wander. In your soul, don’t be passive or aggressive. In your life, don’t be all about business.", "Marcus Aurelius")
QuoteLibrary.addQuote("If it is not right, do not do it, if it is not true, do not say it.", "Marcus Aurelius")


console.log(QuoteLibrary.displayAll());


