// Vars
const tweetsList = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
    //sends the form
    document.querySelector('#formulario')
        .addEventListener('submit', addTweet);

    tweetsList.addEventListener('click', deleteTweet);

    document.addEventListener('DOMContentLoaded', readyLS);

}

// Functions

//local storage ready 
function readyLS(){
    let tweets;
    tweets = getTweetsLS();

    tweets.forEach( tweet => {
        //create delete button
        const deleteButton = document.createElement('a');
        deleteButton.classList = 'borrar-tweet';
        deleteButton.innerText = 'X';

        //create element and add the content list
        const li = document.createElement('li');
        li.innerText = tweet;

        //add deleteButton to the Tweet
        li.appendChild(deleteButton);

        //add Tweet to the list
        tweetsList.appendChild(li);
    });
    console.log(tweets)
}

// Add Tweet to form
function addTweet(e) {
    e.preventDefault();
    //the textarea value
    const tweet = document.getElementById('tweet').value;

    //create delete button
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'borrar-tweet';
    deleteButton.innerText = 'X';

    //create element and add the content list
    const li = document.createElement('li');
    li.innerText = tweet;

    //add deleteButton to the Tweet
    li.appendChild(deleteButton);

    //add Tweet to the list
    tweetsList.appendChild(li);
    console.log(tweet)

    //add Tweet to Local Storage
    addTweetToLS(tweet);
}

function deleteTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        deleteTweetLS(e.target.parentElement.innerText);
        console.log(`Tweet deleted`);
    } 

}

function deleteTweetLS(tweet){
    let tweets, delTweet;
    //delete the 'X' from the tweet
    delTweet = tweet.substring(0, tweet.length -1);
    
    tweets = getTweetsLS();

    tweets.forEach( (tweet, index) => {
        if(delTweet === tweet){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function addTweetToLS(tweet){
    let tweets;
    //obtain the tweets
    tweets = getTweetsLS();
    //add the new tweet
    tweets.push(tweet);
    //pass to string the Array to local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Test the data from local storage
function getTweetsLS(){
    let tweets;
    //values from the local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

