$(document).ready(function() {
	$('#btnDelete').click(deleteTown);
	$('#btnAdd').click(addTown);
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function addTown() {
    const townName = $('#townNameForAdd').val();
    $('#townNameForAdd').val('');
    $('#towns').append($('<option>').text(townName));
    $('#result').text(`${townName} added.`);

}

function shuffleTowns() {
    let towns = $('#towns option').toArray();  // convert options to array
    $('#towns').empty();                       // clear the select

    shuffleArray(towns);                       // shuffle the array
    $('#towns').append(towns);                 // append back to select
    $('#result').text("Towns shuffled.");     // update result
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // swap
    }
}

