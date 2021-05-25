// grabbing items
const keys = document.querySelectorAll(".key");
const regulars = document.querySelectorAll(".key.white");
const sharps = document.querySelectorAll(".key.black");

// grabbing keys for keyboard press
const whites = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
const blacks = ["w", "e", "r", "t", "y", "u", "i"];

// adding event listener in all keys
keys.forEach((key) => {
    key.addEventListener("click", () => playNote(key));
});

// to access the data attribute, we use the dataset keyword.
// Piano maps the audio id with the data-note attribute of the key to play the correct audio.
// To play the audio we use the play method.

// selecting keys that are pressed to play sound
let playNote = (key) => {
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0; //every time we click the button it reset to 0 so we can click it continuously
    noteSound.play(); //play method
    key.classList.add("active"); //change class to active whenever the btn is clicked
    
    // remove active class when the audio is completely played
    noteSound.addEventListener("ended", () => {
        key.classList.remove("active");
    });
};

// adding an event listener to listen the keydown event
document.addEventListener("keydown", (e) => {
    if (e.repeat) return; //checks if btn is held down or not, if it is in hold it will return the function. Returning the function will not execute any code. 
    
    const key = e.key; //return the key that are pressed

    // to get the index we'll use the indexOf method. Inside the array whites or blacks key index
    
    // we are checking the index of the key that is pressed
    const whiteKeyIndex = whites.indexOf(key); //store the key that we get from e.key for white key
    const blackKeyIndex = blacks.indexOf(key); //store the key that we get from e.key for black key

    // after getting the index of key that is pressed, write condition
    // the condition is, if a white key is found the playNote function will be invoked 
    // and inside the playNote function we'll pass in the key by locating it in the 
    // array with regulars[whiteKeyIndex] for white & sharps[blackKeyIndex] for black.
    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]); //(-1 means not found, any value larger than it means that the key is found)
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]); 
});