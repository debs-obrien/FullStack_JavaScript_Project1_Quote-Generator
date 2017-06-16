var usedQuotes=[];

//get a random number between 2 numbers
function getRandomInt(num) {
    return Math.floor(Math.random() * (num));
}

//get random quote
function getRandomQuote(){
    //get a random num using the getRandomInit function between 0 and the length of the array
    var randomNum = getRandomInt(quotes.length);
    //choose a random quote and return
    var randomQuote = quotes[randomNum];

    //push the random quote into the used quote array
    var usedQuote = usedQuotes.push(randomQuote);

    // now remove that value from the original array
    quotes.splice(randomNum, 1);

    //when the original array has no more quotes let it equal to the used quotes
    //so that we can print quotes again and set the used quotes to an empty array
    if(quotes.length === 0){
        quotes = usedQuotes;
        usedQuotes = [];
    }
    //print out the number of the quote to check for repitition
    console.log(usedQuote);

    //return the randomQuote so we can use it when we call the function
    return randomQuote;
}

// auto change the quote every minute
function autoQuote(){
    var intervalID = window.setInterval(printQuote, 30000);
}

//change bg color of body
function changeColor(){
    //make the colors equal to a random number using function above
    var red = getRandomInt(256);
    var green = getRandomInt(256);
    var blue = getRandomInt(256);
    var bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //make the body equal to the background color
    document.body.style.backgroundColor = bgColor;
}

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable
function printQuote(){
    var selectedQuote = getRandomQuote();

    //call the change color function so bgcolor changes each time
    changeColor();

    //print the quote
    var printHTML = '<p class="quote">' + selectedQuote.quote + '</p>';
    printHTML += '<p class="source">' + selectedQuote.source;

        //if the quote has citation or year then print that too
        if(selectedQuote.citation){
            printHTML += '<span class="citation">' + selectedQuote.citation + '</span>';
        }
        if(selectedQuote.year){
            printHTML += '<span class="year">' + selectedQuote.year + '</span>';
        }

    printHTML += '<span class="tag">' + selectedQuote.tag + '</span>';
    printHTML += '</p>';

    //change the innerHTML of quote-box to show the new quote
    document.getElementById('quote-box').innerHTML = printHTML;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
