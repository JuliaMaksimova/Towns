$(document).ready(function() {
    $('#btnDelete').click(deleteTown);
    $('#btnAdd').click(addTown);
    $('#btnShuffle').click(shuffleTowns);
});

function deleteTown() {
    // Get the town name from input
    let townName = $('#townName').val();

    // Clear the input field
    $('#townName').val('');

    let removed = false;

    // Loop through each option in the select
    for (let option of $('#towns option')) {
        if (option.textContent === townName) { // strict comparison
            removed = true;
            option.remove();
        }
    }

    // Show appropriate message using the reusable function
    if (removed) {
        showMessage(townName + " deleted.");
    } else {
        showMessage(townName + " not found.");
    }
}

function addTown() {
    const townName = $('#townNameForAdd').val();

    // Clear the input field
    $('#townNameForAdd').val('');

    // Append new town to the select
    $('#towns').append($('<option>').text(townName));

    // Show confirmation
    showMessage(`${townName} added.`);
}

function shuffleTowns() {
    let towns = $('#towns option').toArray();

    // Clear the select
    $('#towns').empty();

    // Shuffle the options
    shuffleArray(towns);

    // Append back to the select
    $('#towns').append(towns);

    // Show message
    showMessage("Towns shuffled.");
}

// Fisher-Yates shuffle helper
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Reusable function to show temporary messages
function showMessage(msg) {
    $('#result').text(msg).css("display", "block");

    setTimeout(function() {
        $('#result').hide('blind', {}, 500);
    }, 3000);
}
