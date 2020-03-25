// Vars
const tweetsList = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
    //sends the form
    document.querySelector('#formulario')
        .addEventListener('submit', addTweet);

    tweetsList.addEventListener('click', deleteTweet);

}

// Functions


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
}

function deleteTweet(e){
    e.preventDefault();

    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        console.log(`Tweet deleted`);
        alert('Tweet deleted');
    } 

    //console.log();
}