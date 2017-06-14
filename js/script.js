// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


var quotes = [
    quote1 = {
        quote: "quote1",
        source: "the source",
        citation: "from",
        year: 1934
    },
    quote2 = {
        quote: "quote2",
        source: "the source2",
        citation: "from me",
        year: 1934
    },
    quote3 = {
        quote: "quote3",
        source: "the source3"
    }
];
var randomNum;
var selectedQuote;
var randomQuote;
var printHTML = '';
//get a random number between 2 numbers
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//get random quote
function getRandomQuote(){
    //get a random num using the getRandomInit function between 0 and the length of the array
    randomNum = getRandomInt(0, quotes.length);
    //choose a random quote and return
    selectedQuote = quotes[randomNum];
    return selectedQuote;
}
function printQuote(){
    //printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    randomQuote = getRandomQuote();
    printHTML = '<p class="quote">' + selectedQuote.quote + '</p>';
    printHTML += '<p class="source">' + selectedQuote.source;
        if(selectedQuote.citation){
            printHTML += '<span class="citation">' + selectedQuote.citation + '</span>';
        }
        if(selectedQuote.year){
            printHTML += '<span class="year">' + selectedQuote.year + '</span>';
        }
    printHTML += '</p>';
    document.getElementById('quote-box').innerHTML = printHTML;
    //console.log(printHTML)
    //printQuote constructs a string containing the different properties of the quote object using the following HTML template:
    //printQuote doesn't add a for a missing citation or a if the year property is missing
    //printQuote displays the final HTML string to the page. You can use this JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
