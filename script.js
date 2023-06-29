const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

//let apiQuotes = [];

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function removeLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function getQuote(){
    
    let quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //Check if Author Exists
    if(!quote.author){
        authorText.textContent = "Anonymous";
    }else{
        authorText.textContent = quote.author;
    }

    //Check quote length to apply styling
    if(quote.text.length > 120)
    {
        quoteText.classList.add("long-quote");
    }else{
        quoteText.classList.remove("long-quote");
    }
    //Set Quote
    quoteText.textContent = quote.text;
    removeLoadingSpinner();

}

//Show new quote
function newQuote(){
    showLoadingSpinner();
    setTimeout(getQuote,1000);
}

// Get quotes from API
// async function getQuotes(){
//     showLoadingSpinner();
//     const apiUrl = 'https://type.fit/api/quotes';

//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error){
//         //Catch error here
//     }
// }



//Tweet Quote
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}\n - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener("click",newQuote);
twitterBtn.addEventListener("click",tweetQuote);

//On load
// getQuotes();

//Get Quote from local file
newQuote();
