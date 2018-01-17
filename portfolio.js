
$(document).ready(function() {
   
    $('h1').unbind().click(testing);
    $('.rectangle').unbind().click(showWorkDetails);
});



function testing() {
	console.log('does this work');
}

function showWorkDetails() {
	$('#showWorkDiv').fadeIn();
}