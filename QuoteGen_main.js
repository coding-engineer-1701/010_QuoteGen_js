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
    if (Author === '') {
        let author_val = 'Unknown';
    } else {
        let author_val = Author;
    }
    if (Date === '') {
        let date_val = 'Unknown';
    } else {
        let date_val = Date;
    }

    return {
        quote: Quote,
        author: author_val,
        date: date_val,
        print_quote() {
            // put the quote return in here
        }
    }

}


// Create a library of quotes with Quote and Author?
`
methods
 - load the quotes list from memory
 - get quote
 - add quote - 
`

const QuoteLibrary = {

}